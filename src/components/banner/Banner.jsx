import React from 'react';
import './_banner.scss'

function Banner({ bannerImg, title }) {
    return (
        <section className='banner'>
            <img className={`banner__img ${title === '' ? 'banner__img--noTitle' : ''}`} src={bannerImg}></img>
            <h1 className='banner__title'>{title}</h1>
        </section>
    )
}
export default Banner;