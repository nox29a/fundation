import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Shop from './components/Shop';

import Support from './components/Support';


const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Hero />
    <About />
    <Shop />
    <Support />
    <Contact />
    <Footer />
  </div>;
};

export default App;
