import React from "react";
import { Link } from "react-router-dom";
import { LiaFacebook, LiaLinkedin, LiaTwitter } from "react-icons/lia";

function Footer() {
  return (
    <footer className="bg-black text-white max-w-[1280px] mx-auto py-20 px-10 m-10 rounded-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Logo Section */}
        <Link to="/aboutus" className="text-white text-2xl font-bold mb-6 lg:mb-0">
          Positivus
        </Link>

        {/* Navigation Links */}
        <nav className="mb-6 lg:mb-0">
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 text-sm lg:underline decoration-0">
            {["About us", "Services", "Use Cases", "Pricing", "Blog"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "")}`} className="hover:text-[#B9FF66]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <ul className="hidden lg:flex gap-4">
          {[
            { icon: <LiaLinkedin size={24} />, link: "https://linkedin.com" },
            { icon: <LiaFacebook size={24} />, link: "https://facebook.com" },
            { icon: <LiaTwitter size={24} />, link: "https://twitter.com" },
          ].map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FF66]">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact & Subscription */}
      <div className="mb-8 pt-6 border-b border-gray-600 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="text-center lg:text-left">
          <p className="font-semibold">Contact us:</p>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p className="flex flex-col">
            Address: 1234 Main St, Moonstone City, <span>Stardust State 12345</span>
          </p>
        </div>

        <form className="flex flex-col lg:flex-row gap-4 bg-[#292A32] p-5 rounded-2xl shadow-lg">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl border border-white text-black"
          />
          <button type="submit" className="bg-[#B9FF66] px-5 py-3 rounded-xl text-sm font-semibold text-black">
            Subscribe
          </button>
        </form>

        {/* Social Media Icons for Mobile */}
        <ul className="flex gap-4 lg:hidden">
          {[
            { icon: <LiaLinkedin size={24} />, link: "https://linkedin.com" },
            { icon: <LiaFacebook size={24} />, link: "https://facebook.com" },
            { icon: <LiaTwitter size={24} />, link: "https://twitter.com" },
          ].map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FF66]">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-col lg:flex-row justify-around items-center text-sm">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <Link to="/privacy-policy" className="hover:text-[#B9FF66]">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
