import React, { useEffect } from "react";

const MouseHover = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyesContainer = document.querySelector(".face");
      const eyee = document.querySelector(".eyee");
      const x =
        event.pageX - eyesContainer.offsetLeft - eyesContainer.offsetWidth / 2;
      const y =
        event.pageY - eyesContainer.offsetTop - eyesContainer.offsetHeight / 2;

      eyee.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="project_container" className=" bg-gray-800 text-center">
      <div id="projectbox" className="face relative">
        {/* Start project HTML */}

        <div className="eye inline-block text-center relative bg-gray-200 h-16 w-16 rounded-full mb-4 animate-bounce">
          <div className="eyee absolute bg-gray-300 h-6 w-6 rounded-full transition-transform ease-in-out duration-900 transform">
            <div className="animate" />
          </div>
        </div>
        <div className="eye inline-block text-center relative bg-gray-200 h-16 w-16 rounded-full mb-4 animate-bounce">
          <div className="eyee absolute bg-gray-300 h-6 w-6 rounded-full transition-transform ease-in-out duration-900 transform">
            <div className="animate" />
          </div>
        </div>
        {/* End Project HTML */}
      </div>
    </div>
  );
};

export default MouseHover;
