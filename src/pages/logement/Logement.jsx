import React from 'react'
import LogementData from '../../data/data.json'
import Carousel from '../../components/carousel/Carousel'
import Collapse from '../../components/collapse/Collapse'
import Ratings from '../../components/ratings/Ratings'

console.log(LogementData[0])
function Logement({ logement }) {
    console.log(logement)
    return (
        <React.Fragment>
            <Carousel />
            <section className='presentation'  >
                <div className='' >
                    <h1 className=''>{logement.title}</h1>
                    <p className=''>{logement.location}</p>
                </div>
                <div className=''>
                    <p className=''>{logement.host.name}</p>
                    <img className='' src={logement.host.picture}></img>
                </div>
            </section>
            <section className='qualities'>
                <div className='tagsWrapper'>
                    {logement.tags.map((tag) => <span className='tagWrapper__tag' key={tag}>{tag}</span>)}
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

export default Logement