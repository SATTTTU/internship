import React from 'react';
import brix_image from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="text-white py-8 max-w-[1280px] m-auto">
      <section className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <img src={brix_image} alt="Brix Templates Logo" className="h-10 mx-auto md:mx-0 mb-4" />
          <p className="text-gray-400 text-sm">
            Copyright © 2021 BRIX Templates | All Rights Reserved
          </p>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full md:w-auto shadow-lg">
          <form action="#" className="flex items-center">
            <label htmlFor="email" className="sr-only">Enter your email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-2 w-full md:w-64 border-0 rounded-l-lg  text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-r-lg transition">
              Subscribe
            </button>
          </form>
        </div>

      </section>
    </footer>
  );
};

export default Footer;
