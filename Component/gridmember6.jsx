import React from 'react'
import image6 from '../src/assets/followgrowth.webp';
function gridmember6() {
  return (
    <>
     <div className="bg-lime-500 text-white p-6 rounded-lg text-center flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Follower Growth</h1>
                <ul className="space-y-2">
                  <li></li>
                  <li>
                    <h1 className="text-4xl font-bold">+490%</h1>
                  </li>
                </ul>
                <img
                  src={image6}
                  alt="Multiple platforms"
                  className="w-48 sm:w-32 md:w-40 lg:w-48 mt-4 object-contain"
                />
                <div className="mt-4">Grow followers with non-stop content</div>
              </div>
    </>
  )
}

export default gridmember6