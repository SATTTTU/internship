import React, { useContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../App.css";
import { ThemeContext } from "../Hooks/Context";
import { toast } from "react-toastify";

function Header() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [newtask, setNewtask] = useState("");
  const [status, setStatus] = useState("all");

  // static lists of tasks
  const [tasks, setTasks] = useState([
    { id: 1, label: "Jog around", status: "active" },
    { id: 2, label: "Meditation", status: "active" },
    { id: 3, label: "Play football", status: "active" },
    { id: 4, label: "Singing song", status: "active" },
    { id: 5, label: "Play cricket", status: "active" },
    { id: 6, label: "Run", status: "active" },
    { id: 7, label: "Read Books", status: "active" },
  ]);
  // for  showing the tasks based on the status
  const filteredTasks =
    status === "all"
      ? tasks
      : status === "active"
      ? tasks.filter((task) => !checkedTasks[task.id])
      : tasks.filter((task) => checkedTasks[task.id]);
  // for handling the checkbox change
  const handleCheckboxChange = (taskId) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: checkedTasks[taskId] ? "active" : "completed" }
          : task
      )
    );
  };

  // for adding the task
  const AddTask = (e) => {
    if (e.key === "Enter") {
      if (checkedTasks["new"]) {
        const newTask = {
          id: Date.now(),
          label: newtask,
          status: "active",
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);

        setCheckedTasks((prev) => ({
          ...prev,
          [newTask.id]: false,
        }));
        setNewtask("");
        toast.success("Task added successfully");
      }
    }
  };
  // for clearing the completed tasks
  const clearCompletedTasks = () => {
    const remainingTasks = tasks.filter((task) => !checkedTasks[task.id]);
    setTasks(remainingTasks);
    setCheckedTasks({});
  
    if (remainingTasks.length < tasks.length) {
      toast.success("Tasks cleared successfully");
    } else {
      toast.info("No tasks to clear");
    }
  };
  
  // for handling the status of the tasks
  const deleteTask = (id) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
    toast.success("Task deleted successfully");
  };
  const taskCounts = {
    all: tasks.length,
    active: tasks.filter((task) => task.status === "active").length,
    completed: tasks.filter((task) => task.status === "completed").length,
  };
  // for changing the status of the tasks
  const taskStatus = ["All", "Active", "Completed"];
  // for changing the theme of the app
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
  // for changing the icon of the theme conditionally
  const iconClass = isDarkTheme ? "fa-solid fa-moon" : "fa-solid fa-sun";
  // for changing the card style conditionally
  const cardStyle = isDarkTheme
    ? "bg-gray-700 text-white"
    : "bg-white text-black";

  const data = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      className="cursor-pointer mr-4"
    >
      <path
        style={appStyle}
        className="fill-[#494C6B] group-hover:fill-gray-300"
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  );

  return (
    <>
      {/* {// for the main div} */}
      <div
        className={`h-[100vh] ${
          isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        {/* {// for the header} */}
        <div
          style={appStyle}
          className="relative w-full h-[calc(100vh-60%)] bg-cover bg-center"
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
        {/* {// for the main div} */}
        <div className={`px-4 py-4 ${cardStyle}`}>
          <div className="relative top-[-150px] mx-auto w-full max-w-lg">
            {/* {// for the input field} */}
            <div
              className={`rounded-lg mb-2 p-1 flex items-center ${cardStyle}`}
            >
              <div
                className={`ml-4 flex items-center justify-center border w-6 h-6  rounded-full cursor-pointer ${
                  checkedTasks["new"]
                    ? "bg-blue-500 border-blue-500"
                    : "bg-white border-gray-300"
                }`}
                onClick={() => handleCheckboxChange("new")}
                role="checkbox"
                aria-checked={checkedTasks["new"]}
              >
                {checkedTasks["new"] && (
                  <i className="fa-solid fa-check text-white "></i>
                )}
              </div>

              <input
                type="text"
                placeholder="Create a new todo..."
                className={`w-full p-3 rounded focus:outline-none ${cardStyle}`}
                value={newtask}
                onChange={(e) => setNewtask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newtask.trim() !== "") {
                    AddTask(e);
                  }
                }}
              />
            </div>
          </div>
          {/* {// for the list of tasks} */}
          <section className="relative top-[-100px] mx-auto w-full max-w-lg">
            <div className={`p-6 rounded-lg shadow-lg ${cardStyle}`}>
              <ul className="space-y-4 max-h-[300px] overflow-y-scroll lg:space-y-4 scrollbar-thin">
                {filteredTasks.map((task) => (
                  <li
                    onClick={() => handleCheckboxChange(task.id)}
                    key={task.id}
                    className="flex items-center justify-between border-b border-gray-600 pb-2 group"
                  >
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center border border-gray-500 w-6 h-6 rounded-full cursor-pointer ${
                          checkedTasks[task.id]
                            ? "bg-blue-500 border-blue-500 "
                            : "bg-white border-gray-00"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCheckboxChange(task.id);
                        }}
                        role="checkbox"
                        aria-checked={checkedTasks[task.id]}
                      >
                        {checkedTasks[task.id] && (
                          <i className="fa-solid fa-check rounded-full text-white"></i>
                        )}
                      </div>
                      <label
                        htmlFor={task.id}
                        className={`cursor-pointer p-1 ml-2 ${
                          checkedTasks[task.id]
                            ? "line-through text-gray-500"
                            : "border-gray-200"
                        }`}
                      >
                        {task.label}
                      </label>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="group hidden group-hover:block lg:group-hover:block mr-2"
                    >
                      {data}
                    </button>
                  </li>
                ))}
              </ul>
              {/* // for the footer */}
              <div className="lg:flex lg:items-center lg:justify-between mt-4 flex items-center justify-between">
                <div className="lg:order-1">
                  <p className="text-sm">
                    <span className="p-1 font-semibold">
                      {taskCounts[status]}
                    </span>
                    items left
                  </p>
                </div>
                <div className="flex justify-center space-x-4 p-2 sm:shadow-sm lg:order-2">
                  {taskStatus.map((value) => (
                    <button
                      key={value}
                      onClick={() => {
                        setStatus(value.toLocaleLowerCase());
                      }}
                      className={` text-sm hover:font-semibold hidden lg:block   ${
                        status === value.toLocaleLowerCase()
                          ? "font-semibold text-blue-500"
                          : "text-black-50"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                <div className="lg:order-3">
                  <button
                    onClick={clearCompletedTasks}
                    className="text-blue-500 text-sm hover:font-semibold"
                  >
                    Clear Completed
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center space-x-4 p-2 shadow items-center mt-2 lg:order-2 lg:hidden">
                {taskStatus.map((value) => (
                  <button
                    key={value}
                    onClick={() => {
                      setStatus(value.toLocaleLowerCase());
                    }}
                    className={` text-sm hover:font-semibold   ${
                      status === value.toLocaleLowerCase()
                        ? "font-semibold text-blue-500"
                        : "text-black-50"
                    }`}
                  >
                    {value}
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
