import React from 'react'
import Btn from '../Utils/Btn'
import frame from "../assets/frame19.png";
import ExpandedItems from './ExpandedItems';
import Datas from '../Utils/Datas';
const CaseStudies = () => {
  return (
    <>
    <section className="flex flex-col lg:flex-row justify-center items-center max-w-[1280px] mx-auto px-6 sm:px-8 py-10">
      <div className="flex flex-col lg:flex-row bg-gray-100 rounded-2xl w-full shadow-lg overflow-hidden">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 text-center lg:text-left flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Let's make things happen
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button
            className="px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300 self-center lg:self-start"
            aria-label="Get Your Proposal"
          >
            Get Your Proposal
          </button>
        </div>
    
        {/* Right Image */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center p-4">
          <img
            src={frame}
            alt="Frame Illustration"
            className="object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </section>
    <section className=" py-8 px-6 max-w-[1280px] mx-auto">
    
      {/* Service Section */}
      <Datas
        title="Case Studies"
        content="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
    </section>
    
    <section className="bg-black rounded-2xl flex  flex-nowrap  justify-start lg:justify-between text-white p-6 sm:p-10 max-w-[1280px] mx-auto gap-6 w-full overflow-x-auto scrollbar-hide lg:overflow-x-hidden lg:max-w-[1280px]">
  {[
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className={` min-w-[80%] lg:min-w-0  lg:w-[32%] px-4 py-5 border-r-2 lg:border-b-0 ${
        index !== 2 ? "lg:border-r-2" : "lg:border-r-0"
      }`}
    >
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{item.text}</p>
      <button className="mt-4 flex items-center text-white hover:text-gray-300 transition-colors">
        <span className="mr-2 text-[#B9FF66]">Learn More</span>
        <Btn />
      </button>
    </div>
  ))}
</section>

    <ExpandedItems/>
    
    
    </>
  )
}

export default CaseStudies