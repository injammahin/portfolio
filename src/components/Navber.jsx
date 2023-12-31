import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import Sound from "../assets/m1.mp3";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaVoicemail,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navber = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  function play() {
    new Audio(Sound).play();
  }

  return (
    <div className=" fixed flex w-full h-[60px] justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: "60px" }} />
      </div>
      {/* menu */}
      <div className=" hidden md:flex">
        <ul className="c hidden md:flex ">
          <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 ">
            <Link to="home" onClick={play} spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 ">
            <Link to="about" onClick={play} spy={true} smooth={true}>
              about
            </Link>
          </li>
          <li className=" custom  hover:scale-x-150 hover:scale-y-150 duration-500 ">
            <Link to="skills" onClick={play} spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 ">
            <Link to="work" onClick={play} spy={true} smooth={true}>
              Work
            </Link>
          </li>
          <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 ">
            <Link to="contract" onClick={play} spy={true} smooth={true}>
              Contract
            </Link>
          </li>
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
        <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 py-6 ">
          <Link onClick={handleClick} to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 py-6 ">
          <Link onClick={handleClick} to="about" spy={true} smooth={true}>
            about
          </Link>
        </li>
        <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 py-6 ">
          <Link onClick={handleClick} to="skills" spy={true} smooth={true}>
            Skills
          </Link>
        </li>
        <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 py-6 ">
          <Link onClick={handleClick} to="skills" spy={true} smooth={true}>
            Skills
          </Link>
        </li>
        <li className="custom hover:scale-x-150 hover:scale-y-150 duration-500 py-6 ">
          <Link onClick={handleClick} to="contract" spy={true} smooth={true}>
            Contract
          </Link>
        </li>
      </ul>

      {/* social icons */}
      {/* linkedin */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/mahin-nur-89063820a/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          {/* github */}
          <li className="w-[150px] h-[50px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/injammahin"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900">
            <a className="flex justify-between items-center w-full" href="/">
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full" href="/">
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
