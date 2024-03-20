import React from 'react';
import "../sass/main.scss"

function Banner({ bannerImg, title }) {
    return (
        <section className={`banner ${bannerImg}`}>{title}</section>
    )
}
export default Banner;