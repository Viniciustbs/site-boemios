import "./style.css"


export const Header = () => {
  
  //O script abaixo determina a rolagem entre as telas
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  document.addEventListener('DOMContentLoaded', function () {
          // Função para abrir o menu Hamburguer
          function openMenu() {
            document.querySelector('.menu-links').classList.add('active');
            document.getElementById('overlay').style.display = 'block';
          }
      
      
          // Abre o menu ao clicar no ícone do menu hamburguer
          document.querySelector('.menu-icon').addEventListener('click', function () {
            openMenu();
          });
      
          // Função para fechar o menu
          function closeMenu() {
            document.querySelector('.menu-links').classList.remove('active');
            document.getElementById('overlay').style.display = 'none';
          }
      
          // Fecha o menu ao clicar fora do menu ou no ícone do menu hamburguer
          document.addEventListener('click', function (event) {
            const menuLinks = document.querySelector('.menu-links');
            const menuIcon = document.querySelector('.menu-icon');
            const overlay = document.getElementById('overlay');
      
            // Verifica se o clique ocorreu fora do menu e do ícone do menu hamburguer
            if (!menuLinks.contains(event.target) && !menuIcon.contains(event.target) && overlay.style.display === 'block') {
                closeMenu();
            }
          });
  });


  return (
    <div className="header-container">

        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
      <div id="overlay"></div>

      <ul className="menu-links">
          <a className="menu-header" onClick={() => scrollToSection('about')}><li>O BLOCO</li></a>
          <a className="menu-header" onClick={() => scrollToSection('carnaval')}><li>CARNAVAL 2024</li></a>
          <a className="menu-header" onClick={() => scrollToSection('sponsors')}><li>APOIE</li></a>
          <a className="menu-header" onClick={() => scrollToSection('contact')}><li>CONTATO</li></a>
          <a href="https://boemios.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className="menu-header"><li>LOJA</li></a>
      </ul>
    </div>
  )
}
