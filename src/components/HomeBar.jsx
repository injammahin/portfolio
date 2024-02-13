import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpeg";

const HomeBar = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-800 flex">
      {/* Left Container */}
      <div className="  max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="my-[100px]">
          <p className="text-pink-600">Hi, my name is </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
            Mahin Nur
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
            I'm a full stack developer
          </h2>
          <p className="text-white py-4 max-w-[700px]">
            I am a junior programmer with proven skills in c++, javascript and
            python. Focused on keeping a tight architecture to minimize errors
            and bugs. Successfully designed and built several useful
            applications and IOS. Offering a strong foundation in software
            engineering and the newest knowledge within database management.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Container */}

      <div className=" hidden md:flex   flex-col justify-end mx-auto my-64">
        <div className="w-96 rounded-full mx-auto">
          <img
            className=" shadow-xl hover:shadow-[#6fbbbb] hover:scale-110 duration-300 rounded-full"
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBar;
