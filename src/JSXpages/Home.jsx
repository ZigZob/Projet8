import React from 'react'
import "../sass/main.scss"
import Banner from '../JSXcomponents/Banner'

function Home() {
  return (
    <main>
      <Banner bannerImg="bannerImgHome" title="Chez vous, partout et ailleurs" />
    </main>
  )
}

export default Home