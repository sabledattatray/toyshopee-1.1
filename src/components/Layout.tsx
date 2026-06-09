import { Outlet, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, User as UserIcon, Search, Phone } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getCartCount());
  const { user, loginWithGoogle, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 flex flex-col font-sans selection:bg-pink-300 selection:text-white">
      {/* Top Utility Bar */}
      <div className="bg-indigo-600 text-white text-xs py-2 px-4 flex justify-between items-center sm:px-6 lg:px-8 font-medium">
        <div className="flex items-center space-x-4">
          <a href="tel:+919730044342" className="flex items-center hover:text-indigo-200 transition-colors"><Phone className="w-3 h-3 mr-1" />+91 97300 44342</a>
          <span className="hidden sm:inline">🌟 Free Delivery in Badlapur! 🌟</span>
        </div>
        <div className="hidden sm:flex space-x-4 font-bold">
          <Link to="/track-order" className="hover:text-yellow-300 transition-colors">Track Order</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-sky-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-indigo-500 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-1 group">
                 <div className="flex gap-0.5 sm:gap-1">
                  <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-500 text-white font-black text-xl sm:text-2xl transform -rotate-6 shadow-[0_4px_0_theme(colors.orange.700)] border-2 border-white group-hover:-translate-y-2 group-hover:rotate-0 transition-all duration-300">T</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-500 text-white font-black text-xl sm:text-2xl transform rotate-3 shadow-[0_4px_0_theme(colors.blue.700)] border-2 border-white group-hover:-translate-y-2 group-hover:rotate-0 transition-all duration-300 delay-75">O</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-yellow-400 text-slate-800 font-black text-xl sm:text-2xl transform -rotate-3 shadow-[0_4px_0_theme(colors.yellow.600)] border-2 border-white group-hover:-translate-y-2 group-hover:rotate-0 transition-all duration-300 delay-150">Y</span>
                 </div>
                 <div className="ml-1 sm:ml-2 flex items-center">
                   <span className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 tracking-tighter drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                     Shopee
                   </span>
                   <span className="ml-1 text-xl sm:text-3xl inline-block -rotate-12 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 origin-bottom">🧸</span>
                 </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:space-x-8">
              <Link to="/shop" className="text-slate-600 hover:text-orange-500 px-3 py-2 text-sm font-bold transition-colors">Shop</Link>
              <Link to="/categories" className="text-slate-600 hover:text-pink-500 px-3 py-2 text-sm font-bold transition-colors">Categories</Link>
              <Link to="/offers" className="text-orange-500 hover:text-orange-600 px-3 py-2 text-sm font-black tracking-wide flex items-center transition-colors animate-pulse">Offers!</Link>
              <Link to="/gallery" className="text-slate-600 hover:text-green-500 px-3 py-2 text-sm font-bold transition-colors">Gallery</Link>
              <Link to="/about" className="text-slate-600 hover:text-indigo-500 px-3 py-2 text-sm font-bold transition-colors">About</Link>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="hidden md:flex relative text-slate-400 focus-within:text-slate-800 transition-colors group">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-indigo-500" />
                <input
                  type="text"
                  placeholder="Find a toy..."
                  className="pl-10 pr-4 py-2 bg-slate-100 border-2 border-transparent rounded-full text-sm focus:border-indigo-400 focus:bg-white focus:outline-none w-64 text-slate-800 placeholder-slate-400 transition-all shadow-inner"
                />
              </div>

              <div className="flex items-center space-x-4">
                {user ? (
                  <div className="relative group flex items-center space-x-2">
                    <img src={user.photoURL || ''} alt="User" referrerPolicy="no-referrer" className="w-8 h-8 rounded-full border-2 border-indigo-200 cursor-pointer hover:border-indigo-500 transition-colors" />
                    <div className="absolute right-0 top-10 w-48 bg-white border border-sky-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 z-50 transform origin-top-right group-hover:scale-100 scale-95">
                       <p className="text-sm font-bold text-slate-800 px-3 py-2 border-b border-slate-100 mb-1">{user.displayName}</p>
                       <Link to="/account" className="text-sm font-bold text-slate-600 hover:text-indigo-500 hover:bg-indigo-50 px-3 py-2 rounded-xl transition-colors">Dashboard</Link>
                       <button onClick={logout} className="text-sm font-bold text-left text-slate-600 hover:text-pink-500 hover:bg-pink-50 px-3 py-2 rounded-xl transition-colors">Logout</button>
                    </div>
                  </div>
                ) : (
                  <Link to="/login" className="text-slate-500 hover:text-indigo-500 transition-colors flex flex-col items-center hover:scale-110 transform duration-200">
                    <UserIcon className="h-6 w-6" />
                  </Link>
                )}

                <Link to="/wishlist" className="w-10 h-10 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all hidden sm:flex relative transform hover:scale-110 shadow-sm">
                  <Heart className="h-5 w-5" />
                </Link>
                
                <Link to="/cart" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all relative transform hover:scale-110 shadow-sm">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                     <span className="absolute -top-2 -right-2 bg-gradient-to-tr from-orange-400 to-pink-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-black shadow-lg shadow-pink-500/40 border-2 border-white animate-bounce">
                       {cartCount}
                     </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-sky-100 absolute w-full left-0 mt-0 shadow-lg">
            <div className="pt-2 pb-3 space-y-1 px-4">
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-sm font-bold text-slate-600 hover:text-indigo-500 border-b border-slate-100">Shop</Link>
              <Link to="/categories" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-sm font-bold text-slate-600 hover:text-indigo-500 border-b border-slate-100">Categories</Link>
              <Link to="/offers" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-sm font-black text-orange-500 hover:text-orange-600 border-b border-slate-100">Offers!</Link>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-sm font-bold text-slate-600 hover:text-green-500 border-b border-slate-100">Gallery</Link>
              <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-sm font-bold text-slate-600 hover:text-indigo-500 border-b border-slate-100">My Wishlist</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
        <Outlet />
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919730044342?text=Hi%20Toy%20Shopee,%20I%20have%20an%20enquiry!" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl shadow-green-500/30 z-50 flex items-center justify-center transition-all hover:-translate-y-2 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-sky-100 border-t border-sky-200 px-8 flex flex-col pt-16 pb-8 text-xs font-medium text-slate-600 relative overflow-hidden">
        {/* Decor shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-20 right-40 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-1 mb-6 group cursor-default">
                 <div className="flex gap-1">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500 text-white font-black text-2xl transform -rotate-6 shadow-[0_4px_0_theme(colors.orange.700)] border-2 border-white group-hover:-translate-y-2 group-hover:rotate-0 transition-all duration-300">T</span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500 text-white font-black text-2xl transform rotate-3 shadow-[0_4px_0_theme(colors.indigo.700)] border-2 border-white group-hover:-translate-y-2 group-hover:rotate-0 transition-all duration-300 delay-75">O</span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500 text-white font-black text-2xl transform -rotate-3 shadow-[0_4px_0_theme(colors.pink.700)] border-2 border-white group-hover:-translate-y-2 group-hover:rotate-0 transition-all duration-300 delay-150">Y</span>
                 </div>
                 <div className="ml-2 flex items-center">
                   <span className="text-3xl font-black text-slate-800 tracking-tighter drop-shadow-sm">
                     Shopee
                   </span>
                   <span className="ml-1 text-3xl inline-block rotate-12 group-hover:-rotate-12 group-hover:scale-125 transition-all duration-300 origin-bottom">🚁</span>
                 </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed mb-4">
                Badlapur's Favorite Toy Store. Thousands of fun Toys, Games & Gifts for Every Age!
              </p>
              <p className="text-slate-500 font-medium leading-relaxed bg-white/50 p-4 rounded-2xl border border-white">
                📍 Shop No. 11/12, Kartik Complex, <br />
                Near Municipal Corporation, <br />
                Badlapur East, Maharashtra 421503
              </p>
            </div>
            <div>
              <h4 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-6">Explore Fun</h4>
              <ul className="space-y-4 font-bold text-slate-600">
                <li><Link to="/shop" className="hover:text-pink-500 transition-colors flex items-center"><span className="mr-2">🧸</span> Shop All Toys</Link></li>
                <li><Link to="/about" className="hover:text-indigo-500 transition-colors flex items-center"><span className="mr-2">👋</span> About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-500 transition-colors flex items-center"><span className="mr-2">📞</span> Contact</Link></li>
                <li><Link to="/offers" className="text-orange-500 hover:text-orange-600 transition-colors flex items-center"><span className="mr-2">🎉</span> Festival Offers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-6">Service Rules</h4>
              <ul className="space-y-4 font-bold text-slate-600">
                <li><Link to="/shipping" className="hover:text-indigo-500 transition-colors">Shipping Policy</Link></li>
                <li><Link to="/returns" className="hover:text-indigo-500 transition-colors">Returns & Refunds</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-500 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-6">Join the VIP Club!</h4>
              <p className="text-slate-600 font-bold mb-4">Get local stock alerts and secret toy drops.</p>
              <div className="flex shadow-lg rounded-2xl overflow-hidden border-2 border-white focus-within:border-indigo-400 transition-all">
                <input type="email" placeholder="Email Address..." className="px-4 py-3 w-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none font-medium" />
                <button className="bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 font-black text-white hover:opacity-90 transition">GO!</button>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-sky-200/50 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 lg:gap-6">
              <span className="flex items-center gap-2 font-bold bg-white px-4 py-2 rounded-full shadow-sm border-2 border-green-100 text-slate-600 text-sm whitespace-nowrap"><div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div> Zone: <b className="text-green-600">12.5 KM</b></span>
              <span className="flex items-center gap-2 font-bold bg-white px-4 py-2 rounded-full shadow-sm border-2 border-indigo-100 text-slate-600 text-sm whitespace-nowrap"><div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div> AI: <b className="text-indigo-600">Active</b></span>
              <span className="flex items-center gap-2 font-bold bg-white px-4 py-2 rounded-full shadow-sm border-2 border-pink-100 text-slate-600 text-sm whitespace-nowrap"><div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div> GST: <b className="text-pink-600">Secure</b></span>
              <span className="flex items-center gap-2 font-bold bg-white px-4 py-2 rounded-full shadow-sm border-2 border-orange-100 text-slate-600 text-sm whitespace-nowrap">Made by <a href="https://dattasble.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-orange-600 flex items-center gap-1">Datta Sable <span className="text-base leading-none">🫶</span></a></span>
            </div>
            <div className="font-black text-slate-400 whitespace-nowrap pb-4 lg:pb-0">
              © 2024 Toy Shopee 🎈
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
