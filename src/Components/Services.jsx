import React from 'react'
import Btn from '../Utils/Btn'
import illustrartion from "../assets/illustration2.png";
import illustrartion2 from "../assets/illustration3.png";
import illustrartion3 from "../assets/illustration4.png";
import illustrartion4 from "../assets/illustration5.png";
import illustrartion5 from "../assets/illustration6.png";
import illustration7 from "../assets/illustration7.png";
import CaseStudies from './CaseStudies';
import Datas from '../Utils/Datas';
const Services = () => {
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
    
    <Datas
      title="Services"
      content="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
          {/* Cards Section */}
          <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`flex ${item.bgColor} relative rounded-2xl border-2 border-b-4 border-black shadow-md w-full max-w-[600px] h-auto lg:h-[310px] p-4`}
          >
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl sm:text-2xl font-semibold">
                <span className={`${item.headingBg}`}>{item.title}</span>
              </h3>
    
              <button className="flex items-center mt-4 space-x-2 text-black-500 hover:underline hover:bg-white transition duration-200 lg:absolute lg:bottom-6 lg:left-6">
                <Btn />
                <span className="hidden lg:block">Learn More</span>
              </button>
            </div>
            <div className="flex justify-center items-center w-1/3">
              <img
                src={item.img}
                alt={`${item.title} Illustration`}
                className="object-cover rounded-md w-full max-w-[100px] sm:max-w-[150px] lg:max-w-none lg:mr-10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    <CaseStudies/>
    
    </>
  )
}

export default Services