import "./style.css"


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

      <ul className="menu-links">
          <a className="menu-header" onClick={() => scrollToSection('about')}><li>O BLOCO</li></a>
          <a className="menu-header" onClick={() => scrollToSection('sponsors')}><li>APOIE</li></a>
          <a className="menu-header" onClick={() => scrollToSection('contact')}><li>CONTATO</li></a>
          <a href="https://boemios.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className="menu-header"><li>LOJA</li></a>
      </ul>
    </div>
  )
}
