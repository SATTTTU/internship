import React, { useContext } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";
import { ThemeContext } from "./Pages/Context";

function App() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const appStyle = isDarkTheme
    ? { backgroundColor: "black", color: "green" }
    : { backgroundColor: "white", color: "black" };

  return (
    <div style={appStyle}>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <button
          className="border-solid border-red-700 bg-red-700 text-white px-4 py-2 rounded"
          onClick={toggleTheme}
        >
          Change Theme
        </button>
        <p>{isDarkTheme ? "Dark Theme" : "Light Theme"}</p>
      </div>
      
      <Header />
      <Footer />
    </div>
  );
}

export default App;
