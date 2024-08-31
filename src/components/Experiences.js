import React from 'react';

// Importez vos images
import html from '../images/html.png';
import nodejs from '../images/nodejs.png';
import js from '../images/js.png';
import css from '../images/css.png';
import react from '../images/react.png';
import java from '../images/java.png';
import aws from '../images/aws.png';
import python from '../images/phython.jpg'; // Nouvelle image ajoutée

const Experience = () => {
  return (
    <section id="experiences" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre Experience aligné à gauche en bleu */}
        <h5 className="text-2xl font-bold text-blue-500 mb-8 text-left">Experience</h5>
        
        {/* Première ligne d'images */}
        <div className="flex justify-between mb-12">
          <img src={html} alt="HTML" className="w-20 h-20 md:w-24 md:h-24" />
          <img src={nodejs} alt="Node.js" className="w-20 h-20 md:w-24 md:h-24" />
          <img src={js} alt="JavaScript" className="w-20 h-20 md:w-24 md:h-24" />
          <img src={css} alt="CSS" className="w-20 h-20 md:w-24 md:h-24" />
        </div>

        {/* Deuxième ligne d'images */}
        <div className="flex justify-between mb-8">
          <img src={react} alt="React" className="w-20 h-20 md:w-24 md:h-24" />
          <img src={java} alt="Java" className="w-20 h-20 md:w-24 md:h-24" />
          <img src={aws} alt="AWS" className="w-20 h-20 md:w-24 md:h-24" />
          <img src={python} alt="Python" className="w-20 h-20 md:w-24 md:h-24" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
