import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpeg";

const HomeBar = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-800 flex">
      {/* Left Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="my-[100px]">
          <p className="text-pink-600">Hi, my name is </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
            Mahin Nur
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
            I'm a full stack developer
          </h2>
          <p className="text-white py-4 max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            architecto ab eos ipsum recusandae? Aperiam natus quas, tenetur
            repellat totam error! Incidunt nisi consequuntur nostrum libero
            repellendus praesentium, cum ad inventore beatae quis, ut optio
            provident dolor modi voluptatibus eveniet hic ratione quaerat saepe
            expedita assumenda eos? Quam nobis odit, necessitatibus, nihil
            explicabo dignissimos deleniti beatae earum dolorum iste sunt
            accusantium commodi natus autem libero placeat ullam voluptas enim?
            Non delectus perspiciatis accusantium consectetur soluta iusto
            minima porro aut. Similique laborum vero tempora provident totam
            perspiciatis ipsam fuga iusto, sint doloribus quas dolorem mollitia
            debitis eum dolore voluptatum facere quia.
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
      <div className="hidden xl:flex flex-col justify-end mx-44 my-40">
        <div className="w-96 rounded-full mx-auto">
          <img
            className="shadow-xl hover:shadow-[#6fbbbb] hover:scale-110 duration-300 rounded-full"
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBar;
