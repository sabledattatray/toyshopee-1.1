import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Share2, ShieldCheck, Truck, Star } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/data';
import { formatPrice } from '../lib/utils';
import { useCartStore } from '../store/cartStore';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const addToCart = useCartStore(state => state.addItem);

  if (!product) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 bg-[#07090D]">
        <h1 className="text-2xl font-black text-white">Product Not Found</h1>
        <Link to="/shop" className="mt-4 text-indigo-400 font-bold uppercase tracking-widest hover:text-indigo-300 transition-colors">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-sky-50 py-10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex text-xs font-black uppercase tracking-widest text-slate-400 mb-8 border-2 border-white bg-white/50 w-fit px-4 py-2 rounded-full backdrop-blur-sm shadow-sm inline-flex items-center">
          <Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2 text-indigo-200">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-indigo-500 transition-colors">{product.category}</Link>
          <span className="mx-2 text-indigo-200">/</span>
          <span className="text-indigo-900 truncate max-w-[200px] sm:max-w-none">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-[3rem] border-4 border-sky-100 p-6 md:p-8 shadow-xl">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-sky-50 border-4 border-white shadow-sm group">
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-sky-50 border-4 border-white shadow-sm cursor-pointer hover:border-pink-300 transition-colors">
                     <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">{product.brand}</span>
              <div className="flex items-center text-xs text-slate-500 font-bold tracking-wide bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span className="font-black text-slate-800 mr-1">{product.rating}</span>
                ({product.reviewsCount} reviews)
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4 leading-tight">
              {product.title}
            </h1>
            
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-black text-pink-500 tracking-tighter">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-slate-400 font-bold line-through ml-3">{formatPrice(product.originalPrice)}</span>
                  <span className="ml-4 text-xs font-black text-white bg-green-500 border-2 border-green-400 px-3 py-1.5 uppercase tracking-widest rounded-full shadow-md transform -rotate-3">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {product.stock < 10 && (
              <div className="mb-6 inline-flex items-center gap-2 bg-red-100 text-red-600 font-black text-sm uppercase tracking-widest px-4 py-2 rounded-full border-2 border-red-200 w-fit animate-pulse">
                ⏰ Hurry! Only {product.stock} left in stock!
              </div>
            )}

            <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium">
              {product.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-sky-50 p-4 rounded-2xl border-4 border-white shadow-sm">
                 <span className="block text-xs text-indigo-400 mb-1 tracking-widest uppercase font-black">Age</span>
                 <span className="font-black text-slate-700 text-lg">{product.ageRecommendation}</span>
              </div>
              <div className="bg-sky-50 p-4 rounded-2xl border-4 border-white shadow-sm">
                 <span className="block text-xs text-indigo-400 mb-1 tracking-widest uppercase font-black">Category</span>
                 <span className="font-black text-slate-700 text-lg">{product.category}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10 mt-auto">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 text-white font-black uppercase tracking-widest py-5 rounded-[2rem] flex items-center justify-center transition-all shadow-xl hover:-translate-y-1 hover:shadow-pink-500/40 border-4 border-white"
              >
                <ShoppingCart className="w-5 h-5 mr-3" /> Add to Cart
              </button>
              <button className="p-5 bg-sky-50 hover:bg-pink-50 text-slate-400 hover:text-pink-500 rounded-[2rem] border-4 border-white hover:border-pink-200 transition-all shadow-md">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-5 bg-sky-50 hover:bg-indigo-50 text-slate-400 hover:text-indigo-500 rounded-[2rem] border-4 border-white hover:border-indigo-200 transition-all shadow-md" onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: product.title, url: window.location.href });
                }
              }}>
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t-2 border-dashed border-sky-100 pt-8">
               <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-2xl border-4 border-white shadow-sm">
                 <div className="bg-orange-100 p-2 rounded-xl text-orange-500"><Truck className="w-6 h-6" /></div>
                 <div>
                   <h4 className="font-black text-slate-700 text-sm tracking-tight">Fast Delivery</h4>
                   <p className="text-xs text-slate-500 font-bold">Local Badlapur</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 bg-green-50 p-4 rounded-2xl border-4 border-white shadow-sm">
                 <div className="bg-green-100 p-2 rounded-xl text-green-500"><ShieldCheck className="w-6 h-6" /></div>
                 <div>
                   <h4 className="font-black text-slate-700 text-sm tracking-tight">Genuine Toys</h4>
                   <p className="text-xs text-slate-500 font-bold">100% Authentic</p>
                 </div>
               </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
