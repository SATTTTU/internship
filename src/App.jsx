import React, { useContext } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";
import { ThemeContext } from "./Pages/Context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const appStyle = isDarkTheme
    ? { backgroundColor: "black", color: "green" }
    : { backgroundColor: "white", color: "black" };

  return (
    <div style={appStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            style={{
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={() => navigate(1)}
            style={{
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div>
          <button
            className="border-solid border-red-700 bg-red-700 text-white px-4 py-2 rounded"
            onClick={toggleTheme}
          >
            Change Theme
          </button>
          <p>{isDarkTheme ? "Dark Theme" : "Light Theme"}</p>
        </div>
      </div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;