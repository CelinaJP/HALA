import React from 'react';
import { Play } from 'lucide-react';

const Battles: React.FC = () => {
  const videos = [
    {
      id: "zYI8oiqET-U",
      title: "BATALLA LEGENDARIA 1"
    },
    {
      id: "TReZXZ0jRlQ",
      title: "BATALLA LEGENDARIA 2"
    },
    {
      id: "HOR-rplkV94",
      title: "BATALLA LEGENDARIA 3"
    }
  ];

  return (
    <section className="py-20 bg-black relative">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900/5 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-right">
          <h2 className="urban-font text-4xl md:text-6xl font-bold text-white mb-2">LAS BATALLAS</h2>
          <div className="h-2 w-32 bg-red-600 ml-auto"></div>
          <p className="mt-4 text-gray-400">Momentos históricos del underground.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative w-full pb-[56.25%] bg-gray-900 rounded-lg overflow-hidden border border-gray-800 group-hover:border-red-600 transition-colors shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="urban-font text-xl text-white group-hover:text-red-500 transition-colors">{video.title}</h3>
                <Play className="text-gray-600 group-hover:text-red-500 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://www.youtube.com/@HALABALUSAOFICIAL" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-white text-white font-bold tracking-wider hover:bg-white hover:text-black transition-colors urban-font text-lg">
                VER MÁS EN YOUTUBE
            </a>
        </div>
      </div>
    </section>
  );
};

export default Battles;