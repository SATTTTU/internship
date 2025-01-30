import React from 'react'
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import linkedin from "../assets/linkedin.png";
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
import Datas from '../Utils/Datas';

const Teams = () => {
    const teamMembers = [
        {
          id: 1,
          image: avatar1,
          name: "Jane Doe",
          role: "Director and Developer",
          description:
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
        },
        {
          id: 2,
          image: avatar2,
          name: "John Smith",
          role: "CEO and Founder",
          description:
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
        },
        {
          id: 3,
          image: avatar3,
          name: "Alice Johnson",
          role: "Marketing Strategist",
          description:
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
        },
        {
          id: 4,
          image: avatar4,
          name: "Michael Brown",
          role: "Content Specialist",
          description:
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
        },
        {
          id: 5,
          image: avatar5,
          name: "Emily Davis",
          role: "SEO Analyst",
          description:
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
        },
        {
          id: 6,
          image: avatar6,
          name: "David Wilson",
          role: "PPC Expert",
          description:
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
        },
      ];
  return (
    <>  <section className=" py-8 px-6  max-w-[1280px] m-auto">
    <Datas
     title="Teams"
      content="Meet the skilled and experienced team behind our successful digital marketing strategies"
    />
    {/* //teams */}
    <div className="max-w-[1280px] mx-auto px-10 py-10">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 ">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white px-10 py-10 border-b-4 border-1   relative rounded-3xl shadow-md  hover:shadow-lg transition-shadow duration-300 p-2"
          >
            {/* Image */}
            <div className="flex flex-row w-[317px] mb-5 ">
              {" "}
              <img
                src={member.image}
                alt={member.name}
                className="  object-cover"
              />
              {/* Name and Role */}
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">
                  {member.name}
                </p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>

            {/* Button (if needed) */}
            <button className="mt-4 px-4 py-2   rounded-lg absolute top-0 right-0">
              <Link>
                <img src={linkedin} alt="socialmedia" />
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="flex lg:justify-end w-full">
      <button
        className="px-4 py-3 text-sm lg:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300 w-full lg:w-auto lg:mr-10"
        aria-label="See all the team"
      >
        See all the team
      </button>
    </div>
  </section>
  <Testimonials/>
  </>
  )
}

export default Teams