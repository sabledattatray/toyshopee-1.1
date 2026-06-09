import { create } from 'zustand';
import { User, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthState {
  user: User | null;
  dbUser: any | null; // Detailed user info from Firestore
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => {
  // Listen to Firebase auth state changes
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      // Fetch detailed user document from Firestore
      try {
        const userRef = doc(db, 'users', firebaseUser.uid);
        const userSnap = await getDoc(userRef);
        let dbUser = null;
        
        if (userSnap.exists()) {
          dbUser = userSnap.data();
        } else {
          // Create new user profile if it doesn't exist
          dbUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            role: 'customer',
            loyaltyPoints: 100, // Initial signup bonus
            createdAt: new Date().toISOString(),
          };
          await setDoc(userRef, dbUser);
        }
        set({ user: firebaseUser, dbUser, loading: false });
      } catch (error) {
        console.error("Error fetching user data", error);
        set({ user: firebaseUser, loading: false });
      }
    } else {
      set({ user: null, dbUser: null, loading: false });
    }
  });

  return {
    user: auth.currentUser,
    dbUser: null,
    loading: true,
    loginWithGoogle: async () => {
      set({ loading: true });
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("Error signing in", error);
        set({ loading: false });
      }
    },
    logout: async () => {
      set({ loading: true });
      await signOut(auth);
      set({ user: null, dbUser: null, loading: false });
    },
  };
});
