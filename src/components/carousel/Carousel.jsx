import './_carousel.scss'
import { useState } from 'react'

export default function Carousel(logement) {

    const [carouselPosition, setCarouselPosition] = useState(0)

    function changeSlide(event) {
        if (event.target.classList.contains("carousel__icon--previous")) {
            setCarouselPosition(carouselPosition =>
                carouselPosition === 0 ? logement.pictures.length - 1 : carouselPosition - 1

            );
        }
        else if (event.target.classList.contains("carousel__icon--next")) {
            setCarouselPosition(carouselPosition =>
                carouselPosition === logement.pictures.length - 1 ? 0 : carouselPosition + 1

            );
        }
    }

    if (logement.pictures.length === 1) {
        return (
            <img className="carouselSingleImg" src={logement.pictures[0]}></img>
        )
    }
    else if (logement.pictures.length > 1) {
        return (
            <div className='carousel' >

                {logement.pictures.map((picture) => (
                    <img key={picture} className="carousel__img" src={picture} style={{ translate: `${-100 * carouselPosition}%` }}></img>))
                }

                <i onClick={(event) => changeSlide(event)} className="fa-2xl fa-solid fa-chevron-left carousel__icon carousel__icon--previous"></i>
                <i onClick={(event) => changeSlide(event)} className="fa-2xl fa-solid fa-chevron-right carousel__icon carousel__icon--next"></i>
                <div className='carousel__position' >{carouselPosition + 1}/{logement.pictures.length}</div>
            </div>
        )
    }
    else return
}
