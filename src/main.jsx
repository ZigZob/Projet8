import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import Header from './JSXcomponents/Header'
import Footer from './JSXcomponents/Footer'
import Home from './JSXpages/Home'
import APropos from './JSXpages/APropos'
import ErrorPage from './JSXpages/ErrorPage'
// import FicheLogement from './JSXpages/FicheLogement'

const root = ReactDOM.createRoot(document.getElementById('root'));
// const { LogementIndex } = useParams()
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path={`/Fiche-Logement/${LogementIndex}`} element={<FicheLogement />} /> */}
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);