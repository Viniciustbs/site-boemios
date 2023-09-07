import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importe os ícones que deseja usar
import "./style.css";
import logo2023 from "../../assets/img/logo2023.png"

export const Cover = () => {
  return (
    <div className="cover-container">
      <div className="img-cover-nome">
        <img src={logo2023} />
      </div>
      
      <div className="redes-sociais">
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  );
};



//criação rafc
//nome da página em letra maiúscula
//div .cover-container
//importar style.css
//padrão em todas as páginas, index.jsx e style.css
