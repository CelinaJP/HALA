import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Merch from './components/Merch';
import News from './components/News';
import Battles from './components/Battles';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll spy logic could be added here, but for simplicity
  // we are using native ID anchors handled in Navbar.
  
  return (
    <div className="min-h-screen bg-black text-gray-200 overflow-x-hidden">
      <Navbar />
      
      <main>
        <div id="inicio">
          <Hero />
        </div>
        
        <div id="historia">
          <History />
        </div>

        <div id="merch">
          <Merch />
        </div>

        <div id="noticias">
          <News />
        </div>

        <div id="batallas">
          <Battles />
        </div>

        <div id="ubicacion">
          <Location />
        </div>

        <div id="contacto">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;