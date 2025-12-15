import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const News: React.FC = () => {
  // Simulating Instagram posts
  const newsItems = [
    {
      id: 1,
      title: "¡FECHA CONFIRMADA!",
      date: "Hace 2 días",
      image: "images/plaza.png",
      desc: "Nos vemos este fin de semana en la plaza. No te pierdas las inscripciones a partir de las 16hs."
    },
    {
      id: 2,
      title: "NUEVO CAMPEÓN",
      date: "Hace 1 semana",
      image: "images/pibe.png",
      desc: "Felicitaciones al ganador de la fecha 4. El nivel está cada vez más alto. #Underground"
    },
    {
      id: 3,
      title: "LLEGÓ LA ROPA",
      date: "Hace 2 semanas",
      image: "images/remeragris.png",
      desc: "Ya tenemos disponible el nuevo drop de invierno. Pasate por el puesto en la compe."
    }
  ];

  return (
    <section className="py-20 bg-zinc-900 border-y border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
            <h2 className="urban-font text-4xl md:text-6xl font-bold text-white mb-4">ÚLTIMAS NOTICIAS</h2>
            <a 
              href="https://www.instagram.com/halabalusaoficial/?hl=es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
            >
                <Instagram className="mr-2" size={20} /> @halabalusaoficial
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
                <div key={item.id} className="bg-black p-4 rounded-xl border border-gray-800 hover:border-gray-600 transition-all group">
                    <div className="h-64 mb-4 rounded-lg overflow-hidden relative">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                            {item.date}
                        </div>
                    </div>
                    <h3 className="urban-font text-2xl text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{item.desc}</p>
                    <a href="https://www.instagram.com/halabalusaoficial/?hl=es" target="_blank" rel="noreferrer" className="flex items-center text-sm text-red-500 hover:text-white transition-colors">
                        Ver en Instagram <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default News;