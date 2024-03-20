import React from 'react';
import './_banner.scss'

function Banner({ bannerImg, title }) {
    return (
        <section className={`banner ${bannerImg}`}>{title}</section>
    )
}
export default Banner;