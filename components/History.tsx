import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { url } from 'inspector';

const History: React.FC = () => {
  const images = [
    "public/imagen/plaza.png",
    "public/images/plazacongente.png",
    "public/images/publico.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="urban-font text-4xl md:text-6xl font-bold text-white mb-2">LA HISTORIA</h2>
          <div className="h-2 w-24 bg-red-600"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Text Content */}
          <div className="prose prose-invert prose-lg text-gray-300">
            <h3 className="urban-font text-3xl text-red-500 mb-6 font-bold">Entre árboles y sueños.</h3>
            
            <p className="mb-6">
              Desde el conurbano bonaerense, donde los trenes cruzan historias y las plazas respiran juventud, nació un movimiento que cambiaría para siempre el freestyle argentino: el Movimiento Underground, el Halabalusa.
            </p>
            
            <p className="mb-6">
              Todo comenzó hace más de una década, cerca de la estación de Claypole, en una plaza arbolada sobre la calle Remedios de Escalada de San Martín. Allí, sin escenario ni reflectores, pero con pasión y talento desbordante, se reunían jóvenes con rimas afiladas y sueños gigantes. El beat lo ponía la calle, y la voz, cada freestyler que se animaba a improvisar frente a la multitud.
            </p>
            
            <p>
              En 2021, el Municipio de Almirante Brown decidió que esa historia merecía ser inmortalizada. Y así, por ordenanza del Honorable Concejo Deliberante, la plaza donde todo comenzó pasó a llamarse oficialmente <strong>Plaza Halabalusa Underground</strong>. Un homenaje a la cultura juvenil, al arte callejero y a la identidad que se construye desde abajo, con voz propia.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-black group">
            <div 
              style={{ backgroundImage: `url(${images[currentIndex]})` }} 
              className="w-full h-full bg-center bg-cover duration-500 ease-in-out transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-light">
              <p>Plaza Halabalusa Underground - Claypole</p>
            </div>

            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-red-600 transition-colors"
            >
              <ChevronLeft size={30} />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-red-600 transition-colors"
            >
              <ChevronRight size={30} />
            </button>

            {/* Dots */}
            <div className="absolute top-4 right-4 flex space-x-2">
              {images.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`text-2xl cursor-pointer h-2 w-2 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-red-600' : 'bg-white/50'}`}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;