import React, { useState, useEffect } from "react";
import jobData from "../data/jobData";

const CareerSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = jobData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  const currentJob = jobData[current];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Images sliding as background */}
      {jobData.map((job, idx) => (
        <div
          key={job.id}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${job.image})` }}
        />
      ))}

      {/* Overlay with a subtle dark background for text readability */}
      <div   className="absolute top-0 left-0 w-full h-full bg-transparent bg-opacity-50 z-20 flex flex-col justify-center items-start p-10 md:p-20 text-black max-w-xl ml-52">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">{currentJob.title}</h1>
        <p className="mb-4 text-lg drop-shadow-md">{currentJob.description}</p>
        <p className="mb-2 font-semibold drop-shadow-md">Location: {currentJob.location}</p>
        <p className="mb-6 font-semibold drop-shadow-md">Department: {currentJob.department}</p>
        <div className="flex gap-4 mt-6">
  <button
    className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-3 rounded-lg font-semibold transition drop-shadow-lg hover:drop-shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
  >
    Learn More
  </button>

  <button
    onClick={() => alert(`Applying for ${currentJob.title}`)}
    className="bg-indigo-600 hover:bg-indigo-700 text-black px-6 py-3 rounded-lg font-semibold transition drop-shadow-lg hover:drop-shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
  >
    Apply Now
  </button>
</div>

      </div>
    </div>
  );
};

export default CareerSlider;
