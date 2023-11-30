import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className=" fixed flex w-full h-[80px] justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: "50px" }} />
      </div>
      {/* menu */}
      <div className=" hidden md:flex">
        <ul className=" hidden md:flex ">
          <li>home</li>
          <li>about</li>
          <li>skills</li>
          <li>work</li>
          <li>Contract</li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className=" py-6 text-3xl">home</li>
        <li className=" py-6 text-3xl">about</li>
        <li className=" py-6 text-3xl">skills</li>
        <li className=" py-6 text-3xl">work</li>
        <li className=" py-6 text-3xl">Contract</li>
      </ul>

      {/* social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navber;
