import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RealTimeLocation from './App.jsx'
import LiveMap from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LiveMap/>
    </BrowserRouter>
  </StrictMode>,
)
