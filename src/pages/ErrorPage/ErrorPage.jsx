import React from 'react'
import { Link } from "react-router-dom"
import './_errorPage.scss'
function ErrorPage() {
    return (
        <section className='Error'>
            <p className='Error__title'>404</p>
            <p className='Error__subtitle'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='Error__link' to="/">Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default ErrorPage