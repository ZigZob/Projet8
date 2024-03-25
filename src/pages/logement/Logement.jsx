import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Collapse from '../../components/collapse/Collapse'
import Ratings from '../../components/ratings/Ratings'
import './_logement.scss'
import { useParams } from 'react-router-dom'
import LogementData from '../../data/data.json'
import { Navigate } from 'react-router-dom'

export default function Logement() {
    const { logementId } = useParams()
    const matchingLogement = LogementData.filter(logement => logement.id === logementId);
    if (matchingLogement.length !== 0) {
        const logement = matchingLogement[0]
        const brokenName = logement.host.name.split(' ').map((word, index) => (
            <span key={index} className='hostNameWords'>{word}</span>
        ))
        return (
            <React.Fragment>
                <Carousel imgUrlArray={logement.pictures} />
                <section className='presentation'  >
                    <div className='logement' >
                        <h1 className='logement__title'>{logement.title}</h1>
                        <p className='logement__subtitle'>{logement.location}</p>
                    </div>
                    <div className='host'>
                        <p className='host__name'>{brokenName}</p>
                        <img className='host__picture' src={logement.host.picture}></img>
                    </div>
                </section>
                <section className='properties'>
                    <div className='tagsWrapper'>
                        {logement.tags.map((tag) => <span className='tagsWrapper__tag' key={tag}>{tag}</span>)}
                    </div>
                    <div className='ratingsWrapper'>
                        <Ratings rating={logement.rating} />
                    </div>
                </section>
                <section className='details'>
                    <Collapse
                        title="Description"
                        content={
                            <p className='collapse__content'>{logement.description}
                            </p>}
                    />
                    <Collapse
                        title="Équipements"
                        content={
                            <ul className='collapse__content'>
                                {logement.equipments.map((equipment) => {
                                    return (<li key={equipment}>{equipment}</li>)
                                })}
                            </ul>}
                    />
                </section>
            </React.Fragment>
        )
    }
    else {
        return <Navigate to="*" />
    }
}