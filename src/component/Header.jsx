import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page4 from "../Pages/Page4";
import Categories from "../Pages/Categories";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Header Section</h1>
        <nav className="flex justify-center gap-4 py-2">
          <Link to="/page1" className="hover:text-red-700 px-3 py-2 rounded-md">
            Page1
          </Link>
          <Link to="/page2" className="hover:text-red-700 px-3 py-2 rounded-md">
            Page2
          </Link>
          <Link to="/page3" className="hover:text-red-700 px-3 py-2 rounded-md">
            Page3
          </Link>
          <Link to="/page4" className="hover:text-red-700 px-3 py-2 rounded-md">
            Page4
          </Link>
        </nav>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/categories/:cid" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default Header;