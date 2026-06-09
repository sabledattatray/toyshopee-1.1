import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../lib/utils';
import { CheckCircle2, CreditCard, Wallet, QrCode, User, MapPin, Truck, PartyPopper } from 'lucide-react';

export function Checkout() {
  const { items, getCartTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const handlePlaceOrder = () => {
    // Collect order details for WhatsApp notification
    const orderDetails = items.map(i => `${i.quantity}x ${i.product.title}`).join(', ');
    const total = formatPrice(getCartTotal());
    const message = `*New Order Alert!* 🚀%0A%0A*Items:* ${orderDetails}%0A*Total:* ${total}%0A*Payment Method:* ${paymentMethod.toUpperCase()}%0A%0APlease prepare this order!`;
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/919730044342?text=${message}`, '_blank');

    // In a real app with Razorpay this is where we would trigger the payment SDK.
    // For this prototype, we're skipping directly to order success after a brief timeout.
    setTimeout(() => {
      clearCart();
      setStep(3); // Success step
    }, 1500);
  };

  if (items.length === 0 && step !== 3) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="flex-1 bg-sky-50 py-10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {step !== 3 && (
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <h1 className="text-4xl font-black text-slate-800 tracking-tight flex items-center gap-2">
              Checkout 🎁
            </h1>
            <div className="flex items-center gap-3">
              <span className={`px-5 py-2.5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all ${step === 1 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 font-bold scale-105' : 'bg-white text-slate-400 border-2 border-sky-100'}`}>
                <MapPin size={18} /> Delivery
              </span>
              <span className="w-8 border-t-4 border-dashed border-sky-200"></span>
              <span className={`px-5 py-2.5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all ${step === 2 ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-105' : 'bg-white text-slate-400 border-2 border-sky-100'}`}>
                <CreditCard size={18} /> Payment
              </span>
            </div>
          </div>
        )}

        <div className="bg-white rounded-[3rem] border-4 border-sky-100 p-6 md:p-12 shadow-2xl relative">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-xl"><Truck size={24} /></span>
                Where should we send your toys?
              </h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-slate-500 mb-2">Full Name</label>
                    <input type="text" required placeholder="Chhota Bheem" className="w-full px-5 py-4 bg-sky-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-indigo-400 focus:outline-none text-slate-800 font-bold transition-all placeholder:text-slate-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-slate-500 mb-2">Mobile Number</label>
                    <input type="tel" required placeholder="+91 98765 43210" className="w-full px-5 py-4 bg-sky-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-indigo-400 focus:outline-none text-slate-800 font-bold transition-all placeholder:text-slate-300" />
                  </div>
                </div>
                <div>
                    <label className="block text-sm font-black text-slate-500 mb-2">Detailed Address</label>
                    <input type="text" required placeholder="House No, Society, Street Name..." className="w-full px-5 py-4 bg-sky-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-indigo-400 focus:outline-none text-slate-800 font-bold transition-all placeholder:text-slate-300" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-slate-500 mb-2">Pincode</label>
                    <input type="text" required placeholder="421503" className="w-full px-5 py-4 bg-sky-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-indigo-400 focus:outline-none text-slate-800 font-bold transition-all placeholder:text-slate-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-slate-500 mb-2">City</label>
                    <input type="text" defaultValue="Badlapur" readOnly className="w-full px-5 py-4 bg-indigo-50 border-2 border-indigo-100 rounded-2xl text-indigo-800 font-black cursor-not-allowed" />
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t-2 border-dashed border-sky-100 flex justify-end">
                   <button type="submit" className="bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 text-white font-black uppercase tracking-widest text-sm py-5 px-12 rounded-full transition-all shadow-xl hover:-translate-y-1 hover:shadow-pink-500/40 border-4 border-white flex items-center gap-2">
                     Next Step <ArrowRight size={18} />
                   </button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-right-8 duration-500">
              <div>
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                  <span className="bg-pink-100 text-pink-600 p-2 rounded-xl"><CreditCard size={24} /></span>
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  <label className={`flex items-center p-6 border-4 rounded-[2rem] cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-orange-400 bg-orange-50 scale-[1.02] shadow-lg' : 'border-sky-100 hover:border-orange-200'}`}>
                    <div className="flex-1 flex flex-col pl-2">
                      <span className="font-black text-slate-800 text-lg">UPI / QR Code</span>
                      <span className="text-sm font-bold text-slate-500">Google Pay, PhonePe, Paytm</span>
                    </div>
                    <QrCode className={`w-8 h-8 ml-4 ${paymentMethod === 'upi' ? 'text-orange-500' : 'text-slate-300'}`} />
                    <input type="radio" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="hidden" />
                  </label>
                  
                  {paymentMethod === 'upi' && (
                    <div className="animate-in fade-in slide-in-from-top-4 bg-orange-50 p-6 rounded-[2rem] border-2 border-dashed border-orange-200 flex flex-col items-center text-center mx-4">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=shop@upi&pn=ToyShopee&cu=INR" alt="QR Code" referrerPolicy="no-referrer" className="w-32 h-32 rounded-xl mb-4 border-4 border-white shadow-sm" />
                      <p className="font-bold text-orange-600 text-sm">Scan QR with any UPI app to pay</p>
                    </div>
                  )}
                  
                  <label className={`flex items-center p-6 border-4 rounded-[2rem] cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-indigo-400 bg-indigo-50 scale-[1.02] shadow-lg' : 'border-sky-100 hover:border-indigo-200'}`}>
                    <div className="flex-1 flex flex-col pl-2">
                      <span className="font-black text-slate-800 text-lg">Credit/Debit Card</span>
                      <span className="text-sm font-bold text-slate-500">Visa, Mastercard, Rupay</span>
                    </div>
                    <CreditCard className={`w-8 h-8 ml-4 ${paymentMethod === 'card' ? 'text-indigo-500' : 'text-slate-300'}`} />
                    <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="hidden" />
                  </label>

                  <label className={`flex items-center p-6 border-4 rounded-[2rem] cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-green-400 bg-green-50 scale-[1.02] shadow-lg' : 'border-sky-100 hover:border-green-200'}`}>
                    <div className="flex-1 flex flex-col pl-2">
                      <span className="font-black text-slate-800 text-lg">Cash on Delivery</span>
                      <span className="text-sm font-bold text-slate-500">Pay when it arrives!</span>
                    </div>
                    <Wallet className={`w-8 h-8 ml-4 ${paymentMethod === 'cod' ? 'text-green-500' : 'text-slate-300'}`} />
                    <input type="radio" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="hidden" />
                  </label>
                </div>
              </div>
              
              <div className="bg-sky-50 p-8 rounded-[2rem] border-4 border-sky-100 h-fit">
                <h3 className="font-black text-slate-800 tracking-tight mb-6 text-xl">Order Summary 📝</h3>
                <div className="space-y-4 mb-6 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                   {items.map(item => (
                     <div key={item.product.id} className="flex justify-between text-base items-center">
                       <span className="text-slate-600 font-bold line-clamp-1 pr-4">{item.quantity} × {item.product.title}</span>
                       <span className="font-black text-slate-800 whitespace-nowrap">{formatPrice(item.product.price * item.quantity)}</span>
                     </div>
                   ))}
                </div>
                <div className="pt-6 border-t-2 border-dashed border-sky-200 flex justify-between font-black text-2xl text-slate-800 mt-6">
                  <span>Total</span>
                  <span className="text-pink-500">{formatPrice(getCartTotal())}</span>
                </div>
                <button 
                  onClick={handlePlaceOrder}
                  className="w-full mt-8 bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 text-white font-black uppercase tracking-widest py-5 px-8 rounded-full transition-all shadow-xl hover:-translate-y-1 hover:shadow-pink-500/40 text-lg border-4 border-white flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">Place Order! <PartyPopper size={20} /></span>
                </button>
                <div className="text-center mt-4 text-xs font-bold text-slate-400 uppercase tracking-wider">(Demo Payment)</div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
              <div className="mx-auto w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mb-8 border-8 border-green-50 shadow-xl relative">
                <CheckCircle2 className="w-16 h-16 text-green-500" strokeWidth={3} />
                <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-300 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">YAY! Order Successful! 🎉</h2>
              <p className="text-slate-500 mb-10 max-w-md mx-auto font-bold text-lg">Get ready for fun! Your toys are being packed. You will receive an SMS and WhatsApp confirmation shortly.</p>
              
              <div className="bg-sky-50 p-8 rounded-[2rem] border-4 border-sky-100 inline-block text-left mb-8 shadow-sm">
                <div className="text-sm uppercase font-black text-slate-400 mb-1">Order ID</div>
                <div className="font-mono font-black text-indigo-500 text-2xl mb-6">#TS-{Math.floor(Math.random() * 1000000)}</div>
                <div className="text-sm uppercase font-black text-slate-400 mb-1">Expected Delivery</div>
                <div className="font-black text-slate-800 text-xl flex items-center gap-2 mb-6">
                  <Truck className="text-orange-500" /> Today, By 8:00 PM
                </div>
                <div className="text-sm uppercase font-black text-slate-400 mb-1">GST Invoice</div>
                <div className="font-black text-green-600 text-lg flex items-center gap-2">
                  <CheckCircle2 size={18} /> Generated & Sent to Email
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                <button onClick={() => {
                  alert("GST Invoice downloaded successfully!");
                }} className="bg-indigo-500 hover:bg-indigo-600 text-white font-black uppercase tracking-widest text-sm py-4 px-10 rounded-full transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
                  Download Invoice
                </button>
                <Link to="/shop" className="bg-white text-indigo-500 border-4 border-indigo-100 hover:border-indigo-500 font-black uppercase tracking-widest text-sm py-4 px-10 rounded-full transition-all hover:bg-indigo-50 hover:-translate-y-1">
                  Continue Shopping
                </Link>
              </div>

              <div className="bg-gradient-to-r from-yellow-300 to-orange-400 p-6 rounded-[2rem] inline-block max-w-sm border-4 border-white shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                <h4 className="text-white font-black text-xl mb-2 flex items-center justify-center gap-2">
                  <Star size={24} className="fill-current text-white" />
                  Loving Toy Shopee?
                </h4>
                <p className="text-white/90 font-bold text-sm mb-4">Help us spread the joy by leaving a quick Google review!</p>
                <a href="https://g.page/r/your-google-review-link" target="_blank" rel="noreferrer" className="inline-block bg-white text-orange-500 font-black uppercase tracking-widest text-xs py-3 px-6 rounded-full shadow-lg hover:-translate-y-1 transition-transform">
                  Leave a Review 🌟
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
