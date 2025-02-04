import React, { useState } from 'react';
import brix_image from '../assets/logo.svg';

const Header = () => {

  return (
    <header className="max-w-[1280px] m-auto bg-white p-8">
      <section className="flex justify-between items-center ">
        <img src={brix_image} alt="Brix Templates Logo" className="h-8" />
        <button className="px-6 py-2 text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800">Clone now</button>
      </section>
      <section className="text-center mb-10 p-8">
        <h1 className="text-3xl font-bold mb-4">Get a project quote</h1>
        <p className="text-gray-600">Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
      </section>
       
       

    </header>
  );
};

export default Header;
