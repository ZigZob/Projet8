import React from 'react'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import './_home.scss'
import LogementData from '../../data/data.json'
import bannerUrl from '../../assets/banner1P8.png'

export default function Home() {
  return (
    <React.Fragment>
      <Banner bannerImg={bannerUrl}
        title="Chez vous, partout et ailleurs" />
      <section className='gallery'>
        {LogementData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </React.Fragment>
  )
};