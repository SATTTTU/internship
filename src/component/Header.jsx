import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
function Header() {
  return (
    <>
      <h1 className="flex align-middle justify-center font">Header Section</h1>
      <nav className="flex gap-4  justify-center text-xs">
        <h1>NAvbar</h1>
        <Link to="/page1" className="hover:text-red-700 border-spacing-3 border-solid ">
          Page1
        </Link>
        <Link to="/page2" className="hover:text-red-700 border-spacing-3 border-solid">
          Page2
        </Link>
        <Link to="/page3" className="hover:text-red-700 border-spacing-3 border-solid">
          Page3
        </Link>
      </nav>
      <div>
        <Routes>
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </div>
    </>
  );
}

export default Header;
