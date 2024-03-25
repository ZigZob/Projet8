import React from 'react'
import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import './_a-propos.scss'
import bannerUrl from '../../assets/banner2P8.png'

export default function APropos() {
    const data = [
        { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
        { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { title: "Service", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet a nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
    ]
    return (
        <React.Fragment>
            <Banner bannerImg={bannerUrl}
                title=""
            />
            <section className='a-propos' >
                {data.map((item, index) => (
                    <Collapse key={index} title={item.title} content={<p className='collapse__content' >{item.content}</p>} />
                ))}
            </section>
        </React.Fragment>
    )
}