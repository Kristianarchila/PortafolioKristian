import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Home from './Componentes/Home';
import Portafolio from './Componentes/Portafolio';
import Contacto from './Componentes/Contacto';
import Tecnologias from './Componentes/Lenguaje';
import SobreMi from './Componentes/Aboutme';






import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      
      <Navbar />


      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />        
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/portafolio" element={<Portafolio />} />     
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
