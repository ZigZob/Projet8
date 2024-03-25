import React from 'react';
import './_banner.scss'
import PropTypes from 'prop-types'

export default function Banner({ bannerImg, title }) {
    return (
        <section className='banner'>
            <img className={`banner__img ${title === '' ? 'banner__img--noTitle' : ''}`} src={bannerImg}></img>
            <h1 className='banner__title'>{title}</h1>
        </section>
    )
}

Banner.propTypes = {
    bannerImg: PropTypes.string.isRequired,
    title: PropTypes.string
}