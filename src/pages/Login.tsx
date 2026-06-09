import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Smile, Star, Cloud, ArrowRight, ShieldCheck } from 'lucide-react';

export function Login() {
  const { loginWithGoogle, user } = useAuthStore();
  const navigate = useNavigate();

  // If already logged in, redirect to account/dashboard or home
  if (user) {
    navigate('/account');
    return null;
  }

  const handleLogin = async () => {
    await loginWithGoogle();
    navigate('/account');
  };

  return (
    <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-sky-50 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 text-yellow-300 opacity-50 animate-bounce" style={{ animationDuration: '3s' }}><Star size={60} /></div>
      <div className="absolute bottom-20 right-10 text-white opacity-80 animate-pulse"><Cloud size={100} /></div>
      <div className="absolute top-1/2 left-20 text-indigo-200 opacity-50 animate-spin-slow"><Star size={40} /></div>

      <div className="max-w-md w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-10 shadow-2xl border-4 border-sky-100 relative overflow-hidden"
        >
          {/* Top circle decoration */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply opacity-50"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply opacity-50"></div>
          
          <div className="text-center relative z-10 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-pink-400 to-orange-400 text-white rounded-[1.5rem] shadow-xl rotate-3 mb-6 border-4 border-white"
            >
              <Smile size={40} />
            </motion.div>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-2">Welcome Back! ✨</h1>
            <p className="font-bold text-slate-500">Sign in to unlock exclusive toy deals and manage your wishlist!</p>
          </div>

          <div className="relative z-10 space-y-6">
            <button 
              onClick={handleLogin}
              className="w-full bg-white border-4 border-slate-100 hover:border-sky-200 text-slate-700 font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-sky-50 shadow-sm group"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" referrerPolicy="no-referrer" className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Sign in with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-sky-100"></div>
              </div>
              <div className="relative flex justify-center text-sm font-black">
                <span className="px-4 bg-white text-slate-400 uppercase tracking-widest">Or try our demo</span>
              </div>
            </div>

            <button 
              onClick={() => {
                alert("This is a fun demo! Try signing in with Google for the full magic. ✨");
              }}
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 text-white font-black uppercase tracking-widest py-4 rounded-2xl flex items-center justify-center transition-all shadow-lg hover:-translate-y-1 hover:shadow-pink-500/30 text-sm border-2 border-white group"
            >
              Guest Login <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 relative z-10 text-center flex flex-col items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-widest bg-sky-50 px-3 py-1.5 rounded-full">
              <ShieldCheck size={14} className="text-green-500" />
              100% Secure Login
            </span>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
