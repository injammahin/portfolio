import React from "react";

const Work = () => {
  return (
    <div name="work" className=" w-full h-screen text-gray-300 bg-gray-800">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>

          <p className="py-6">//check my previous work</p>
        </div>
        <div
          style={{ backgroundImage: "url(${WorkImg})" }}
          className=" grid sm:grid-cols-2 md-grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow[#040c16] geoup container rounded-md flex justify-center items-center mx-auto">
            {/* Hover effect */}
            <div>
              <span></span>
            </div>
            <a href="/">
              <button>code</button>
            </a>
            <br />
            <a href="/">
              <button>demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
