import React from 'react';
import image from '../images/bloc.jpg'; // Importez votre image ici

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <a className="text-blue-500 text-lg font-bold mb-4 block" href="#portfolio">Portofiolo</a>
        <nav className="navbar2 flex justify-end items-center bg-green-400 h-16 shadow-lg px-4 rounded-lg mb-8">
          <a href="#Hommen" className="text-gray-800 text-base hover:text-blue-500 mx-4">Application mobile</a>
          <a href="#A Propos" className="text-gray-800 text-base hover:text-blue-500 mx-4">Site Web</a>
          <a href="#Portofiolo" className="text-gray-800 text-base hover:text-blue-500 mx-4">Modélisation</a>
        </nav>

        <div className="projet mt-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="tex2 flex-1 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Projet</h3>
            <p className="text-gray-700 mb-4">Application pour Pharmacie de garde</p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Nisi accusamus culpa dolores praesentium rerum consequuntur impedit <br />
              doloribus omnis officia! Commodi eum, culpa quos adipisci eveniet vel <br />
              dolore sed natus rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Rerum expedita, facilis dolore doloribus quibusdam molestias. Iusto perferendis <br /> 
              veritatis dolor repellat, laudantium sapiente ducimus quis magni quaerat nam quod.
            </p>
            <button className="btn3 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
              Voir plus &rarr;
            </button>
          </div>

          <div className="carre flex flex-col md:flex-row gap-4 flex-1 items-center justify-center">
            <img src={image} alt="Description" className="w-full h-auto max-w-md rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
