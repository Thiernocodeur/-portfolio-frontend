import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Services/>
      <Experiences/>
      <Contact/>
    </div>
  );
}

export default App;
