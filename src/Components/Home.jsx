import React, { useState } from "react";
import hero from "../assets/illustration1.png";
import logo1 from "../assets/clogo1.png";
import logo2 from "../assets/clogo2.png";
import logo3 from "../assets/clogo3.png";
import logo4 from "../assets/clogo4.png";
import logo5 from "../assets/clogo5.png";
import logo6 from "../assets/clogo.png";
import Services from "./Services";
function Home() {
  const images = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 bg-gray-50">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="block">Navigating the</span>
            <span className="block">Digital Landscape</span>
            <span className="block">for Success</span>
          </h1>

          
          <div className="mb-6 lg:hidden w-full">
            <img
              src={hero}
              alt="Hero Illustration"
              className="rounded-lg mx-auto max-w-[90%] sm:max-w-[75%]"
              loading="lazy"
            />
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Our digital marketing agency helps businesses grow online. We
            specialize in SEO, PPC, social media marketing, and content
            creation.
          </p>

          <button
            className="px-6 py-3 text-sm md:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300"
            aria-label="Book a Full Consultation"
          >
            Book a Full Consultation
          </button>
        </div>

        {/* Desktop Image */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-end">
          <img
            src={hero}
            alt="Hero Illustration"
            className="rounded-lg max-w-[90%] sm:max-w-[75%]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Logo Section */}
  <marquee behavior="" direction="">
  <section className=" max-w-[1280px] m-auto px-6 py-10">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 gap-4 ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className=" h-auto object-contain filter grayscale-100"
            />
          ))}
        </div>
      </section>
  </marquee>
      <Services />
    </>
  );
}

export default Home;
