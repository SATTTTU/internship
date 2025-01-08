import React from "react";
import "./App.css";
import image1 from "./assets/aicontent.webp";
import image2 from "./assets/fivestar.webp";
import image3 from "./assets/scheadulepost.webp";
import image5 from "./assets/scheadule.webp";
import image4 from "./assets/audiencegrowth.webp";
import image6 from "./assets/platforms.webp";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold mb-4">
              Create and Schedule Content <span className="italic">Quicker</span>
            </h1>
            <button className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition">
              Create Post
            </button>
          </div>

       
          <div className="bg-indigo-600 text-white p-6 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">
              Social Media <span className="italic">10X </span>faster with AI
            </h1>
            <img
              src={image2}
              alt="Five stars"
              className="w-48 sm:w-32 md:w-40 lg:w-48 mx-auto mb-2 object-contain"
            />
            <p>Over 40,000 5-star reviews</p>
          </div>

         
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
          </div>

       
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


          {/* Grid Member 6 */}
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

          {/* Grid Member 7 */}
          <div className="bg-red-600 text-white p-6 rounded-lg text-center md:col-span-3">
            <h1 className="text-4xl font-bold">&gt;56%</h1>
            <p className="mt-4">Faster audience growth</p>
            <ul className="flex justify-center mt-4">
              <li>
                <img
                  src={image4}
                  alt="Audience growth"
                  className="w-48 sm:w-32 md:w-40 lg:w-48 object-contain"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
