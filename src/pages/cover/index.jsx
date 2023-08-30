import React from 'react'
import "./style.css"



export const Cover = () => {
  return (
    <div className="cover-container">

      <div className="img-carnaval">
      <img id='img-ca24' src="../../img/carnaval2024.png" alt="" />
      </div>

      <div className="redes-sociais">

        <div href="" target="_blank"><i class="fa-brands fa-facebook"></i></div>
        <div href="" target="_blank"><i class="fa-brands fa-instagram"></i></div>
        <div href="" target="_blank"><i class="fa-brands fa-linkedin"></i></div>
        <div href="" target="_blank"><i class="fa-brands fa-whatsapp"></i></div>

      </div>

    </div>
  )
}


//criação rafc
//nome da página em letra maiúscula
//div .cover-container
//importar style.css
//padrão em todas as páginas, index.jsx e style.css
