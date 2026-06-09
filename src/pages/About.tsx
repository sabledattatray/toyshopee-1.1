import { MapPin, Phone, Mail, Clock, Shield, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="flex-1 bg-[#07090D] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 z-0"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
          >
            About Toy Shopee
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto font-medium"
          >
            Badlapur's most trusted destination for premium toys, games, and return gifts. Bringing joy to thousands of children since 2010.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>
                  Founded in 2010, Toy Shopee started with a simple mission: to provide the children of Badlapur with access to the highest quality, safe, and educational toys without needing to travel to the city.
                </p>
                <p>
                  Over the years, we've grown from a small neighborhood shop into Badlapur's largest toy superstore, located centrally in Kartik Complex. We proudly curate a collection of over 10,000 products, ranging from classic board games to the latest remote-controlled vehicles and STEM kits.
                </p>
                <p>
                  Our commitment goes beyond just selling toys. We believe in the power of play to shape young minds. Every brand we stock is rigorously evaluated for safety, durability, and developmental value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-orange-500/20 to-pink-600/20 rounded-[3rem] absolute inset-0 transform rotate-3 scale-105 border border-white/10 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1470&auto=format&fit=crop" 
                alt="Toy Store Inside" 
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-full object-cover rounded-[2rem] border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values */}
      <section className="py-20 bg-[#11141A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight mb-12 text-center">Why Badlapur Chooses Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#07090D] p-8 rounded-3xl border border-white/5 text-center group hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">100% Genuine</h3>
              <p className="text-xs text-white/50">We only source directly from authorized distributors. No counterfeit products.</p>
            </div>
            <div className="bg-[#07090D] p-8 rounded-3xl border border-white/5 text-center group hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Premium Quality</h3>
              <p className="text-xs text-white/50">Curated selection of durable, non-toxic, and child-safe toys.</p>
            </div>
            <div className="bg-[#07090D] p-8 rounded-3xl border border-white/5 text-center group hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Local Support</h3>
              <p className="text-xs text-white/50">Family-owned business providing personalized recommendations.</p>
            </div>
            <div className="bg-[#07090D] p-8 rounded-3xl border border-white/5 text-center group hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Express Delivery</h3>
              <p className="text-xs text-white/50">Same-day delivery available across all Badlapur local pin codes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black tracking-tight mb-8">Visit Our Flagship Store</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-left space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-[10px]">Address</h4>
                  <p className="text-white/60 text-sm mt-1">Shop No. 11/12, Kartik Complex,<br/>Near Municipal Corporation,<br/>Badlapur East, Maharashtra 421503</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-[10px]">Store Hours</h4>
                  <p className="text-white/60 text-sm mt-1">Monday - Sunday<br/>10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-[10px]">Contact</h4>
                  <p className="text-white/60 text-sm mt-1">+91 97300 44342<br/>toyshopeebadlapur@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full md:w-[500px] h-64 bg-[#11141A] rounded-3xl border border-white/5 flex flex-col items-center justify-center p-8 text-center opacity-80 hover:opacity-100 transition-opacity">
               <MapPin className="w-12 h-12 text-white/20 mb-4" />
               <p className="text-white/50 text-sm font-medium">Located strategically in the heart of Badlapur East for easy accessibility.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
