import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ajoutez ici vos projets */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Projet 1</h3>
            <p className="text-gray-600">Description du projet 1.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Projet 2</h3>
            <p className="text-gray-600">Description du projet 2.</p>
          </div>
          {/* Ajoutez plus de projets ici */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
