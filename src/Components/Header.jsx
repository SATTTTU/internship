import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Route, Routes } from "react-router-dom";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md max-w-[1280px] m-auto  ">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div>
           <Link to="/aboutus"> <img src={logo} alt="logo" className="w-24" /></Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>

          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center lg:gap-10 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-4 lg:px-0 shadow-lg lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 text-gray-800 text-sm">
              <Link
                to="/aboutus"
                className="hover:bg-[#B9FF66] px-2 py-2 font-semibold"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:bg-[#B9FF66] px-2 py-2 font-semibold"
              >
                Services
              </Link>
              <Link
                to="/usecases"
                className="hover:bg-[#B9FF66] px-2 py-2 font-semibold"
              >
                Use Cases
              </Link>
              <Link
                to="/pricing"
                className="hover:bg-[#B9FF66] px-2 py-2 font-semibold"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="hover:bg-[#B9FF66] px-2 py-2 font-semibold"
              >
                Blog
              </Link>
            </ul>
            <button className="mt-4 lg:mt-0 border  hover:bg-[#B9FF66] px-3 py-2 rounded  hover:text-white transition">
              Request a Quote
            </button>
          </nav>
        </div>
      </header>
   
    </>
  );
}

export default Header;
