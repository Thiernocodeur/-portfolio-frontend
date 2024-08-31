import React from 'react';

const Home = () => {
  return (
    <section 
      id="accueil" 
      className="flex items-center justify-between h-96 bg-gray-100 relative p-16" // Hauteur et padding ajustés
    >
      {/* Ajout d'une grille pour visualiser les hauteurs et les espacements */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 border-2 border-black opacity-30">
        {/* Les lignes de grille et colonnes */}
      </div>

      <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold text-black">Thierno Barra Diallo</h1>
          <p className="text-xl text-black mt-2">Développeur Full Stack</p>
        </div>
        <a 
          href="#contact" 
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-colors"
        >
          Contactez-moi
        </a>
      </div>
    </section>
  );
}

export default Home;

