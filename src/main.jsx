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
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A-propos" element={<APropos />} />
          <Route path="/Logement/:logementId" element={<Logement />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);