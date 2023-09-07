import "./style.css"
import menabout from "../../assets/img/menabout.png"
import womanabout from "../../assets/img/womenabout.png"

export const About = () => {
  return (
    <div className="about-container">

      <img className='man-about' src={menabout} />
      <img  className='woman-about' src={womanabout}/>

      <div className="about-text">

      <h1>Sobre</h1>
      <p>
        Bem-vindo ao nosso cantinho de alegria!<br />
        Somos o Bloco Carnavalesco Boemios, uma turma animada que começou sua jornada lá em 2005 e está firme e forte até hoje, com 17 anos de muita história. 🎉<br /><br />

        Nós somos mais do que um bloco, somos uma grande família! Aqui, a diversão é a nossa principal missão. Nosso coração bate pelo carnaval, pelas amizades e pela cultura popular. É onde sorrisos contagiantes, batidas de tambor e passos de dança se encontram para criar momentos inesquecíveis.<br /><br />

        Nossos desfiles são repletos de energia, nossas festas são cheias de ritmo e nossa paixão pelo carnaval é contagiante. Estamos ansiosos para compartilhar muitos momentos inesquecíveis com você. Junte-se aos Boemios e embarque nessa jornada de diversão e amizade. Venha viver o carnaval como nunca antes!<br /><br />

        Siga-nos para ficar por dentro de nossos eventos, ensaios, e tudo mais que preparamos com muito carinho. Vamos fazer história juntos! 💃🕺🥁

      </p>

      </div>
      
    



    </div>
  )
}


//criação rafc
//nome da página em letra maiúscula
//div .cover-container
//importar style.css
//padrão em todas as páginas, index.jsx e style.css
