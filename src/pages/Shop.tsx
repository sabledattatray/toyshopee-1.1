import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Filter, Search } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { MOCK_PRODUCTS, CATEGORIES } from '../lib/data';
import { useCartStore } from '../store/cartStore';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const addToCart = useCartStore(state => state.addItem);

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchCat = category === 'All' || p.category === category;
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <div className="flex-1 bg-sky-50 py-8 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-[2rem] border-4 border-sky-100 sticky top-24 shadow-xl">
            <h2 className="font-black text-xl text-slate-800 mb-6 flex items-center gap-2">
              <span className="bg-orange-100 text-orange-500 p-2 rounded-xl"><Filter size={20} /></span>
              Filters
            </h2>
            
            <div className="mb-6">
              <div className="relative text-slate-400 focus-within:text-indigo-500 mb-4 transition-colors">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search toys..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-sky-50 border-2 border-transparent rounded-2xl font-bold text-slate-700 focus:outline-none focus:bg-white focus:border-indigo-400 placeholder:text-slate-300 transition-all font-sans"
                />
              </div>
            </div>

            <div>
              <h3 className="font-black text-slate-800 mb-4 text-sm uppercase tracking-widest text-indigo-400">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setCategory('All')}
                    className={`block w-full text-left font-bold transition-all px-4 py-2 rounded-xl border-2 ${category === 'All' ? 'border-orange-400 bg-orange-50 text-orange-600' : 'border-transparent text-slate-500 hover:bg-sky-50 hover:text-slate-700'}`}
                  >
                    All Toys
                  </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setCategory(cat)}
                      className={`block w-full text-left font-bold transition-all px-4 py-2 rounded-xl border-2 ${category === cat ? 'border-orange-400 bg-orange-50 text-orange-600' : 'border-transparent text-slate-500 hover:bg-sky-50 hover:text-slate-700'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-3xl font-black text-slate-800 flex items-center gap-2">
              {category === 'All' ? 'Awesome Toys 🚀' : category} <span className="text-slate-400 text-lg font-bold">({filteredProducts.length})</span>
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400 tracking-widest uppercase font-black">Sort:</span>
              <select className="bg-white border-2 border-sky-100 text-slate-700 font-bold text-sm rounded-xl py-2 px-4 focus:outline-none focus:border-indigo-400 cursor-pointer shadow-sm">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border-4 border-sky-100 border-dashed shadow-sm">
              <div className="w-24 h-24 bg-sky-50 rounded-full flex items-center justify-center mb-4">
                <Search className="w-12 h-12 text-slate-300" />
              </div>
              <h2 className="text-2xl font-black text-slate-700 mb-2">No toys found!</h2>
              <p className="text-slate-500 mb-6 font-bold">Try adjusting your filters.</p>
              <button 
                onClick={() => { setCategory('All'); setSearch(''); }}
                className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 font-black px-6 py-3 rounded-full transition-colors font-sans"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={product.id}
                  className="bg-white rounded-[2rem] border-4 border-sky-100 overflow-hidden group flex flex-col hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl relative"
                >
                  {product.stock < 10 && (
                     <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg transform -rotate-2 border-2 border-white animate-pulse">
                       Only {product.stock} Left!
                     </div>
                  )}
                  <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-sky-50 p-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.title} 
                      className="object-cover w-full h-full rounded-2xl group-hover:scale-110 transition-transform duration-500" 
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs text-indigo-500 font-black uppercase tracking-wider mb-2">{product.brand}</div>
                    <Link to={`/product/${product.id}`} className="font-black text-slate-800 text-lg hover:text-indigo-600 transition-colors line-clamp-2 mb-4 min-h-[3rem] leading-tight">
                      {product.title}
                    </Link>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-2xl font-black text-pink-500">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-sm font-bold text-slate-400 line-through">{formatPrice(product.originalPrice)}</span>
                        )}
                      </div>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-orange-100 border-2 border-transparent hover:bg-orange-500 hover:border-orange-400 text-orange-600 hover:text-white rounded-2xl p-3 transition-all shadow-sm"
                        aria-label="Add to cart"
                      >
                        <ShoppingCart className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
