import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

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
        right: window.innerWidth < 768 ? "10%" : "32%",
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
        left: window.innerWidth < 768 ? "10%" : "32%",

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
      "I am amazed at the results Positivus has delivered. Our ROI has significantly improved, and we are thrilled with the partnership.",
    name: "Sarah Smith",
    title: "CEO at Bright Marketing",
  },
  {
    id: 3,
    quote:
      "I am amazed at the results Positivus has delivered. Our ROI has significantly improved, and we are thrilled with the partnership.",
    name: "Emily Davis",
    title: "Head of Digital Strategy at ABC Ltd.",
  },
  {
    id: 4,
    quote:
      "I am amazed at the results Positivus has delivered. Our ROI has significantly improved, and we are thrilled with the partnership.",
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
          className={`h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px] absolute -bottom-5 rotate-45 ${
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
    className: "center",
    centerMode: true,
    centerPadding: window.innerWidth < 768 ? "0px" : "260px",
    slidesToShow: 1.7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          centerPadding: "5%",
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          centerPadding: "0", // No padding for compact screens
          slidesToShow: 1, // Show one slide at a time
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col justify-center items-center bg-gray-950 px-4 py-10 rounded">
      <div className="w-full">
        <Slider {...settings} className="text-white py-2 rounded-lg">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center">
              {/* Testimonial Card */}
              <div className="relative items-center w-72 md:w-96 text-white p-10 rounded-xl border border-lime-400 text-center bg-gray-800">
                <p className="text-base font-light md:text-lg">{testimonial.quote}</p>
                {/* Conversation Tail Positioned to Bottom Left */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-gray-800 -rotate-45 border-l border-b border-lime-400" />
              </div>

              {/* Name & Title */}
              <div className="mt-4 text-center">
                <p className="text-lime-400 font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
