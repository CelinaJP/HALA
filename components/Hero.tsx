import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1527845688655-2e38c95c2c7c?q=80&w=2070&auto=format&fit=crop" 
          alt="Halabalusa Crowd" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Placeholder for Logo - In a real app, this would be an <img> tag */}
        <div className="mb-6 w-48 h-48 md:w-64 md:h-64 border-4 border-white rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="urban-font text-6xl md:text-8xl font-bold text-white">H</span>
        </div>
        
        <h1 className="urban-font text-6xl md:text-9xl font-bold text-white tracking-tighter shadow-black drop-shadow-lg mb-2">
          HALABALUSA
        </h1>
        <h2 className="urban-font text-2xl md:text-4xl text-red-500 font-medium tracking-widest uppercase mb-8">
          Movimiento Underground
        </h2>
        
        <p className="max-w-xl mx-auto text-gray-300 mb-12 text-lg italic hidden md:block">
          "El semillero del freestyle argentino."
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