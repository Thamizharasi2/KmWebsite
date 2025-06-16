import React from "react";
import ThirdDivDivImage from "../assets/ThirdDivImg.jpg";

const ThirdDiv = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-between px-6 py-12 text-left">
      
      {/* 📝 Left side - Text */}
      <div className="md:w-1/2 p-26 ">
        <h2 className="text-5xl mb-6 text-blue-900 ">A Journey to Success</h2>

        <p className="text-lg max-w-xl leading-relaxed text-gray-800 mb-4">
          For over a few years now, we’ve been totally empowering our team to explore all the experiences on their growth journey.
          And guess what’s lit? We’re all about empathizing with our peeps’ needs and preferences, so they can totally own their decisions.
          Because we’re working towards shared growth on our road to leveling up as an organization.
        </p>

        <p className="text-lg max-w-xl leading-relaxed text-gray-800">
          With our values running deep, we team up with peeps who share our vision, offering positions based on their skills and potential.
          It’s all about making sure both the crew and the company are on the same wavelength for the fruition of mutual success.
          And today, DAC is one of the top construction companies in India.
        </p>
      </div>

      {/* 📸 Right side - Image */}
      <div className="w-full max-w-xl h-auto rounded-lg shadow-md">
        <img
          src={ThirdDivDivImage}
          alt="Career Opportunities"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

    </div>
  );
};

export default ThirdDiv;
