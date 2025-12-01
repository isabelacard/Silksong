import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Escena4 from './components/Escena4'
import Escena3 from './components/Escena3'
import Escena5 from './components/Escena5'
import FooterFinal from './components/Footer'
import Escena2 from './components/Escena2'
import Navbar from './components/Navbar'
import Relleno from './components/RellenoRojo'
import Escena6 from './components/Escena6'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Relleno/>
    <Escena2/>
    <Escena3/>
    <Escena4/>
    <Escena5/>
    <Escena6/>
    <FooterFinal/>
  </StrictMode>,
)
