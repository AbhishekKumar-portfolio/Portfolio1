import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/Services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/tetimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service/>
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
    
  );
}

export default App;