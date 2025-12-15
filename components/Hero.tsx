import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    // Ajusto la altura restando el navbar (ej: 80px)
    <div className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/bosque.png" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Logo */}
        <img 
          src="/images/halasinfondo.png" 
          className="w-32 md:w-48 mb-4"
        />        
        <h1 className="urban-font text-6xl md:text-9xl font-bold text-white tracking-tighter shadow-black drop-shadow-lg mb-2">
          HALABALUSA
        </h1>
        <h2 className="urban-font text-2xl md:text-4xl text-red-500 font-medium tracking-widest uppercase mb-8">
          Movimiento Underground
        </h2>
        
        <p className="max-w-xl mx-auto text-gray-300 mb-12 text-lg italic hidden md:block">
          "Freestyle argentino."
        </p>

        <a 
          href="#historia" 
          className="animate-bounce p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
