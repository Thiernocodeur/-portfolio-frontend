import React from 'react';
import thierno from '../images/thierno.jpeg'; // Importez l'image depuis le répertoire 'src/images'

const About = () => {
  return (
    <section id="a-propos" className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">À propos de moi</h2>
          <p className="text-gray-600 mb-4">
            Je suis Thierno Barra Diallo, un développeur full stack passionné par la création de solutions web et mobiles innovantes.
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a 
            href="chemin/vers/CV.pdf" 
            className="inline-block w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            style={{ width: 'fit-content' }} // Pour ajuster la largeur à celle du texte
          >
            Télécharger le CV
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={thierno} alt="Thierno Barra Diallo, développeur full stack" className="w-64 h-64 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default About;
