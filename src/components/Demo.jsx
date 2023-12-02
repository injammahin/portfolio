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
          event.clientX -
          eyesContainer.offsetLeft -
          eyesContainer.offsetWidth / 2 +
          eyeRect.left +
          eyeRect.width / 2 -
          eyeeRect.width / 2;

        const y =
          event.clientY -
          eyesContainer.offsetTop -
          eyesContainer.offsetHeight / 2 +
          eyeRect.top +
          eyeRect.height / 2 -
          eyeeRect.height / 2;

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
    <div id="project_container" className="bg-gray-800 text-center">
      <div id="projectbox" className="face relative">
        {/* Start project HTML */}
        <div className="eye inline-block text-center bg-gray-200 h-16 w-16 rounded-full mb-4 animate-bounce relative">
          <div className="eyee absolute bg-gray-300 h-6 w-6 rounded-full transition-transform ease-in-out duration-900 transform">
            {/* Content of eyee (if any) */}
          </div>
        </div>
        <div className="eye inline-block text-center bg-gray-200 h-16 w-16 rounded-full mb-4 animate-bounce relative">
          <div className="eyee absolute bg-gray-300 h-6 w-6 rounded-full transition-transform ease-in-out duration-900 transform">
            {/* Content of eyee (if any) */}
          </div>
        </div>
        {/* End Project HTML */}
      </div>
    </div>
  );
};

export default MouseHover;
