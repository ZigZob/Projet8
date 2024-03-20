import React from 'react'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import './_home.scss'
import coverImg from '../../assets/banner1P8.png'

function Home() {
  // const fetchData = async () => {
  //   const response = await fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json');
  //   const parsedData = await response.json();
  //   console.log(parsedData)
  // }
  // fetchData()

  return (
    <React.Fragment>
      <Banner bannerImg='https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EpucSGT-xNq5Hw5pwI7-oZYUzRAytcZROTkXqNFJToeoNiic3htJPpz6SGFItPeJoBlnyg5foW8Tweyyrs1FfZJbCXBg1sXnT0f6t3NBHDq6UzrXbAtTOz3Li1rd34ZVJcdnuatp0RD~voGG2dvoJndyxpuyfU-2TcuKp0pEnLGZDuZAIrcqq68EfZY33FP361AixK4MknNcPtMNFtS8hwA0EP138tLXoN4IDpEmxKgwz17yglwNffjGwP8kpofkIFF~-XrDNB-NdF7xyfoxOiHDlOxOanNdxCACNRO6YI1bgw25SE8oIk1d6kFXsl1T3K06bb-H7CkZzh56xrBqSw__'
        title="Chez vous, partout et ailleurs" />
      <section className='gallery'>
        <Card title="Appartement cosy" cover='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg' />
      </section>
    </React.Fragment>
  )
};

export default Home