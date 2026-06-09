import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <div className="flex-1 bg-[#07090D] text-white">
      {/* Header */}
      <section className="relative py-16 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-600/10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl mx-auto font-medium"
          >
            Have a question about a toy, bulk order, or looking for something specific? We're here to help you find the perfect gift.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-black tracking-tight mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-400 shrink-0 mr-6">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">Phone Number</h3>
                    <p className="text-white/70 font-medium">+91 97300 44342</p>
                    <p className="text-white/40 text-xs mt-1">Available Everyday, 10am - 10pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400 shrink-0 mr-6">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">WhatsApp Fast Support</h3>
                    <a 
                      href="https://wa.me/919730044342" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-green-400 hover:text-green-300 font-bold transition-colors inline-flex items-center"
                    >
                      Chat with us now &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0 mr-6">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">Store Address</h3>
                    <p className="text-white/70 font-medium text-sm leading-relaxed">
                      Shop No. 11/12, Kartik Complex,<br />
                      Near Municipal Corporation,<br />
                      Badlapur East, Maharashtra 421503
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 mr-6">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">Email Address</h3>
                    <p className="text-white/70 font-medium">toyshopeebadlapur@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#11141A] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
               <h2 className="text-2xl font-black tracking-tight mb-8 relative z-10">Send us a Message</h2>
               
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">First Name</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 text-sm placeholder:text-white/20 transition-colors" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Last Name</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 text-sm placeholder:text-white/20 transition-colors" placeholder="Doe" />
                    </div>
                 </div>
                 
                 <div>
                    <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 text-sm placeholder:text-white/20 transition-colors" placeholder="john@example.com" />
                 </div>
                 
                 <div>
                    <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 text-sm placeholder:text-white/20 transition-colors" placeholder="+91" />
                 </div>

                 <div>
                    <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Your Message</label>
                    <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 text-sm placeholder:text-white/20 transition-colors resize-none" placeholder="How can we help you today?"></textarea>
                 </div>

                 <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 shadow-[0_0_20px_rgba(249,115,22,0.3)] text-white font-black uppercase tracking-widest py-4 rounded-xl text-xs flex items-center justify-center transition-all hover:-translate-y-0.5">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                 </button>
               </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
