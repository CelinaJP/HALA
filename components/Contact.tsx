import React from 'react';
import { Mail, Facebook, Instagram, Youtube, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="urban-font text-4xl md:text-6xl font-bold text-white mb-4">CONTACTO</h2>
                <p className="text-gray-400">¿Querés formar parte? ¿Tenés alguna duda? Escribinos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
                
                {/* Form */}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre / AKA</label>
                        <input type="text" id="name" className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition-colors" placeholder="Tu nombre artístico" />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition-colors" placeholder="tu@email.com" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                        <textarea id="message" rows={4} className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-red-500 transition-colors" placeholder="Dejanos tu mensaje..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center">
                        ENVIAR MENSAJE <Send size={18} className="ml-2" />
                    </button>
                </form>

                {/* Direct Info */}
                <div className="flex flex-col justify-center space-y-8 md:pl-8 md:border-l border-gray-800">
                    <div>
                        <h3 className="urban-font text-2xl text-white mb-4">REDES OFICIALES</h3>
                        <div className="space-y-4">
                            <a href="https://www.instagram.com/halabalusaoficial/?hl=es" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram className="mr-3" /> @halabalusaoficial
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100050652602254" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                                <Facebook className="mr-3" /> Halabalusa Oficial
                            </a>
                            <a href="https://www.youtube.com/watch?v=zYI8oiqET-U&list=RDzYI8oiqET-U&start_radio=1" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                                <Youtube className="mr-3" /> Canal de YouTube
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="urban-font text-2xl text-white mb-4">EMAIL</h3>
                        <a href="mailto:halabalusaoficial@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                            <Mail className="mr-3" /> halabalusaoficial@gmail.com
                        </a>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;