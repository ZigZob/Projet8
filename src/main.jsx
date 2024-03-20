import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './base/_reset.scss'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Home from './pages/home/Home'
import APropos from './pages/a-propos/A-propos'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Logement from './pages/logement/Logement'


const root = ReactDOM.createRoot(document.getElementById('root'));
// const { LogementIndex } = useParams()
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/Logement/:LogementIndex"} element={<Logement />} />
        <Route path="/A-propos" element={<APropos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);