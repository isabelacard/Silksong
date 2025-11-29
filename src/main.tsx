import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Escena2 from './components/Escena2'
import Escena4 from './components/Escena4'
import Escena3 from './components/Escena3'
import Escena5 from './components/Escena5'
import FooterFinal from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Escena2/>
    <Escena3/>
    <Escena4/>
    <Escena5/>
    <FooterFinal/>
  </StrictMode>,
)
