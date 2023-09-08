import "./style.css"
import React from 'react';

export const Header = () => {
  
  //O script abaixo determina a rolagem entre as telas
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header-container">
      <div className="menus-header">
        <a className="menu-header" onClick={() => scrollToSection('about')}>O BLOCO</a>
        <a className="menu-header" onClick={() => scrollToSection('carnaval')}>CARNAVAL 2024</a>
        <a className="menu-header" onClick={() => scrollToSection('sponsors')}>APOIE</a>
        <a className="menu-header" onClick={() => scrollToSection('contact')}>CONTATO</a>
        <a href="https://boemios.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className="menu-header">LOJA</a>
      </div>
    </div>
  )
}
