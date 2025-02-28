// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos Routes y Route
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
// import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />  {/* Usamos "element" para pasar el componente */}
      <Route path="/otraPagina" element={<OtherPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
