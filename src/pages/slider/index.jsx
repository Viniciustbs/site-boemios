import React, { useEffect, useState } from 'react';
import "./style.css"
import bkg2 from "../../assets/img/bkg-2.jpg"
import imagem1 from "../../assets/img/carrossel/imagem1.jpg"
import imagem2 from "../../assets/img/carrossel/imagem2.jpg"
import imagem3 from "../../assets/img/carrossel/imagem3.jpg"
import imagem4 from "../../assets/img/carrossel/imagem4.jpg"
import imagem5 from "../../assets/img/carrossel/imagem5.jpg"
import imagem6 from "../../assets/img/carrossel/imagem6.jpg"
import imagemmobile1 from "../../assets/img/carrossel/imagem1.jpg"
import imagemmobile2 from "../../assets/img/carrossel/imagem2.jpg"
import imagemmobile3 from "../../assets/img/carrossel/imagem3.jpg"
import imagemmobile4 from "../../assets/img/carrossel/imagem4.jpg"
import imagemmobile5 from "../../assets/img/carrossel/imagem5.jpg"
import imagemmobile6 from "../../assets/img/carrossel/imagem6.jpg"

export function Slider() {

  //os scripts abaixo determinam a passagem de imagens do slider e a posição do botão de passagem.
  const [currentSlide, setCurrentSlide] = useState(0);
  const radioBtns = document.querySelectorAll('[name="radio-btn"]');
  const autoBtns = document.querySelectorAll('.auto-btn');
  const radios = document.getElementsByName('radio-btn');

  useEffect(() => {

    const interval = setInterval(() => {
      proximaImg();
    }, 5000);

    for (let i = 0; i < radioBtns.length; i++) {
      radioBtns[i].addEventListener('click', function () {
        for (let j = 0; j < autoBtns.length; j++) {
          autoBtns[j].classList.remove('active');
        }
        this.classList.add('active');
      });
    }

    radios[currentSlide].checked = true;

    return () => clearInterval(interval);
  }, [currentSlide]);

  function proximaImg() {
    const radios = document.getElementsByName('radio-btn');
    let proxima = false;

    for (let i = 0; i < radios.length; i++) {
      if (proxima) {
        radios[i].checked = true;
        return;
      }

      if (radios[i].checked) {
        proxima = true;
      }
    }

    radios[0].checked = true;
  }
  

  return (
      <div className="slider-container">

        <img className='background-slider' src={bkg2}/>

        <section className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/>
                <input type="radio" name="radio-btn" id="radio5"/>
                <input type="radio" name="radio-btn" id="radio6"/>


                <div className="slide first">
                    <img className="img-desktop" src={imagem1} alt="Imagem 1" />
                    <img className="img-mobile" src={imagemmobile1} alt="Imagem 1" />
                </div>

                <div className="slide">
                    <img className="img-desktop" src={imagem2} alt="Imagem 2" />
                    <img className="img-mobile" src={imagemmobile2} alt="Imagem 2"/>
                </div>

                <div className="slide">
                    <img className="img-desktop" src={imagem3} alt="Imagem 3"/>
                    <img className="img-mobile" src={imagemmobile3} alt="Imagem 3"/>
                </div>

                <div className="slide">
                    <img className="img-desktop" src={imagem4} alt="Imagem 4"/>
                    <img className="img-mobile" src={imagemmobile4} alt="Imagem 4"/>
                </div>
                <div className="slide">
                    <img className="img-desktop" src={imagem5} alt="Imagem 5"/>
                    <img className="img-mobile" src={imagemmobile5} alt="Imagem 5"/>
                </div>
                <div className="slide">
                    <img className="img-desktop" src={imagem6} alt="Imagem 6"/>
                    <img className="img-mobile" src={imagemmobile6} alt="Imagem 6"/>
                </div>


                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                    <div className="auto-btn5"></div>
                    <div className="auto-btn6"></div>

                </div>

            </div>

            <div className="manual-navigation">
                <label htmlFor="radio1" className="manual-btn"></label>
                <label htmlFor="radio2" className="manual-btn"></label>
                <label htmlFor="radio3" className="manual-btn"></label>
                <label htmlFor="radio4" className="manual-btn"></label>
                <label htmlFor="radio5" className="manual-btn"></label>
                <label htmlFor="radio6" className="manual-btn"></label>

            </div>

        </section>
      </div>
    
  )
}


//criação rafc
//nome da página em letra maiúscula
//div .cover-container
//importar style.css
//padrão em todas as páginas, index.jsx e style.css
