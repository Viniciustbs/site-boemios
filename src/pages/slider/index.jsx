import React, { useEffect, useState } from 'react';
import "./style.css"

export function Slider() {
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
        <section className="slider">
      <div className="slides">
          <input type="radio" name="radio-btn" id="radio1"/>
          <input type="radio" name="radio-btn" id="radio2"/>
          <input type="radio" name="radio-btn" id="radio3"/>
          <input type="radio" name="radio-btn" id="radio4"/>
          <input type="radio" name="radio-btn" id="radio5"/>
          <input type="radio" name="radio-btn" id="radio6"/>


          <div className="slide first">
              <img className="img-desktop" src="../../img/carrossel/imagem1.jpg" alt="Imagem 1" />
              <img className="img-mobile" src="" alt="Imagem 1" />
          </div>

          <div className="slide">
              <img className="img-desktop" src="../../img/carrossel/imagem2.jpg" alt="Imagem 2" />
              <img className="img-mobile" src="" alt="Imagem 2"/>
          </div>

          <div className="slide">
              <img className="img-desktop" src="../../img/carrossel/imagem3.jpg" alt="Imagem 3"/>
              <img className="img-mobile" src="" alt="Imagem 3"/>
          </div>

          <div className="slide">
              <img className="img-desktop" src="../../img/carrossel/imagem4.jpg" alt="Imagem 4"/>
              <img className="img-mobile" src="" alt="Imagem 4"/>
          </div>
          <div className="slide">
              <img className="img-desktop" src="../../img/carrossel/imagem5.jpg" alt="Imagem 5"/>
              <img className="img-mobile" src="" alt="Imagem 5"/>
          </div>
          <div className="slide">
              <img className="img-desktop" src="../../img/carrossel/imagem6.jpg" alt="Imagem 6"/>
              <img className="img-mobile" src="" alt="Imagem 6"/>
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
