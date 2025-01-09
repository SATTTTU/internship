import React from 'react'
import image3 from "../src/assets/scheadulepost.webp";
function gridmember4() {
  return (
    <>
    <div className="bg-orange-300 text-white p-6 rounded-lg text-center flex flex-col items-center">
      <p>Maintain a consistent schedule</p>
      <div className="mt-4 flex justify-center">
        <img
          src={image3}
          alt="Consistent schedule"
          className="w-48 sm:w-32 md:w-40 lg:w-48 mt-4 object-contain"
        />
      </div>
    </div>
    
    </>
  )
}

export default gridmember4