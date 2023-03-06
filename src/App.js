import React from 'react';
import Home from './components/Home/Home.jsx';
import Skills from './components/Skills/Skills.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Project from './components/Project/Project.jsx';
import './App.css';

function App() {
  return (
    <main>
      <Home/>
      <Skills/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
    
    </main>
  )
}

export default App
