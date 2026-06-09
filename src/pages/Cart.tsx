import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../lib/utils';

export function Cart() {
  const { items, updateQuantity, removeItem, getCartTotal } = useCartStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="flex-1 bg-sky-50 py-20 flex flex-col items-center justify-center text-slate-800 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl relative z-10 border-4 border-dashed border-sky-200">
          <ShoppingCart className="w-16 h-16 text-indigo-300" />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight z-10">Oops! Your cart is empty 🎈</h2>
        <p className="text-slate-500 mb-8 font-bold text-lg z-10">Looks like you haven't added any fun toys yet.</p>
        <Link to="/shop" className="bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 text-white font-black py-4 px-10 rounded-full transition-all shadow-xl hover:-translate-y-1 hover:shadow-pink-500/30 uppercase tracking-widest text-sm z-10 border-2 border-white">
          Let's Go Shopping!
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-sky-50 py-10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 tracking-tight drop-shadow-sm flex items-center gap-3">
          My Cart 🛒
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 self-start">
            <div className="bg-white rounded-[2rem] border-4 border-sky-100 overflow-hidden shadow-xl shadow-sky-100 divide-y divide-sky-50">
              {items.map((item) => (
                <div key={item.product.id} className="p-6 flex flex-col sm:flex-row items-center gap-6 group hover:bg-sky-50 transition-colors">
                  <div className="w-24 h-24 bg-sky-100 rounded-xl overflow-hidden border border-sky-200 flex-shrink-0 shadow-inner">
                     <img src={item.product.images[0]} alt={item.product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between w-full">
                    <div className="mb-4 sm:mb-0">
                      <Link to={`/product/${item.product.id}`} className="font-black text-xl text-slate-800 hover:text-pink-500 block mb-1 transition-colors">
                        {item.product.title}
                      </Link>
                      <div className="text-xs text-sky-500 mb-2 font-bold uppercase tracking-wider">Age: {item.product.ageRecommendation}</div>
                      <div className="font-black text-2xl text-orange-500 drop-shadow-sm">{formatPrice(item.product.price)}</div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                       <div className="flex items-center border-2 border-sky-100 bg-white rounded-xl p-1 shadow-sm">
                         <button 
                           onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                           className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-colors font-black"
                         >
                           <Minus className="w-5 h-5" />
                         </button>
                         <span className="w-10 text-center font-black text-lg text-slate-800">{item.quantity}</span>
                         <button 
                           onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                           className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-colors font-black"
                         >
                           <Plus className="w-5 h-5" />
                         </button>
                       </div>
                       
                       <button 
                         onClick={() => removeItem(item.product.id)}
                         className="text-slate-300 hover:text-red-500 p-2 transition-colors hover:bg-red-50 rounded-full"
                         aria-label="Remove item"
                       >
                         <Trash2 className="w-6 h-6" />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setup Order Summary */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-[2rem] border-4 border-indigo-100 p-8 sticky top-24 shadow-2xl shadow-indigo-100/50">
               <h2 className="text-2xl font-black text-slate-800 mb-8 tracking-tight bg-indigo-50 inline-block px-4 py-2 rounded-xl text-indigo-600">Order Summary 📝</h2>
               
               <div className="space-y-4 mb-8 text-base font-bold text-slate-600">
                 <div className="flex justify-between">
                   <span>Subtotal ({items.length} items)</span>
                   <span className="text-slate-800">{formatPrice(getCartTotal())}</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span>Delivery</span>
                   <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Free!</span>
                 </div>
                 <div className="flex justify-between border-t-2 border-dashed border-sky-100 pt-6 mt-4 items-center">
                   <span className="font-black text-2xl text-slate-800">Total</span>
                   <span className="font-black text-3xl text-pink-500 drop-shadow-sm">{formatPrice(getCartTotal())}</span>
                 </div>
               </div>
               
               <button 
                 onClick={handleCheckout}
                 className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 text-white font-black py-4 rounded-full flex items-center justify-center transition-all px-8 shadow-xl hover:-translate-y-1 hover:shadow-pink-500/30 uppercase tracking-widest text-sm mb-6 border-2 border-white"
               >
                 Proceed to Checkout <ArrowRight className="w-5 h-5 ml-2" />
               </button>
               
               <div className="text-[10px] uppercase font-bold tracking-widest text-center text-slate-400 flex flex-col gap-2">
                 <span>🔒 Secure Checkout</span>
                 <span>✨ Easy Returns • 🧾 GST Invoices</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
