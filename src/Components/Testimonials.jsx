import React from 'react';
import TestimonialsCarousel from './Slider';
import ContactUs from './ContactUs';
import Datas from '../Utils/Datas';

const Testimonials = () => {
  return (
    <>
      <section className="max-w-[1280px] w-full px-4 sm:px-6 lg:px-8 mx-auto mb-16">
        <Datas
          title="Testimonials"
          content="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <section className="mt-6 w-full pb-12">
          <TestimonialsCarousel />
        </section>
      </section>
      <ContactUs />
    </>
  );
};

export default Testimonials;
