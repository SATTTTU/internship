import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

function CustomSlider({ settings, children }) {
  return <Slider {...settings}>{children}</Slider>;
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        zIndex: 100,
        top: "110%",
        right: "10%",
        transform: "translateY(-50%)",
        
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        zIndex: 100,
        top: "110%",
        left: "10%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
}

const testimonialsData = [
  {
    id: 1,
    quote:
      "I am amazed at the results Positivus has delivered. Our ROI has significantly improved, and we are thrilled with the partnership.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    quote:
      "Positivus transformed our business strategy. Their expertise is unmatched!",
    name: "Sarah Smith",
    title: "CEO at Bright Marketing",
  },
  {
    id: 3,
    quote:
      "Their team is fantastic! The insights provided have greatly influenced our growth.",
    name: "Emily Davis",
    title: "Head of Digital Strategy at ABC Ltd.",
  },
  {
    id: 4,
    quote: "Exceptional service and amazing results! Highly recommended.",
    name: "Michael Brown",
    title: "Business Owner at LocalTech Solutions",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    customPaging: function (i) {
      return (
        <PiStarFourFill
          className={`h-4 w-4 md:h-6 md:w-6 absolute -bottom-5 rotate-45 ${
            i === activeIndex ? "text-[#B9FF66]" : "text-gray-200"
          }`}
        />
      );
    },
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    MdPadding:"10%",
    centerPadding: "10%",
    slidesToShow: 1.5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
   
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0%",
          centerMode: false,
          slidesToShow: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col justify-center items-center bg-gray-950 px-4 py-20 rounded">
      <div className="w-full">
        <CustomSlider settings={settings}>
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="!flex flex-col lg:!inline-block items-center"
            >
              <div className="relative  w-72 lg:w-120 md:w-96 text-white p-10 rounded-xl border border-lime-400 text-center bg-gray-800">
                <p className="text-base font-light md:text-lg">
                  {testimonial.quote}
                </p>
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-gray-800 -rotate-45 border-l border-b border-lime-400" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lime-400 font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
    </section>
  );
};

export default Testimonials;
