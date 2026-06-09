import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, BookOpen, Target, Gamepad2, Car, Trophy, Smile, Sun, Baby, Star, Cloud } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { MOCK_PRODUCTS, CATEGORIES } from '../lib/data';
import { Product } from '../types';
import React from 'react';

const CATEGORY_ASSETS: Record<string, { icon: React.ElementType, image: string, color: string }> = {
  "Educational": { icon: BookOpen, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80", color: "bg-blue-400" },
  "Action Figures": { icon: Target, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80", color: "bg-red-400" },
  "Board Games": { icon: Gamepad2, image: "https://loremflickr.com/cache/resized/65535_54536290387_5e782215b3_h_800_800_nofilter.jpg", color: "bg-green-400" },
  "Remote Control": { icon: Car, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80", color: "bg-purple-400" },
  "Hot Wheels": { icon: Trophy, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80", color: "bg-orange-400" },
  "Soft Toys": { icon: Smile, image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=400&q=80", color: "bg-pink-400" },
  "Outdoor": { icon: Sun, image: "https://loremflickr.com/cache/resized/65535_53832312193_e8696c7615_h_800_800_nofilter.jpg", color: "bg-yellow-400" },
  "Baby Toys": { icon: Baby, image: "https://loremflickr.com/cache/resized/3271_5709430499_79c81ac11e_h_800_800_nofilter.jpg", color: "bg-teal-400" },
};

// Component to represent a Single Product Card
function ProductCard({ product }: { product: Product, key?: React.Key }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-[2rem] border-4 border-sky-100 overflow-hidden group flex flex-col shadow-xl shadow-sky-100 relative"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-pink-300 rounded-bl-full z-0 opacity-20 transition-transform group-hover:scale-150"></div>
      
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-sky-50 m-2 rounded-[1.5rem] p-4">
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 rounded-xl shadow-inner" 
        />
        {product.isNewArrival && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-teal-400 to-emerald-400 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide border-2 border-white shadow-md animate-pulse">
            ✨ New Arrival ✨
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-black px-3 py-1.5 rounded-full border-2 border-white shadow-md transform rotate-6">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1 relative z-10">
        <div className="text-xs text-sky-500 mb-1 font-bold uppercase tracking-wider">{product.brand}</div>
        <Link to={`/product/${product.id}`} className="font-black text-slate-800 text-lg group-hover:text-indigo-600 transition-colors line-clamp-2 mb-4 leading-tight">
          {product.title}
        </Link>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-orange-500 drop-shadow-sm">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through ml-2 font-bold">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Home() {
  const bestSellers = MOCK_PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div className="flex-1 overflow-hidden relative">
      {/* Decorative scattered icons */}
      <div className="absolute top-20 left-10 text-yellow-300 opacity-50 animate-bounce" style={{ animationDuration: '3s' }}><Star size={60} /></div>
      <div className="absolute top-40 right-10 text-white opacity-50 animate-pulse"><Cloud size={100} /></div>
      <div className="absolute bottom-60 left-5 text-pink-300 opacity-50 animate-bounce" style={{ animationDelay: '1s' }}><Smile size={50} /></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-400 via-indigo-400 to-purple-500 text-white pb-20 pt-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-indigo-600 text-sm font-black uppercase rounded-full mb-8 shadow-lg shadow-white/30"
            >
              <Star className="text-yellow-400 fill-current" size={16} /> 
              Welcome to the Fun Zone 
              <Star className="text-yellow-400 fill-current" size={16} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 max-w-2xl leading-none"
            >
              Let's <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 drop-shadow-md">PLAY!</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl font-bold font-sans drop-shadow-sm"
            >
              The coolest toys, games, and gifts for amazing kids! 🚀
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
               <Link to="/shop" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-white font-black uppercase tracking-widest py-5 px-10 rounded-full text-lg shadow-[0_10px_30px_rgba(249,115,22,0.5)] transition-transform hover:-translate-y-2 flex items-center border-4 border-yellow-200">
                 Explore Toys <ShoppingCart className="ml-3 w-6 h-6" />
               </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end mt-12 md:mt-0 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
               whileHover={{ rotate: 5, scale: 1.05 }}
               className="relative z-10 w-full max-w-lg aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform cursor-pointer flex items-center justify-center bg-yellow-300"
             >
               <img src="https://loremflickr.com/cache/resized/65535_54545265890_19b2380fd5_k_1200_600_nofilter.jpg" alt="Fun Toys" className="w-full h-full object-cover" />
             </motion.div>
             {/* Floating bubbles */}
             <div className="absolute top-10 right-0 w-16 h-16 bg-pink-400 rounded-full mix-blend-screen opacity-70 animate-bounce" style={{animationDuration: '2s'}}></div>
             <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-400 rounded-full mix-blend-screen opacity-70 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden text-sky-50">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[50px] fill-current transform rotate-180">
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></path>
          </svg>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="bg-sky-50 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div whileHover={{ scale: 1.1 }} className="bg-blue-100 p-6 rounded-[2rem] shadow-sm font-black text-blue-500 border-2 border-blue-200">
              <span className="text-4xl mb-2 block">🏠</span>
              Badlapur's Best
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="bg-pink-100 p-6 rounded-[2rem] shadow-sm font-black text-pink-500 border-2 border-pink-200">
              <span className="text-4xl mb-2 block">❤️</span>
              10k+ Happy Kids
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="bg-green-100 p-6 rounded-[2rem] shadow-sm font-black text-green-500 border-2 border-green-200">
              <span className="text-4xl mb-2 block">🎁</span>
              Local Delivery
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="bg-yellow-100 p-6 rounded-[2rem] shadow-sm font-black text-yellow-600 border-2 border-yellow-200">
              <span className="text-4xl mb-2 block">⭐</span>
              4.9/5 Rating
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-20 bg-sky-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">Pick a Category!</h2>
            <div className="w-24 h-2 bg-indigo-500 rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.slice(0, 8).map((cat, i) => {
              const asset = CATEGORY_ASSETS[cat];
              const Icon = asset?.icon || ShoppingCart;
              return (
                <Link 
                  key={i} 
                  to={`/shop?category=${encodeURIComponent(cat)}`}
                  className={`${asset?.color || 'bg-indigo-400'} rounded-[3rem] overflow-hidden text-center transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-${asset?.color}/30 group h-56 flex flex-col items-center justify-center p-6 relative border-4 border-white shadow-lg`}
                >
                  <div className="w-20 h-20 mb-4 bg-white rounded-full flex items-center justify-center text-slate-800 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-black text-white text-lg tracking-wide">{cat}</h3>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/categories" className="inline-block bg-white text-indigo-600 font-black px-8 py-4 rounded-full border-2 border-indigo-100 hover:border-indigo-500 hover:text-indigo-500 hover:shadow-lg transition-all">
              View All Categories 🧸
            </Link>
          </div>
        </div>
      </section>

      {/* Festival Special Collections */}
      <section className="py-16 bg-sky-50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/offers" className="block relative bg-gradient-to-r from-teal-400 to-indigo-500 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:shadow-2xl hover:-translate-y-2 transition-all">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
               <div className="p-10 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
                  <div className="mb-8 md:mb-0">
                    <span className="bg-yellow-400 text-slate-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-6 shadow-md transform -rotate-2">🌟 Mega Deals!</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-md mb-4 leading-tight">Festival Toy Fiesta</h2>
                    <p className="font-bold text-lg text-indigo-100 max-w-lg">Get up to 60% OFF on handpicked premium toys for the festive season!</p>
                  </div>
                  <div className="shrink-0">
                    <span className="bg-white text-indigo-600 font-black uppercase tracking-widest text-sm py-5 px-10 rounded-full shadow-xl hover:scale-110 transition-transform animate-bounce inline-block">Hurry! Shop Now &rarr;</span>
                  </div>
               </div>
            </Link>
         </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-sky-50 relative border-t-4 border-white border-dashed">
        <div className="absolute top-10 left-10 text-orange-400 opacity-30 animate-spin-slow"><Sun size={80} /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">Hot Favorites 🔥</h2>
              <p className="text-slate-500 font-bold mt-3 text-lg">The toys everyone is talking about!</p>
            </div>
            <Link to="/shop?filter=bestseller" className="hidden md:flex bg-orange-100 text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-colors">See all favorites &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bulk & Corporate Orders */}
      <section className="py-24 bg-sky-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
             
             <div className="flex-1 relative z-10 text-white text-center md:text-left">
                <span className="bg-white text-pink-600 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 inline-block shadow-sm">Party Time! 🎈</span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">Return Gifts & <br/>Party Favors</h2>
                <p className="text-white/90 mb-8 max-w-md font-bold text-lg">Planning a birthday party or school event? Get fun, customized return gift packages starting at just ₹20!</p>
                
                <a href="https://wa.me/919730044342?text=I'm%20interested%20in%20Bulk%20Orders" target="_blank" rel="noreferrer" className="bg-white text-rose-500 shadow-xl font-black uppercase tracking-widest py-4 px-10 rounded-full text-sm transition-transform hover:scale-110 inline-block border-4 border-pink-100">
                  Request Quote
                </a>
             </div>

             <div className="w-full md:w-[400px] relative z-10">
                <div className="bg-white p-8 rounded-[3rem] border border-sky-100 shadow-2xl">
                   <h3 className="text-2xl font-black text-slate-800 mb-6 text-center">Quick Inquiry</h3>
                   <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Yay! Inquiry Sent! We will contact you soon.'); }}>
                      <div>
                        <select className="w-full bg-sky-50 border-2 border-transparent rounded-2xl px-4 py-3 text-slate-700 focus:outline-none focus:border-pink-400 font-bold">
                          <option value="birthday">Birthday Party Gifts</option>
                          <option value="school">School Prizes</option>
                          <option value="corporate">Other Events</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Quantity?" required className="w-full bg-sky-50 border-2 border-transparent rounded-2xl px-4 py-3 text-slate-700 focus:outline-none focus:border-pink-400 font-bold" />
                        <input type="number" placeholder="Budget ₹" required className="w-full bg-sky-50 border-2 border-transparent rounded-2xl px-4 py-3 text-slate-700 focus:outline-none focus:border-pink-400 font-bold" />
                      </div>
                      <div>
                        <input type="tel" placeholder="Mobile No. (+91)" required className="w-full bg-sky-50 border-2 border-transparent rounded-2xl px-4 py-3 text-slate-700 focus:outline-none focus:border-pink-400 font-bold" />
                      </div>
                      <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-black uppercase tracking-widest py-4 rounded-2xl hover:opacity-90 shadow-lg shadow-pink-500/30 transition-all hover:-translate-y-1 mt-2 border-2 border-white">
                        Send Inquiry ✨
                      </button>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Magic Gift Finder CTA */}
      <section className="py-20 bg-emerald-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-emerald-500 mb-8"
          >
            <ShoppingCart size={40} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight drop-shadow-md">Magic Gift Finder 🪄</h2>
          <p className="text-xl text-emerald-50 font-bold max-w-2xl mx-auto mb-12">
            Not sure what to buy? Let our magic wizard find the perfect toy for any age, budget, and interest!
          </p>
          <Link to="/gift-finder" className="bg-yellow-400 text-slate-800 font-black uppercase tracking-widest py-5 px-12 rounded-full text-lg shadow-[0_10px_0_theme(colors.yellow.600)] hover:translate-y-1 hover:shadow-[0_5px_0_theme(colors.yellow.600)] transition-all inline-block active:translate-y-3 active:shadow-none border-4 border-white">
            Start Wizard Now!
          </Link>
        </div>
      </section>

    </div>
  );
}
