import React from 'react'
import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import './_a-propos.scss'

function APropos() {
    const data = [
        { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
        { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { title: "Service", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet a nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
    ]
    return (
        <React.Fragment>
            <Banner bannerImg='https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ViPOAUfmvIsTmvxNO7MY7ENfINckT98U00BKo3cnNqkAgi1YW4bUhq~Z~iJd5KNOc0zIvmLxeGFbYScarrul6-VkFqIC3o2N-0khvvXi0a3g3iG4~aZYnlinQhHKiojCPxcShjwQr1ILbVXLiA5CB15vY0pQ03nEkYeXm~2MQizSmt9nub9ogDz9~nsw6oF1LEu4v6qb4KvdX-swA5pJbB6GoEOiJiWc0JXeCKvynQQvdqx5pvs1SaKjobNUVdd9f1jDrCyVYoB6j1tvfXTsZZWoQe8X9nlbdUNBJBdQzZgRoX1gfgNRmSHY53I6r7-He6LsUMVlhz2T10vfiqhX3g__'
                title=""
            />
            <section className='a-propos' >
                {data.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </section>
        </React.Fragment>
    )
}



export default APropos