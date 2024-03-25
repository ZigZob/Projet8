import React from "react"
import './_ratings.scss'
import PropTypes from 'prop-types'

export default function Ratings({ rating }) {
    const icons = Array(5).fill(null);

    return (
        <div className="starRating" >
            {icons.map((_, index) => (
                <i key={index} className={`fa-solid fa-star ${index < rating ? 'filled' : 'empty'}`}></i>
            ))}
        </div>
    );
}

Ratings.propTypes = {
    rating: PropTypes.string.isRequired
}