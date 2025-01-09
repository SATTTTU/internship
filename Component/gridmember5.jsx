import React from 'react'
import image5 from "../src/assets/scheadule.webp";
function gridmember5() {
  return (
    <>
    <div className="bg-blue-600 text-white p-6 rounded-lg text-center flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Maintain the schedule</h1>
      <div>
        <h2 className="text-lg">Best time to Post</h2>
        <div className="mt-4 flex justify-center">
          <img
            src={image5}
            alt="Schedule posts"
            className="w-48 sm:w-32 md:w-40 lg:w-48 mt-4 object-contain"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default gridmember5