import React from 'react';
import logo from '../images/logo.png'; // Assurez-vous de mettre le chemin correct vers votre logo

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-16 h-auto" /> {/* Taille du logo augmentée */}
        </div>
        <div className="space-x-4 flex items-center">
          <a href="#accueil" className="text-gray-800 hover:text-blue-500">Accueil</a>
          <a href="#a-propos" className="text-gray-800 hover:text-blue-500">À propos</a>
          <a href="#portfolio" className="text-gray-800 hover:text-blue-500">Portfolio</a>
          <a href="#services" className="text-gray-800 hover:text-blue-500">Services</a>
          <a href="#experiences" className="text-gray-800 hover:text-blue-500">Expériences</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
