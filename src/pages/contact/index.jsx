import "./style.css"
import React, { useState } from 'react';
import instagram from "../../assets/img/icons8-instagram-50.png"
import telefone from "../../assets/img/icons8-call-50.png"
import whatsapp from "../../assets/img/icons8-whatsapp-50.png"
import { ToastNotification } from "../../components/toast-notification/index"


export const Contact = () => {

  //este script copia o texto da área de contato onde está definido.
  const [showToast, setShowToast] = useState(false);

  const copyTextToClipboard = (text) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
  };
  
  const handleContactClick = (text) => {
      copyTextToClipboard(text);
      setShowToast(true);
      setTimeout(() => {
          setShowToast(false);
      }, 5000); // 5 segundos
  };
//


  return (
    <div id="contact" className="contact-container">

      <div className="contact-text-msg">
        <h1>
          Entre em contato conosco
        </h1>
        <p>
          Para qualquer informação adicional, entre em
          contato em um dos nossos canais de atendimento!
        </p>
      </div>

      <div className="contatos">
       {showToast && <ToastNotification />}
        <a href="https://wa.me/5553999970698" target="_blank" rel="noopener noreferrer" className="whats-contato contato-style">
            <img src={whatsapp} />
            <p>+55(53)99997-0698</p>
          </a>
        <a href="https://wa.me/5553981113449" target="_blank" rel="noopener noreferrer" className="whats-contato contato-style">
          <img src={whatsapp} />
          <p>+55(53)98111-3449</p>
        </a>
        <a href="https://www.instagram.com/boemioscassino/" target="_blank" rel="noopener noreferrer" className="instagram-contato contato-style" >
          <img src={instagram} />
          <p>@boemioscassino</p>
        </a>
        <div className="telefone-contato contato-style" onClick={() => handleContactClick('+55(53) 99997-0698')}>
          <img src={telefone} />
          <p>+55(53) 99997-0698</p>
        </div>

      </div>


      



    </div>
  )
}


//criação rafc
//nome da página em letra maiúscula
//div .cover-container
//importar style.css
//padrão em todas as páginas, index.jsx e style.css
