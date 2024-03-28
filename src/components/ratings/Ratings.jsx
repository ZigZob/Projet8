import React from "react"
import './_ratings.scss'
import PropTypes from 'prop-types'

export default function Ratings({ rating }) {
    const icons = Array(5).fill().map((icon, index) => (
        icon = <i key={index} className={`fa-solid fa-star ${index < rating ? 'filled' : 'empty'}`}></i>
    ))
    return (
        <div className="starRating" >
            {icons}
        </div>
    );
};


Ratings.propTypes = {
    rating: PropTypes.string.isRequired
}