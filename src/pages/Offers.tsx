import { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Gift, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Offers() {
  const [timeLeft, setTimeLeft] = useState(86400 * 3); // 3 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex-1 bg-sky-50 py-10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Campaign Tabs */}
        <div className="flex justify-center gap-4 mb-8">
           <button className="bg-orange-500 text-white font-black px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-md transform scale-105 border-4 border-white transition-all">🧨 Diwali</button>
           <button className="bg-white text-slate-500 hover:text-green-600 hover:bg-green-50 font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-sm transition-all">🎄 Christmas</button>
           <button className="bg-white text-slate-500 hover:text-yellow-600 hover:bg-yellow-50 font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-sm transition-all">☀️ Summer</button>
        </div>

        {/* Festival Banner */}
        <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 rounded-[3rem] overflow-hidden shadow-2xl mb-16 border-4 border-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center text-white">
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex justify-center mb-4">
               <PartyPopper className="w-20 h-20 text-yellow-300 drop-shadow-md" />
            </motion.div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-lg text-white">
              Diwali Mega Sale!
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-bold mb-8 text-white/90 max-w-2xl mx-auto">
              Up to 60% OFF on Action Figures, LEGO, and Educational Toys.
            </motion.p>
            
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} flex className="bg-white/20 backdrop-blur-md rounded-[2.5rem] p-8 border-2 border-white/40 mb-10 max-w-md w-full shadow-inner">
               <div className="text-[12px] uppercase tracking-widest font-black mb-4 text-white">Sale Ends In:</div>
               <div className="grid grid-cols-4 gap-4 text-center">
                 <div>
                   <div className="text-3xl font-black bg-white text-pink-500 rounded-2xl py-3 shadow-sm">{days.toString().padStart(2, '0')}</div>
                   <div className="text-[10px] font-black mt-2 text-white tracking-widest uppercase">Days</div>
                 </div>
                 <div>
                   <div className="text-3xl font-black bg-white text-pink-500 rounded-2xl py-3 shadow-sm">{hours.toString().padStart(2, '0')}</div>
                   <div className="text-[10px] font-black mt-2 text-white tracking-widest uppercase">Hours</div>
                 </div>
                 <div>
                   <div className="text-3xl font-black bg-white/20 text-white rounded-2xl py-3 border-2 border-white/30 shadow-inner">{minutes.toString().padStart(2, '0')}</div>
                   <div className="text-[10px] font-black mt-2 text-white/80 tracking-widest uppercase">Mins</div>
                 </div>
                 <div>
                   <div className="text-3xl font-black bg-white/20 text-white rounded-2xl py-3 border-2 border-white/30 shadow-inner">{seconds.toString().padStart(2, '0')}</div>
                   <div className="text-[10px] font-black mt-2 text-white/80 tracking-widest uppercase">Secs</div>
                 </div>
               </div>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <Link to="/shop" className="bg-white text-slate-800 hover:text-pink-600 hover:bg-slate-50 font-black tracking-widest uppercase text-sm py-4 px-10 rounded-[2rem] shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all inline-flex items-center border-4 border-white">
                Claim Deals Now <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border-4 border-sky-100 shadow-xl flex items-center justify-between group cursor-pointer hover:border-pink-200 transition-all hover:shadow-pink-100">
            <div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Coupon Code</div>
               <h3 className="text-4xl font-black text-pink-500 mb-2 drop-shadow-sm tracking-tight">NEW500</h3>
               <p className="text-slate-500 font-bold">Get Flat ₹500 OFF on your first purchase above ₹2000.</p>
            </div>
            <div className="w-16 h-16 bg-sky-50 text-slate-300 border-2 border-sky-100 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-orange-400 group-hover:to-pink-500 group-hover:text-white group-hover:border-white transition-all shadow-sm">
               <ShieldCheck className="w-8 h-8" />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] border-4 border-sky-100 shadow-xl flex items-center justify-between group cursor-pointer hover:border-indigo-200 transition-all hover:shadow-indigo-100">
            <div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Return Gifts Plan</div>
               <h3 className="text-4xl font-black text-indigo-500 mb-2 drop-shadow-sm tracking-tight">Bulk20</h3>
               <p className="text-slate-500 font-bold">Extra 20% OFF when you buy 10+ identical items for return gifts.</p>
            </div>
            <div className="w-16 h-16 bg-sky-50 text-slate-300 border-2 border-sky-100 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-indigo-400 group-hover:to-purple-500 group-hover:text-white group-hover:border-white transition-all shadow-sm">
               <Gift className="w-8 h-8" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
