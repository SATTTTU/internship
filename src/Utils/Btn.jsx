import React from 'react'
import arrow from '../assets/arrow.png'

function Btn() {
  return (
    <div className="flex items-center justify-center bg-black   hover:bg-white p-3 rounded-full cursor-pointer  transition-all duration-300">
      <img src={arrow} alt="arrow" className="w-6 h-6" />
      
    </div>
  )
}

export default Btn
