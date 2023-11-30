import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const HomeBar = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-800">
      {/* containter */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Mahin Nur
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I,m a full stack developer
        </h2>
        <p className="text-white py-4 max-w[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi
          dolor, ipsa non, repudiandae asperiores ad odio rem ab rerum
          voluptatum cupiditate possimus recusandae ducimus natus corrupti!
          Pariatur temporibus perferendis voluptas fuga voluptate accusantium,
          laboriosam laudantium quod voluptatibus quas a dolorem repellendus.
          Repudiandae soluta ullam aspernatur asperiores placeat maxime
          dignissimos.
        </p>

        <div>
          <button className=" text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBar;
