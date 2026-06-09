import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/data';
import { Link } from 'react-router-dom';
import { formatPrice } from '../lib/utils';

export function GiftFinder() {
  const [step, setStep] = useState(1);
  const [ageRange, setAgeRange] = useState('');
  const [budget, setBudget] = useState('');
  const [interest, setInterest] = useState('');

  const ages = ['0-2 Years', '3-5 Years', '6-8 Years', '9-12 Years', 'Teens & Adults'];
  const budgets = ['Under ₹1000', '₹1000 - ₹2500', '₹2500 - ₹5000', 'Above ₹5000'];
  const interests = ['Educational', 'Action & Vehicles', 'Dolls & Soft Toys', 'Board Games', 'Creative & Art'];

  const getResults = () => {
    // Basic mock recommendation logic
    return MOCK_PRODUCTS.slice(0, 3);
  };

  return (
    <div className="flex-1 bg-sky-50 py-10 relative min-h-[80vh] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-white rounded-[3rem] shadow-2xl border-4 border-sky-100 overflow-hidden p-8 md:p-12 min-h-[500px] flex flex-col relative">
          
          {/* Header */}
          <div className="text-center mb-10 pb-8 border-b-2 border-dashed border-sky-100 relative z-10 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-yellow-300 to-orange-400 text-white shadow-lg rounded-2xl mb-4 transform -rotate-6 border-4 border-white">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight">Magic Gift Wizard 🪄</h1>
            <p className="text-slate-500 mt-2 font-bold text-lg">Let us find the perfect toy for your little star!</p>
          </div>

          <div className="flex-1 relative z-10 px-0 sm:px-8">
            <AnimatePresence mode="wait">
              
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
                    <span className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span> 
                    Who is this gift for? 👶
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {ages.map(age => (
                       <button 
                         key={age}
                         onClick={() => { setAgeRange(age); setStep(2); }}
                         className={`p-4 rounded-2xl border-4 transition-all text-center font-black text-sm uppercase tracking-wider ${ageRange === age ? 'border-orange-400 bg-orange-50 text-orange-600 shadow-md transform scale-105' : 'border-sky-100 hover:border-orange-200 hover:bg-sky-50 text-slate-500'}`}
                       >
                         {age}
                       </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
                    <span className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span> 
                    What's your budget? 💰
                  </h2>
                  <div className="grid grid-cols-2 gap-4 flex-wrap">
                    {budgets.map(b => (
                       <button 
                         key={b}
                         onClick={() => { setBudget(b); setStep(3); }}
                         className={`p-4 rounded-2xl border-4 transition-all text-center font-black text-sm uppercase tracking-wider ${budget === b ? 'border-pink-400 bg-pink-50 text-pink-600 shadow-md transform scale-105' : 'border-sky-100 hover:border-pink-200 hover:bg-sky-50 text-slate-500'}`}
                       >
                         {b}
                       </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
                    <span className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span> 
                    What do they love? 🚀
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {interests.map(i => (
                       <button 
                         key={i}
                         onClick={() => { setInterest(i); setStep(4); }}
                         className={`p-4 rounded-2xl border-4 transition-all text-center font-black text-sm uppercase tracking-widest flex flex-col items-center justify-center ${interest === i ? 'border-green-400 bg-green-50 text-green-600 shadow-md transform scale-105' : 'border-sky-100 hover:border-green-200 hover:bg-sky-50 text-slate-500'}`}
                       >
                         {i}
                       </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="text-center mb-8">
                     <span className="inline-block bg-pink-100 text-pink-600 font-black tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm">Magic Complete! 💫</span>
                     <h2 className="text-3xl font-black text-slate-800 tracking-tight">Our Top Picks For You</h2>
                     <p className="text-slate-500 mt-2 font-bold text-sm uppercase tracking-widest">Based on: {ageRange} • {budget} • {interest}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {getResults().map(product => (
                      <div key={product.id} className="flex p-4 border-4 border-sky-100 bg-white shadow-sm rounded-2xl hover:border-indigo-200 transition-all hover:shadow-md">
                        <img src={product.images[0]} alt={product.title} className="w-28 h-28 rounded-xl object-cover border-2 border-slate-100" />
                        <div className="ml-4 flex-1 flex flex-col justify-center">
                           <h3 className="font-black text-lg text-slate-800 hover:text-indigo-500 transition-colors line-clamp-1">{product.title}</h3>
                           <p className="text-sm font-bold text-slate-500 mb-2 line-clamp-2">{product.description}</p>
                           <div className="flex items-center justify-between mt-auto">
                              <span className="font-black text-xl text-orange-500">{formatPrice(product.price)}</span>
                              <Link to={`/product/${product.id}`} className="bg-indigo-100 text-indigo-600 font-black text-xs uppercase tracking-widest hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-full transition-colors">Buy Joy! &rarr;</Link>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-8">
                    <button onClick={() => setStep(1)} className="text-slate-400 hover:text-indigo-500 font-black uppercase tracking-widest text-xs transition-colors flex items-center justify-center mx-auto gap-1">
                      <ArrowLeft size={14} /> Play Again
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          {step > 1 && step < 4 && (
            <div className="absolute bottom-6 left-8 relative z-10 pt-8 pl-8">
              <button 
                onClick={() => setStep(step - 1)}
                className="flex items-center text-slate-400 hover:text-slate-800 font-black tracking-widest text-sm uppercase transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-1" /> Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
