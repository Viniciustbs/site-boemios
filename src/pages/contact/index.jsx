import "./style.css"
import instagram from "../../assets/img/icons8-instagram-50.png"
import telefone from "../../assets/img/icons8-call-50.png"
import whatsapp from "../../assets/img/icons8-whatsapp-50.png"


export const Contact = () => {
  return (
    <div className="contact-container">

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
      <div className="whats-contato contato-style">
          <img src={whatsapp} />
          <p>+55(53) 99997-0698</p>
        </div>
        <div className="telefone-contato contato-style">
          <img src={telefone} />
          <p>+55(53) 99997-0698</p>
        </div>
        <div className="instagram-contato contato-style">
          <img src={instagram} />
          <p>@boemioscassino</p>
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
