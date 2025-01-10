import React, { useContext } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";
import { ThemeContext } from "./Pages/Context";

function App() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const appStyle = isDarkTheme
    ? { backgroundColor: "black", color: "white" }
    : { backgroundColor: "white", color: "black" };

  return (
    <div style={appStyle}>
      <button onClick={toggleTheme}>Change Theme</button>
      <p>{isDarkTheme ? "Dark Theme" : "Light Theme"}</p>
      <Header />
      <Footer />
      
    </div>
  );
}

export default App;
