import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Trash2 } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../lib/utils';
import { motion } from 'motion/react';

export function Wishlist() {
  const { items, removeItem } = useWishlistStore();
  const addToCart = useCartStore(state => state.addItem);

    if (items.length === 0) {
    return (
      <div className="flex-1 bg-[#07090D] py-20 flex flex-col items-center justify-center text-center px-4 text-white">
        <div className="w-24 h-24 bg-[#11141A] border border-white/5 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <Heart className="w-10 h-10 text-white/20" />
        </div>
        <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Your wishlist is empty</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto font-medium">Save your favorite toys and gifts here to review and purchase them later.</p>
        <Link to="/shop" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white font-black py-4 px-10 rounded-xl transition-all uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(249,115,22,0.3)]">
          Explore Toys
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#07090D] py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          <h1 className="text-3xl font-black text-white tracking-tight">My Wishlist</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((product) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={product.id}
              className="bg-[#11141A] rounded-2xl border border-white/5 hover:border-white/20 transition-all shadow-lg overflow-hidden flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-white/5 group">
                <img 
                  src={product.images[0]} 
                  alt={product.title} 
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="font-mono tracking-widest uppercase text-[10px] text-white/40 mb-1">{product.brand}</div>
                <Link to={`/product/${product.id}`} className="font-bold text-white hover:text-orange-400 transition-colors line-clamp-2 mb-2">
                  {product.title}
                </Link>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-white">{formatPrice(product.price)}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                   <button 
                     onClick={() => addToCart(product)}
                     className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 shadow-[0_0_10px_rgba(249,115,22,0.2)] text-white py-3 rounded-lg font-black uppercase tracking-widest text-[10px] flex items-center justify-center transition-all"
                   >
                     <ShoppingCart className="w-3.5 h-3.5 mr-1.5" /> Add 
                   </button>
                   <button 
                     onClick={() => removeItem(product.id)}
                     className="bg-white/5 hover:bg-white/10 text-white/60 hover:text-white py-3 rounded-lg font-black uppercase tracking-widest text-[10px] flex items-center justify-center transition-all"
                   >
                     <Trash2 className="w-3.5 h-3.5 mr-1.5" /> Remove
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
