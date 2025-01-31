import React, { useRef } from "react";
import illustration8 from "../assets/illustrsttion.png";
import Datas from "../Utils/Datas";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o5xafed", 
        "template_wurc45d", 
        form.current,
        "JeSeqrUVhizEVbO9L" ,
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          alert("Email Sent!");
        },
        (error) => {
          console.log("Failed to send email", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <section className="max-w-[1280px] m-auto">
        <Datas
          title="Contact Us"
          content="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
      </section>
      <section className="rounded-2xl max-w-[1280px] mx-auto px-6 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100 relative shadow-md rounded-2xl">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 p-6 rounded-lg  "
          >
            <fieldset>
              {/* Radio Buttons */}
              <div className="flex gap-4">
              <input
                    type="radio"
                    name="purpose"
                    value="say_hi"
                    className="scale-150 me-1"
                    required
                  />
                <label className="flex items-center space-x-2 p-1 font-semibold ">
                
                  Say Hi
                </label>
               
                <input
                    type="radio"
                    name="purpose"
                    value="business_inquiry"
                    className="scale-150 me-1"
                    required
                  />
                <label className="flex items-center space-x-2  font-semibold">
                 
                  Get a Quote
                </label>
              </div>

              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium pt-6">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border p-2 rounded-[14px]"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium pt-6">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border p-2 rounded-[14px]"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label htmlFor="message" className="font-medium pt-6">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="border p-2 rounded-[14px]"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex lg:justify-end m-4">
                <button
                  type="submit"
                  className="px-4 py-3 mt-10 text-sm lg:text-base font-medium rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300 w-full"
                  aria-label="Send a Message"
                >
                  Send a Message
                </button>
              </div>
            </fieldset>
          </form>

          {/* Image */}
          <div className="absolute top-0 -right-[970px] w-full h-full overflow-hidden justify-center items-center pointer-events-none hidden lg:block">
            <img
              src={illustration8}
              alt="Illustration"
              className="w-[491px] max-w-[500px] h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
