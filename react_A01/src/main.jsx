import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Temporizador from './Componente.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Temporizador/>
  </StrictMode>,
)
