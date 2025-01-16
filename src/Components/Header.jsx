import React, { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../App.css";
import { ThemeContext } from "../Hooks/Context";

function Header() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const appStyle = isDarkTheme
    ? {
        backgroundImage: "url('src/assets/bg-desktop-dark.jpg')",
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        color: "white",
      }
    : {
        backgroundImage: "url('src/assets/bg-desktop-light.jpg')",
        backgroundRepeat: "no-repeat",
        color: "black",
      };
  const iconClass = isDarkTheme ? "fa-solid fa-moon" : "fa-solid fa-sun";
  const cardcolor = isDarkTheme ? { backgroundColor: "#25273C" } : { backgroundColor: "white" };

  return (
    <>
      <div className="container">
        <div style={appStyle} className="relative w-full h-screen">
          <header className="p-4 flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4">
              <h1 className="text-white text-2xl">TODO</h1>
              <button onClick={toggleTheme} className="text-white">
                <i className={iconClass} />
              </button>
            </div>
          </header>
        </div>
      </div>
      <div style={appStyle}>
        <section style={cardcolor} className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 flex flex-col items-center rounded shadow-lg w-full max-w-md">
          <div className="mb-4 w-full">
            <input
              style={cardcolor}
              type="text"
              placeholder="Create a new todo file..."
              className="w-full p-2 border rounded"
            />
          </div>
          <ul className="w-full relative list-none">
            <li className="border p-2 flex items-center relative">
              <input type="checkbox" id="jog" className="mr-2" />
              <span className="flex-grow">Jog around</span>
              <div className="absolute right-2">
                <i className="fa-regular fa-circle-xmark" />
              </div>
            </li>
            <li className="border p-2 flex items-center relative">
              <input type="checkbox" id="meditation" className="mr-2" />
              <span className="flex-grow">Meditation</span>
              <div className="absolute right-2">
                <i className="fa-regular fa-circle-xmark" />
              </div>
            </li>
            <li className="border p-2 flex items-center relative">
              <input type="checkbox" id="football" className="mr-2" />
              <span className="flex-grow">Play football</span>
              <div className="absolute right-2">
                <i className="fa-regular fa-circle-xmark" />
              </div>
            </li>
          </ul>
          <section className="w-full mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap sm:space-x-4">
  
  <p className="text-sm sm:order-1">5 items left</p>

 
  <div className="flex flex-wrap justify-center space-x-2 mt-2 sm:mt-0 sm:flex-nowrap sm:space-x-4 sm:order-2">
    <button className="text-[#6B63DB] text-sm rounded hover:font-semibold">
      All
    </button>
    <button className="text-[#6B63DB] text-sm rounded hover:font-semibold">
      Active
    </button>
    <button className="text-[#6B63DB] text-sm rounded hover:font-semibold">
      Completed
    </button>
  </div>

  
  <button className="text-[#6B63DB] text-sm rounded hover:font-semibold sm:order-3 sm:ml-auto">
    Clear Completed
  </button>
</section>

          <section className="mt-4 text-center text-sm">Drag and Drop to reorder list</section>
        </section>
      </div>
    </>
  );
}

export default Header;