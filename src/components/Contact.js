import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/contact', form);
      alert(response.data.message);
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      alert('Erreur lors de l\'envoi du message.');
      console.error('Error:', error); // Pour le débogage
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-12">
        {/* Informations de contact */}
        <div className="contact-info flex-1 bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Envoyez-moi un message</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center text-gray-600 mb-2">
            <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
            <span>Téléphone : +221 77 624 45 75</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <i className="fas fa-envelope text-blue-500 mr-2"></i>
            <span>Email : barradiallo199906@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-600">
            <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
            <span>Adresse : KEUR Masarr</span>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="contact-form flex-1 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Prénom et Nom"
              value={form.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Objet"
              value={form.subject}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded resize-none"
              rows="4"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
