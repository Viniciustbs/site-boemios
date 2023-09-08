import "./style.css"
import handshake from "../../assets/img/handshake.png"

export const Sponsors = () => {
  return (
    <div id="sponsors" className="sponsors-container">
      <div className="text-sponsors">

        <h1>Seja um apoiador</h1>
        <p>Durante nosso trajeto contamos com diversos apoiadores que nos auxiliaram
          a chegar até aqui, agradecemos a todos. Você pode ser um dos nossos
           apoiadores este ano, entre em contato conosco e saiba mais,
           tenha agora mesmo sua marca na vitrine!</p>
      </div>

    <img className='img-sponsors-handshake' src={handshake} />



    </div>
  )
}


//criação rafc
//nome da página em letra maiúscula
//div .cover-container
//importar style.css
//padrão em todas as páginas, index.jsx e style.css
