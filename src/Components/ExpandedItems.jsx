import React, { useState } from 'react'
// import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Teams from './Teams';
import Datas from '../Utils/Datas';
import plus from "../assets/plus.svg"
import minus from "../assets/minus.svg"
import { img } from 'framer-motion/client';

const ExpandedItems = () => {
    const [expandedItems, setExpandedItems] = useState({});
    
      const toggleDescription = (index) => {
        setExpandedItems((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };
    const data = [
        {
          id: "01",
          title: "Consultation",
          description:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
          id: "02",
          title: "Research and Strategy Development",
          description:
            "Our team will perform in-depth research and craft a customized marketing strategy tailored to your business needs.",
        },
        {
          id: "03",
          title: "Implementation",
          description:
            "We will implement the planned strategies, leveraging industry best practices to ensure maximum efficiency.",
        },
        {
          id: "04",
          title: "Monitoring and Optimization",
          description:
            "Our experts will monitor the performance of your campaigns and optimize them to achieve better results.",
        },
        {
          id: "05",
          title: "Reporting and Communication",
          description:
            "We will provide detailed reports and maintain transparent communication throughout the process.",
        },
        {
          id: "06",
          title: "Continual Improvement",
          description:
            "We continually analyze and improve your marketing strategies to keep your business ahead of the competition.",
        },
      ];
  return (
    <>
     <div className='mt-8'>
     <Datas
      title="Our Working Process"
      content="Step-by-Step Guide to Achieving Your Business Goals"
      
      />
     </div>
    <section className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-1 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col rounded-2xl border-1 border-b-4  p-6 lg:p-8 ${
            expandedItems[index] ? "bg-[#B9FF66]" : "bg-gray-100"
          } transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
  <h4 className="text-lg lg:text-xl font-semibold text-gray-800">
    {item.id} <span className="text-gray-500 pl-4">{item.title}</span>
  </h4>
  <button
    className="text-xl hover:text-black transition-colors duration-300"
    aria-label="Toggle Details"
    onClick={() => toggleDescription(index)}
  >
    <img src={expandedItems[index] ? minus : plus} alt="Toggle Icon" />
  </button>
</div>

    
          {/* Description */}
          {expandedItems[index] && (
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed mt-2">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </section>
    <Teams/>
    </>
  )
}

export default ExpandedItems