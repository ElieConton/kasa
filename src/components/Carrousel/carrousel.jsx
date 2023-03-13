import './carrousel.css'
import React from 'react'
import { useState } from 'react'
import  ArrowLeft from './arrowLeft.png'
import  ArrowRight from './arrowRight.png'

function Carrousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const arrayLenght = props.pictures.flatMap(el => el.pictures).length;

  function prevSlide() {
    let newSlide = currentSlide === 0 ? arrayLenght - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }
  function nextSlide() {
    let newSlide = currentSlide === arrayLenght - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }
  return (
    <section className="carrousel-container">
      <div className="carrousel-navigation">
        <img src={ArrowLeft} alt="précedent" className={arrayLenght > 1 ? "arrow" : "arrow-hide"} onClick={() => {prevSlide()}} />
        <img src={ArrowRight} alt="suivant" className={arrayLenght > 1 ? "arrow" : "arrow-hide"} onClick={() => {nextSlide()}} />
      </div>
      {props.pictures.map((picture, index) => {
        return (
          <img src={picture} alt="" key={index} className={index === currentSlide ? "carrousel-img" : "hide-img"} />
        )
      })}
      <div className="carrousel-text">{currentSlide + 1}/{props.pictures.length}</div>
    </section>
  )
}

export default Carrousel;