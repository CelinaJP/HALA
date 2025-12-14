import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="urban-font text-2xl text-white font-bold mb-2">HALABALUSA UNDERGROUND</h2>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Todos los derechos reservados.Desarrollado por Celina Pereyra</p>
            <p className="text-gray-600 text-xs mt-2">Cultura Hip Hop & Freestyle Argentino</p>
        </div>
    </footer>
  );
};

export default Footer;