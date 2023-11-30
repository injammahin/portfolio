import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-800 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-800 ">
              about
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-2-[1000px] w-full grid sm:grid-cols-2 gap-8 xl-4">
          <div className="sm:text-right text-4xl font-bold">
            <p> hello, I am mahin,nice to met you .Please take a look around</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nihil laboriosam sapiente atque fugiat! Corporis porro recusandae
              corrupti accusantium delectus molestiae eum nulla perspiciatis
              quasi ullam repellendus, quaerat ratione pariatur qui modi quod?
              Reiciendis quos cumque voluptate sit rerum sequi delectus
              molestiae veniam libero? Quae impedit dignissimos hic enim vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
