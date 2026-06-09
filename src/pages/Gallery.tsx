import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Maximize2, X, Star, Cloud, Smile } from 'lucide-react';

const IMAGES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  url: `https://loremflickr.com/800/800/toys,kids?lock=${i + 200}`,
  title: `Fun Toy ${i + 1}`,
  color: ['bg-pink-400', 'bg-yellow-400', 'bg-indigo-400', 'bg-green-400', 'bg-orange-400', 'bg-teal-400'][i % 6],
  rotation: (i % 2 === 0 ? 1 : -1) * ((i % 5) * 1.5 + 2)
}));

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-sky-50 relative overflow-hidden min-h-screen">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-yellow-300 opacity-50 animate-bounce" style={{ animationDuration: '3s' }}><Star size={60} /></div>
      <div className="absolute top-40 right-10 text-white opacity-80 animate-pulse"><Cloud size={100} /></div>
      <div className="absolute bottom-60 left-5 text-pink-300 opacity-50 animate-bounce" style={{ animationDelay: '1s' }}><Smile size={50} /></div>
      <div className="absolute top-1/2 right-20 text-indigo-200 opacity-50 animate-spin-slow"><Star size={40} /></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block bg-gradient-to-br from-pink-400 to-orange-400 text-white p-5 rounded-full shadow-xl mb-6 border-4 border-white"
          >
            <Camera size={48} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight"
          >
            Toy <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Gallery</span>
          </motion.h1>
          <p className="text-xl text-slate-500 font-bold mt-4">Look at all these super fun toys! 🧸✨</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: (index % 12) * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
              className={`p-3 rounded-[2rem] shadow-xl cursor-pointer ${img.color} transform hover:rotate-0 transition-transform duration-300 group border-4 border-white`}
              onClick={() => setSelectedImage(img.url)}
              style={{ transform: `rotate(${img.rotation}deg)` }}
            >
              <div className="bg-white rounded-[1.2rem] overflow-hidden aspect-square relative shadow-inner">
                <img src={img.url} alt={img.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 drop-shadow-md" size={40} />
                </div>
              </div>
              <div className="pt-4 pb-2 text-center font-black text-white text-xl tracking-wide flex items-center justify-center gap-2">
                <Star size={16} className="fill-current" />
                {img.title}
                <Star size={16} className="fill-current" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.5, y: 100, rotate: 5 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative max-w-4xl w-full bg-white p-3 md:p-5 rounded-[3rem] shadow-2xl border-8 border-pink-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors shadow-xl hover:rotate-90 duration-300 border-4 border-white z-10"
              >
                <X size={28} strokeWidth={3} />
              </button>
              <div className="rounded-[2rem] overflow-hidden bg-sky-50 shadow-inner">
                <img src={selectedImage} alt="Fullscreen" referrerPolicy="no-referrer" className="w-full h-auto max-h-[75vh] object-contain" />
              </div>
              <div className="text-center pt-4 font-black text-2xl text-slate-800">
                Wow! What a beautiful toy! 🌟
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
