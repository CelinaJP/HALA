import React from 'react';
import { MapPin, Train, Bus } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info */}
            <div>
                <div className="mb-8">
                    <h2 className="urban-font text-4xl md:text-6xl font-bold text-white mb-2">UBICACIÓN</h2>
                    <div className="h-2 w-24 bg-red-600"></div>
                </div>
                
                <div className="space-y-8">
                    <div className="flex items-start">
                        <MapPin className="text-red-500 mt-1 mr-4 flex-shrink-0" size={32} />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Plaza Halabalusa Underground</h3>
                            <p className="text-gray-400">Remedios de Escalada de San Martín & Claypole</p>
                            <p className="text-gray-400">Claypole, Provincia de Buenos Aires</p>
                        </div>
                    </div>

                    <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                        <h4 className="urban-font text-xl text-white mb-4 border-b border-gray-700 pb-2">CÓMO LLEGAR</h4>
                        
                        <div className="flex items-start mb-6">
                            <Train className="text-yellow-500 mt-1 mr-4 flex-shrink-0" size={24} />
                            <div>
                                <span className="text-white font-bold block">TREN ROCA</span>
                                <p className="text-gray-400 text-sm">Bajarse en Estación <strong className="text-white">Claypole</strong>. La plaza se encuentra a pocas cuadras de la estación.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Bus className="text-blue-500 mt-1 mr-4 flex-shrink-0" size={24} />
                            <div>
                                <span className="text-white font-bold block">COLECTIVOS</span>
                                <p className="text-gray-400 text-sm mb-2">Líneas que te acercan a la zona:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">160</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">263</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">318</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">338 (Talp)</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">505</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">506</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">514</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-auto w-full rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.490806456722!2d-58.35626218476686!3d-34.79339998041062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cadeebc6340001%3A0xe62e07856d3a826!2sPlaza%20Halabalusa!5e0!3m2!1ses-419!2sar!4v1675200000000!5m2!1ses-419!2sar" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Plaza Halabalusa"
                ></iframe>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Location;