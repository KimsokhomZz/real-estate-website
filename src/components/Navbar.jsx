import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  useEffect(() => {
    if (showMenuIcon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenuIcon]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo image" />
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#Header"
            className="cursor-pointer relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D96C30] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a href="#About" className="cursor-pointer relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D96C30] after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
          <a href="#Projects" className="cursor-pointer relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D96C30] after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer relative hover:text-gray-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D96C30] after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full hover:bg-[#D96C30] hover:text-white transition duration-300 cursor-pointer">
          Sign up
        </button>
        <img
          onClick={() => setShowMenuIcon(!showMenuIcon)}
          src={assets.menu_icon}
          alt="menu icon"
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      {/* -------- mobile-mune -------- */}
      <div
        className={`md:hidden ${
          showMenuIcon ? "w-full fixed" : "h-0 w-0"
        } top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMenuIcon(!showMenuIcon)}
            src={assets.cross_icon}
            alt="cross icon"
            className="w-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMenuIcon(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMenuIcon(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMenuIcon(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMenuIcon(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
