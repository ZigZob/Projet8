import React from 'react'
import './_card.scss'
import { Link } from 'react-router-dom'

function Card({ logement }) {
    console.log(logement)
    return (
        < React.Fragment >
            <Link logement={logement} to={`/Logement/${logement.id}`}>
                <article className="card">
                    <img className='card__cover' src={logement.cover}></img>
                    <h2 className='card__title' >{logement.title}</h2>
                </article>
            </Link>
        </React.Fragment >
    )
}

export default Card