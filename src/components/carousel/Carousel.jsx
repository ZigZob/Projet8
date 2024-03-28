import './_carousel.scss'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Carousel({ imgUrlArray }) {
    const [carouselPosition, setCarouselPosition] = useState(0)

    function previousSlide() {
        setCarouselPosition(carouselPosition =>
            carouselPosition === 0 ? imgUrlArray.length - 1 : carouselPosition - 1
        )
    }
    function nextSlide() {
        setCarouselPosition(carouselPosition =>
            carouselPosition === imgUrlArray.length - 1 ? 0 : carouselPosition + 1
        )
    }

    if (imgUrlArray.length === 1) {
        return (
            <img className="carouselSingleImg" src={imgUrlArray[0]}></img>
        )
    }
    else if (imgUrlArray.length > 1) {
        return (
            <div className='carousel' >

                {imgUrlArray.map((picture) => (
                    <img key={picture} className="carousel__img" src={picture} style={{ translate: `${-100 * carouselPosition}%` }}></img>))
                }
                <i onClick={previousSlide} className="fa-2xl fa-solid fa-chevron-left carousel__icon carousel__icon--previous"></i>
                <i onClick={nextSlide} className="fa-2xl fa-solid fa-chevron-right carousel__icon carousel__icon--next"></i>
                <div className='carousel__position' >{carouselPosition + 1}/{imgUrlArray.length}</div>
            </div>
        )
    }
    else return
}

Carousel.propTypes = {
    imgUrlArray: PropTypes.array.isRequired
}