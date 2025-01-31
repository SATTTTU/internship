import React from 'react';
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
        { id: 1, image: avatar1, name: "Jane Doe", role: "Director and Developer", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy." },
        { id: 2, image: avatar2, name: "John Smith", role: "CEO and Founder", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy." },
        { id: 3, image: avatar3, name: "Alice Johnson", role: "Marketing Strategist", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy." },
        { id: 4, image: avatar4, name: "Michael Brown", role: "Content Specialist", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy." },
        { id: 5, image: avatar5, name: "Emily Davis", role: "SEO Analyst", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy." },
        { id: 6, image: avatar6, name: "David Wilson", role: "PPC Expert", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy." },
    ];

    return (
        <>  
            <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Datas title="Teams" content="Meet the skilled and experienced team behind our successful digital marketing strategies" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white p-6 border-b-black border-b-4 border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            {/* Image & Name */}
                            <div className="flex items-center space-x-4 mb-4">
                                <img src={member.image} alt={member.name} className="w-16 h-16 object-cover rounded-full" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{member.name}</p>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                </div>
                            </div>
                            
                            {/* Description */}
                            <p className="text-sm text-gray-600">{member.description}</p>
                            
                            {/* LinkedIn Button */}
                            <div className="mt-4 flex justify-end">
                                <Link>
                                    <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center lg:justify-end mt-6">
                    <button className="px-5 py-3 text-sm lg:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300 w-full sm:w-auto">
                        See all the team
                    </button>
                </div>
            </section>
            
            <Testimonials/>
        </>
    );
};

export default Teams;
