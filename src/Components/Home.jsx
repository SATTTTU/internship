import React from "react";
import hero from "../assets/illustration1.png";
import logo1 from "../assets/clogo1.png";
import logo2 from "../assets/clogo2.png";
import logo3 from "../assets/clogo3.png";
import logo4 from "../assets/clogo4.png";
import logo5 from "../assets/clogo5.png";
import logo6 from "../assets/clogo.png";
import illustrartion from "../assets/illustration2.png";
import illustrartion2 from "../assets/illustration3.png";
import illustrartion3 from "../assets/illustration4.png";
import illustrartion4 from "../assets/illustration5.png";
import illustrartion5 from "../assets/illustration6.png";
import illustration7 from "../assets/illustration7.png";
import frame from "../assets/frame19.png";

import Btn from "../Utils/Btn";

function Home() {
  const images = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
  ];

  const cards = [
    {
      title: "Search Engine Optimization",
      bgColor: "bg-gray-50",
      headingBg: "bg-[#B9FF66]",
      img: illustrartion,
    },
    {
      title: "Pay-Per-Click Advertising",
      bgColor: "bg-[#B9FF66]",
      headingBg: "bg-[white]",
      img: illustrartion2,
    },
    {
      title: "Social Media Marketing ",
      bgColor: "bg-[black]",
      headingBg: "bg-[white]",
      img: illustrartion3,
    },
    {
      title: "Email Marketing ",
      bgColor: "bg-[#B9FF66]",
      headingBg: "bg-[white]",
      img: illustrartion4,
    },
    {
      title: "Content Creation",
      bgColor: "bg-[green]",
      headingBg: "bg-[white]",
      img: illustrartion5,
    },
    {
      title: "Analytics and Tracking",
      bgColor: "bg-[black]",
      headingBg: "bg-[white]",
      img: illustration7,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className=" max-w-[1280px] m-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-gray-50">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Navigating the Digital Landscape for Success
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including
            <span className="font-medium text-gray-800"> SEO</span>,
            <span className="font-medium text-gray-800"> PPC</span>,
            <span className="font-medium text-gray-800">
              {" "}
              social media marketing
            </span>
            , and
            <span className="font-medium text-gray-800"> content creation</span>
            .
          </p>
          <button
            className="px-6 py-3 text-sm lg:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300"
            aria-label="Book a Full Consultation"
          >
            Book a Full Consultation
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={hero}
            alt="Hero Illustration"
            className="rounded-lg max-w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Logo Section */}
      <section className=" max-w-[1280px] m-auto px-6 py-10">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 gap-4 ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain"
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 max-w-[1280px] m-auto py-8 px-6">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
          <h2 className="font-semibold bg-[#B9FF66] text-gray-800 text-xl px-4 py-2 rounded-md flex items-center justify-center">
            Services
          </h2>
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-[1280px] m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-16 py-4 lg:px-6 lg:py-6">

  {cards.map((item, index) => (
    <div
      key={index}
      className={`flex ${item.bgColor} relative rounded-2xl border-2 border-b-4 border-black shadow-md lg:h-[310px] lg:w-[600px] h-[204px] w-[268px] `}
    >
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className={`text-2xl inline font-semibold ${item.headingBg} `}>
          <span className="px-1">{item.title}</span>
        </h3>
        <button className="flex items-center mt-4 space-x-2 text-black-500 hover:underline lg:absolute lg:bottom-6 lg:left-6">
          <Btn />
          <span className="hidden lg:block">Learn More</span>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={item.img}
          alt={`${item.title} Illustration`}
          className="object-cover rounded-md mr-10"
        />
      </div>
    </div>
  ))}
</div>
</section>






      <section className="flex flex-col lg:flex-row justify-center  max-w-[1280px] m-auto items-center px-8 py-10">
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-2xl w-full  ">
          <div className="w-full lg:w-1/2 p-6 text-center lg:text-left flex flex-col justify-center">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              Let's make things happen
            </h3>
            <p className="text-base lg:text-lg text-gray-600 mb-6">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button
              className="px-6 py-3 text-sm lg:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300 self-center lg:self-start"
              aria-label="Get Your Proposal"
            >
              Get Your Proposal
            </button>
          </div>

          <div className="hidden lg:block  ">
            <img
              src={frame}
              alt="Frame Illustration"
              className=" object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 px-6 max-w-[1280px] m-auto">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
          <h2 className="font-semibold inline bg-[#B9FF66] text-gray-800 text-xl p rounded-md  items-center justify-center">
            Case Studies
          </h2>
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </section>
      <section className="bg-black rounded-4xl flex flex-wrap justify-around text-white p-6 sm:p-10 max-w-[1280px] m-auto">
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-3 mb-8 sm:mb-6 border-b-2 lg:border-b-0   lg:border-r-2">
    <p className="text-sm sm:text-base lg:text-lg">
      For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
    </p>
    <button className="mt-4 flex items-center text-white hover:text-gray-300 transition-colors">
      <span className="mr-2">Learn More</span>
      <Btn />
    </button>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-3 mb-8 sm:mb-6 border-b-2 lg:border-b-0  lg:border-r-2"> 
    <p className="text-sm sm:text-base lg:text-lg">
      For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.
    </p>
    <button className="mt-4 flex items-center text-white hover:text-gray-300 transition-colors">
      <span className="mr-2">Learn More</span>
      <Btn />
    </button>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-3 mb-8 sm:mb-6">
    <p className="text-sm sm:text-base lg:text-lg">
      For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
    </p>
    <button className="mt-4 flex items-center text-white hover:text-gray-300 transition-colors">
      <span className="mr-2">Learn More</span>
      <Btn />
    </button>
  </div>
</section>

    </>
  );
}

export default Home;
