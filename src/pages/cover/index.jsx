import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importe os ícones que deseja usar
import "./style.css";
import logo2023 from "../../assets/img/logo2023.png"
import flyer from "../../assets/img/Flyer.png"
import bkg1 from "../../assets/img/bkg-1.jpg"

export const Cover = () => {
  return (
    <div className="cover-container">
      <img className='background-cover' src={bkg1}/>

        <div className="img-cover-nome">
          <img src={logo2023} />
        </div>

        <div className='flyer-img'>
          <img src={flyer}/>
        </div>
        
        <div className="redes-sociais">
          <a href="https://www.facebook.com/Boemios" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/boemioscassino/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/5553999970698" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
    </div>
  );
};



//criação rafc
//nome da página em letra maiúscula
//div .cover-container
//importar style.css
//padrão em todas as páginas, index.jsx e style.css
