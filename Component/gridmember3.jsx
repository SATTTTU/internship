import React from 'react'
import image1 from "../src/assets/aicontent.webp";
function gridmember3() {
  return (
    <>
    <div className="bg-teal-500 text-white p-6 rounded-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Write your content using AI</h1>
                <div className="flex flex-col items-center">
                  <p>Give me some tips</p>
                  <img
                    src={image1}
                    alt="Audience growth"
                    className="w-48 sm:w-32 md:w-40 lg:w-48 mt-4 object-contain"
                  />
                </div>
              </div></>
  )
}

export default gridmember3