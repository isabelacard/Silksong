import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Escena2 from './components/Escena2'
import Escena3 from './components/Escena4'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Escena2/>
    <Escena3/>
  </StrictMode>,
)
