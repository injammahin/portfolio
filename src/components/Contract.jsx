import React from "react";

const Contract = () => {
  return (
    <div
      name="contract"
      className=" w-full h-screen bg-gray-800 flex  justify-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/211710f7-aadd-45eb-8bef-f1450decd591"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            //submit the form below or shoot me an email-
            injammahin5507@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2"
          type="email "
          placeholder="Enter your email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          {" "}
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contract;
