import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router-dom';
import { Package, MapPin, Heart, Award, LogOut, Star } from 'lucide-react';

export function Dashboard() {
  const { user, dbUser, loading, logout } = useAuthStore();

  if (loading) return <div className="flex-1 flex justify-center py-20 bg-sky-50 text-slate-800 font-bold">Loading magic... ✨</div>;
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="flex-1 bg-sky-50 py-10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
           <h1 className="text-4xl font-black text-slate-800 tracking-tight flex items-center gap-3">
             My Account 🎪
           </h1>
           <button onClick={logout} className="text-slate-400 hover:text-red-500 flex items-center tracking-widest uppercase font-black text-xs transition-colors hover:bg-white px-4 py-2 rounded-full border-2 border-transparent hover:border-red-100 shadow-sm">
             <LogOut className="w-4 h-4 mr-2" /> Logout
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="bg-white rounded-[3rem] border-4 border-sky-100 p-6 overflow-hidden md:col-span-1 h-fit shadow-xl">
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} alt={user.displayName || 'User'} className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-300 shadow-inner" />
                <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white rounded-full p-2 shadow-lg border-2 border-white transform rotate-12">
                  <Star size={16} className="fill-current text-yellow-300" />
                </div>
              </div>
              <h2 className="font-black text-xl text-slate-800">{user.displayName || 'Guest User'}</h2>
              <p className="text-sm text-slate-500 font-bold mt-1">{user.email || 'guest@example.com'}</p>
            </div>

            <div className="space-y-3 relative">
              <button className="w-full text-left p-4 rounded-2xl bg-orange-100 text-orange-600 font-black flex items-center transition-all border-2 border-orange-200 shadow-sm">
                <Package className="w-5 h-5 mr-3" /> My Orders
              </button>
              <button className="w-full text-left p-4 rounded-2xl hover:bg-sky-50 text-slate-600 hover:text-sky-600 font-bold flex items-center transition-colors border-2 border-transparent">
                <Heart className="w-5 h-5 mr-3" /> Wishlist
              </button>
              <button className="w-full text-left p-4 rounded-2xl hover:bg-sky-50 text-slate-600 hover:text-sky-600 font-bold flex items-center transition-colors border-2 border-transparent">
                <MapPin className="w-5 h-5 mr-3" /> Addresses
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-dashed border-sky-100">
               <div className="bg-gradient-to-r from-yellow-300 to-orange-400 p-5 rounded-[2rem] border-4 border-white text-white flex items-center justify-between shadow-lg shadow-orange-200">
                 <div>
                   <span className="block text-xs font-black uppercase tracking-widest mb-1 text-orange-900/60">Loyalty Points</span>
                   <span className="text-3xl font-black drop-shadow-md">{dbUser?.loyaltyPoints || 100}</span>
                 </div>
                 <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                   <Award className="w-8 h-8 text-white drop-shadow-md" />
                 </div>
               </div>
               <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mt-4 text-center">Use points for free toys! 🎁</p>
            </div>
          </div>

          {/* Main Area */}
          <div className="md:col-span-3 space-y-8">
             <div className="bg-white rounded-[3rem] border-4 border-sky-100 p-8 shadow-xl">
               <h3 className="text-2xl font-black text-slate-800 mb-8 tracking-tight flex items-center gap-3">
                 <span className="bg-indigo-100 p-2 rounded-xl text-indigo-600"><Package size={24} /></span>
                 Recent Orders
               </h3>
               
               <div className="text-center py-20 bg-indigo-50/50 rounded-[2rem] border-4 border-indigo-100 border-dashed relative overflow-hidden">
                 <div className="absolute top-10 left-10 text-indigo-200 opacity-50"><Star size={40} /></div>
                 <div className="absolute bottom-10 right-10 text-pink-200 opacity-50"><Star size={30} /></div>
                 
                 <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border-2 border-indigo-100 flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                   <Package className="w-10 h-10 text-indigo-300" />
                 </div>
                 <h4 className="text-xl font-black text-slate-700 mb-2">No orders right now</h4>
                 <p className="text-slate-500 font-bold">Go find something amazing!</p>
               </div>
             </div>

             <div className="bg-gradient-to-r from-pink-400 to-indigo-500 rounded-[3rem] border-4 border-white p-8 shadow-2xl relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 flex-1 text-center md:text-left">
                  <span className="bg-yellow-400 text-slate-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-4 shadow-md transform -rotate-2">💸 Refer & Earn</span>
                  <h3 className="text-3xl font-black mb-2">Invite Friends, Get Toys!</h3>
                  <p className="font-bold text-indigo-100 max-w-md">Share your magic link. When a friend buys, you both get 500 Loyalty Points (₹50 value)!</p>
                </div>
                <div className="relative z-10 w-full md:w-auto flex flex-col gap-3 shrink-0">
                  <div className="bg-white/20 border-2 border-white/40 p-3 rounded-2xl flex items-center justify-between gap-4 backdrop-blur-sm">
                    <code className="font-mono font-black text-lg text-white mx-2 tracking-widest">TOYSHOP-{user.uid?.substring(0, 5).toUpperCase() || 'MAGIC'}</code>
                    <button className="bg-white text-indigo-600 font-black px-4 py-2 rounded-xl text-sm hover:scale-105 transition-transform" onClick={() => alert('Copied to clipboard!')}>COPY</button>
                  </div>
                  <button className="bg-green-500 hover:bg-green-400 text-white font-black uppercase tracking-widest py-3 rounded-2xl shadow-lg border-2 border-green-300 transition-colors" onClick={() => {
                    const message = `Hey! I found this amazing toy store in Badlapur. Use my code TOYSHOP-${user.uid?.substring(0, 5).toUpperCase() || 'MAGIC'} to get 500 bonus points! 🚀`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
                  }}>
                    Share on WhatsApp
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
