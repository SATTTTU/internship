import React, { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../App.css";
import { ThemeContext } from "../Hooks/Context";

function Header() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const data = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      className="cursor-pointer"
    >
      <path
        className="fill-[#494C6B] group-hover:fill-white"
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  );

  const tasks = [
    { id: "jog", label: "Jog around" },
    { id: "meditation", label: "Meditation" },
    { id: "football", label: "Play football" },
    { id: "song", label: "singing song " },
    { id: "play", label: "Play cricket " },
    { id: "run", label: "Run" },
    { id: "books", label: "Read Books" },
  ];

  const taskStatus = ["All", "Active", "Completed"];
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

  const cardStyle = isDarkTheme
    ? "bg-gray-700 text-white"
    : "bg-white text-black";

  return (
    <>
      <div
        className={`h-[100vh] ${
          isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div
          style={appStyle}
          className="relative w-full h-[calc(100vh-40%)] bg-cover bg-center"
        >
          <header className="absolute top-0 left-0 w-full p-6">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold tracking-widest">TODO</h1>
              <button
                onClick={toggleTheme}
                className="text-xl focus:outline-none"
              >
                <i className={iconClass}></i>
              </button>
            </div>
          </header>
        </div>

        <div className={`px-4 py-4  ${cardStyle}`}>

          <div className="relative top-[-150px] mx-auto w-full max-w-lg">
            <div className={`rounded-lg mb-2 p-1 ${cardStyle}`}>
              <input
                type="text"
                placeholder="Create a new todo..."
                className={`w-full p-3 rounded focus:outline-none ${cardStyle}`}
              />
            </div>
          </div>

          <section className="relative top-[-100px] mx-auto w-full max-w-lg">
            <div className={`p-6 rounded-lg shadow-lg ${cardStyle}`}>
              <ul className="space-y-4 max-h-[300px] overflow-y-auto">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between border-b border-gray-600 pb-2"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={task.id}
                        className="mr-2 cursor-pointer"
                      />
                      <label htmlFor={task.id} className="cursor-pointer p-1">
                        {task.label}
                      </label>
                    </div>
                    <button className="group">{data}</button>
                  </li>
                ))}
              </ul>

              <div className="lg:flex lg:items-center lg:justify-between mt-4 flex items-center justify-between">
                <div className="lg:order-1">
                  <p className="text-sm">3 items left</p>
                </div>
                <div className="flex justify-center space-x-4 p-2 sm:shadow-sm lg:order-2 ">
                  {taskStatus.map((status, index) => (
                    <button
                      key={index}
                      className="text-blue-500 text-sm hover:font-semibold hidden lg:block"
                    >
                      {status}
                    </button>
                  ))}
                </div>
                <div className="lg:order-3">
                  <button className="text-blue-500 text-sm hover:font-semibold">
                    Clear Completed
                  </button>
                </div>
              </div>
                
           
            </div>
            <div>
                  <div className="flex justify-center space-x-4 p-2 shadow   items-center mt-2 lg:order-2 lg:hidden">
                  {taskStatus.map((status, index) => (
                    <button
                      key={index}
                      className="text-blue-500 text-sm hover:font-semibold"
                    >
                      {status}
                    </button>
                  ))}
                </div>
                  </div>
            <p className="mt-4 text-center text-sm">
                Drag and Drop to reorder list
              </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Header;