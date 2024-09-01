import React from 'react';
import facIcon from '../images/fac.png'; // Chemin de votre icône Facebook
import twitterIcon from '../images/tw.jpg'; // Chemin de votre icône Twitter

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-white py-5 px-10">
      {/* Logo à gauche */}
      <div className="text-blue-900 font-bold text-3xl">WP</div>
      
      {/* Texte centré */}
      <p className="text-blue-700 text-lg">© web portfolio</p>
      
      {/* Icônes des réseaux sociaux à droite */}
      <div className="flex items-center space-x-4">
        <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
        <img src={facIcon} alt="Facebook" className="w-8 h-8" />
        <p className="text-blue-700 text-lg">Thierno.Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
