import React from "react";

const About = () => {
  return (
    <div name="about" className="  w-full h-screen bg-gray-800 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-800  hover:rotate-45%">
              about
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-2-[1000px] w-full grid sm:grid-cols-2 gap-8 xl-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p> hello, I am mahin,nice to met you .Please take a look around</p>
          </div>
          <div>
            <p>
              I am a junior programmer with proven skills in c++, javascript and
              python. Focused on keeping a tight architecture to minimize errors
              and bugs. Successfully designed and built several useful
              applications and IOS. Offering a strong foundation in software
              engineering and the newest knowledge within database management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
