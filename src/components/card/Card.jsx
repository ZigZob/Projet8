import React from 'react'
import './_card.scss'

function Card({ cover, title }) {
    return (
        <article className="card">
            <img className='card__cover' src={`${cover}`}></img>
            <h2 className='card__title' >{`${title}`}</h2>
        </article>
    )
}

export default Card