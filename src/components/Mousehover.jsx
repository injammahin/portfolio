import React, { useEffect } from "react";

const MouseHover = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyesContainer = document.querySelector(".face");
      const eyes = document.querySelectorAll(".eye");

      eyes.forEach((eye) => {
        const eyee = eye.querySelector(".eyee");

        const eyeRect = eye.getBoundingClientRect();
        const eyeeRect = eyee.getBoundingClientRect();

        const x =
          event.pageX -
          eyesContainer.offsetLeft -
          eyesContainer.offsetWidth / 2;

        const y =
          event.pageY -
          eyesContainer.offsetTop -
          eyesContainer.offsetHeight / 2;

        // Ensure the eyee stays within the boundaries of the eye
        const maxX = eyeRect.width - eyeeRect.width;
        const maxY = eyeRect.height - eyeeRect.height;

        eyee.style.transform = `translate(${Math.max(
          0,
          Math.min(x, maxX)
        )}px, ${Math.max(0, Math.min(y, maxY))}px)`;
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="project_container"
      className=" hidden md:block bg-gray-800 text-center w-full h-56 text-gray-300 "
    >
      <div id="projectbox" className="face relative">
        <h1 className="  text-4xl font-bold  text-gray-300 hover:rotate-45% ">
          take a look at my work
        </h1>
        {/* Start project HTML */}
        <div className="eye inline-block text-center bg-gray-200 h-16 w-16 rounded-full mb-4  relative">
          <div className="eyee absolute bg-gray-900 h-5 w-5 rounded-full transition-transform ease-in-out duration-800 transform">
            {/* Content of eyee (if any) */}
          </div>
        </div>
        <div className="eye inline-block text-center mx-4 bg-gray-200 h-16 w-16 rounded-full mb-4  relative">
          <div className="eyee absolute bg-gray-900 h-5 w-5 rounded-full transition-transform ease-in-out duration-800 transform">
            {/* Content of eyee (if any) */}
          </div>
        </div>
        {/* Mouth */}
        {/* <div className="mouth inline-block bg-red-500 h-5 w-6 mx-[-95px] my-[-30px] rounded-full mt-12" /> */}
        {/* End Project HTML */}
      </div>
    </div>
  );
};

export default MouseHover;
