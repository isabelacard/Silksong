import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Escena4 from './components/Escena4'
import Escena3 from './components/Escena3'
import Escena5 from './components/Escena5'
<<<<<<< HEAD
import FooterFinal from './components/Footer'
=======
import Navbar from './components/Navbar'
>>>>>>> 5114a70a0b792c6231cdb82816eb4e811e540169

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <Navbar/>
=======
    <Escena2/>
>>>>>>> 4239d2ce9c9a2a6fd4999b82cf2448b5ac671377
    <Escena3/>
    <Escena4/>
    <Escena5/>
    <FooterFinal/>
  </StrictMode>,
)
