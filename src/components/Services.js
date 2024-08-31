import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h5 className="text-3xl font-bold text-blue-500 mb-8 text-center">Services</h5>
        <div className="flex flex-col gap-8">
          {/* Section DevWeb */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1 bg-gray-300 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-code text-blue-500 text-2xl mr-3"></i>
                <h6 className="text-xl font-bold">Programmation Langages</h6>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div className="flex-1 bg-gray-300 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-laptop-code text-blue-500 text-2xl mr-3"></i>
                <h6 className="text-xl font-bold">Programmation des Langages</h6>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>

          {/* Section Montage */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gray-300 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-paint-brush text-blue-500 text-2xl mr-3"></i>
                <h6 className="text-xl font-bold">Modélisation</h6>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div className="flex-1 bg-gray-300 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-video text-blue-500 text-2xl mr-3"></i>
                <h6 className="text-xl font-bold">Création Vidéo</h6>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
