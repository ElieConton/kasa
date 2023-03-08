import './carrousel.css'
import { useState } from 'react'
import ArrowLeft from './arrowLeft.png'
import ArrowRight from './arrowRight.png'

function Caroussel({ pictures }) {
 
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const goToPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  
  if (!Array.isArray(pictures) || length <= 0) {
    return null
  }

  return (
    <div>
      <div className="carrousel-container">
        {pictures &&
          pictures.map((picture, index) => {
            return (
              <div 
                className={index === current ? 'picture-active' : 'picture'}
                key={index}
              >
                <img
                  className="carrousel-img"
                  key={index}
                  src={picture}
                  alt="carousel_image"
                />
                
                <div className={index === current ? 'compteur' : 'compteur2'}>
                  {current + 1}/{pictures.length}
                </div>
              </div>
            )
          })}
        <div>
          <img
            className="arrow-right"
            src={ArrowRight}
            alt="fleche vers la droite"
            onClick={goToNext}
          />
          <img
            className="arrow-left"
            src={ArrowLeft}
            alt="fleche vers la gauche"
            onClick={goToPrevious}
          />
        </div>
      </div>
    </div>
  )
}
export default Caroussel