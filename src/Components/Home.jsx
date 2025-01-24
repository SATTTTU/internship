import React from 'react';
import hero from '../assets/illustration1.png';
import logo1 from "../assets/clogo1.png"
import logo2 from "../assets/clogo2.png"
import logo3 from "../assets/clogo3.png"
import logo4 from "../assets/clogo4.png"
import logo5 from "../assets/clogo5.png"

function Home() {
    const images = [
        { src: logo1, alt: 'Logo 1' },
        { src: logo2, alt: 'Logo 2' },
        { src: logo3, alt: 'Logo 3' },
        { src: logo4, alt: 'Logo 4' },
        { src: logo5, alt: 'Logo 5' }
      ];
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-gray-50">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Navigating the Digital Landscape for Success
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including 
            <span className="font-medium text-gray-800"> SEO</span>, 
            <span className="font-medium text-gray-800"> PPC</span>, 
            <span className="font-medium text-gray-800"> social media marketing</span>, and 
            <span className="font-medium text-gray-800"> content creation</span>.
          </p>
          <div>
            <button
              className="px-6 py-3 text-sm lg:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300"
              aria-label="Book a Full Consultation"
            >
              Book a Full Consultation
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={hero}
            alt="Hero Illustration"
            className="rounded-lg max-w-full"
            loading="lazy"
          />
        </div>
        
      </section>
      <section className='px-20 py-12'>
      <div className="flex justify-between space-x-6">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-14  h-16 object-contain lg:w-[1/5]"
        />
      ))}
    </div>
      </section>
      <section>
        <div><h1>
          Services</h1> </div>
      </section>
 
    </>
  );
}

export default Home;