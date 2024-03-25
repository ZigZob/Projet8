import React from 'react'
import './_card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card({ logement }) {
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

Card.propTypes = {
    logement: PropTypes.object.isRequired
}