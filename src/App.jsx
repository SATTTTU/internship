import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'
import Services from './Components/Services'
import Usecases from './Pages/Usecases'
import Pricing from './Pages/Pricing'



function App() {
  
  return (
    <>
    <div>
    <Header/>
    <Home/>
    <Footer/>
    </div>
    
   
    
    
       <Routes>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/usecases" element={<Usecases/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/blog" element={<Usecases/>}/>
          </Routes>
    
    </>
  )
}

export default App