import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Merch: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Remera Logo Clásica",
      price: "$15.000",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Hoodie Underground",
      price: "$35.000",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Gorra Halabalusa",
      price: "$12.000",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
            <div>
                <h2 className="urban-font text-4xl md:text-6xl font-bold text-white mb-2">MERCH</h2>
                <div className="h-2 w-16 bg-red-600"></div>
            </div>
            <ShoppingBag size={40} className="text-gray-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-black border border-gray-800 rounded-lg overflow-hidden group hover:border-white/30 transition-all">
              <div className="h-64 overflow-hidden relative">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-red-500 font-mono text-lg">{product.price}</p>
                <button className="w-full mt-4 bg-white text-black font-bold py-2 hover:bg-red-600 hover:text-white transition-colors uppercase tracking-wider text-sm">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;