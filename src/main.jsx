import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Navbar from './Componentes/Navbar';
import Home from './Componentes/Home';
import SobreMi from './Componentes/Aboutme';
import Tecnologias from './Componentes/Lenguaje';
import Portafolio from './Componentes/Portafolio';
import Contacto from './Componentes/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio"><Home /></section>
        <section id="sobre-mi"><SobreMi /></section>
        <section id="tecnologias"><Tecnologias /></section>
        <section id="portafolio"><Portafolio /></section>
        <section id="contacto"><Contacto /></section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
