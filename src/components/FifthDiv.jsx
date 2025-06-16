import React from "react";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import Icon1 from "../assets/curent-op-icon1.png";
import Icon2 from "../assets/curent-op-icon2.png";
import Icon3 from "../assets/curent-op-icon3.png";

const jobData = [
  {
    id: 1,
    title: "MIS – Engineer",
    location: "Chennai",
    experience: "4+ Years",
    description:
      "Leveraging data insights to optimize operations and drive informed decisions.",
      icon: Icon1,
  },
  {
    id: 2,
    title: "Team Leader & Client Relationship Executive",
    location: "Chennai",
    experience: "6+ Years",
    description:
      "Leading teams to deliver exceptional client experiences and achieve strategic objectives.",
    icon: Icon2, 
  },
  {
    id: 3,
    title: "Team Leader & Client Relationship Executive",
    location: "Chennai",
    experience: "6+ Years",
    description:
      "Leading teams to deliver exceptional client experiences and achieve strategic objectives.",
    icon:Icon3, 
  },

];

function FifthDiv() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-blue-900">Current Openings</h2>
        <p className="mt-4 text-gray-600">
          Explore opportunities to join our dynamic team and <br />
          contribute to our success story. Apply now!
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {jobData.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md border-t-8 border-gray-400 rounded-md flex flex-col lg:flex-row items-center lg:items-start p-6"
          >
            <div className="flex-shrink-0 mr-6">
              <img src={job.icon} alt="icon" className="h-16 w-16 color-red-500" />
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
              <div className="flex items-center text-gray-600 mt-1 text-sm">
                <FaMapMarkerAlt className="mr-1" />
                <span className="mr-4">{job.location}</span>
                <FaBriefcase className="mr-1" />
                <span>{job.experience}</span>
              </div>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-auto flex items-center gap-4">
               <button
                    style={{ backgroundColor: 'orange' ,hover: { backgroundColor: 'blue' }}}
                    className="px-6 py-2 text-white rounded-full font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 hover:bg-orange-600"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Apply Now
                </button>


              <div className="border-2 border-blue-900 p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FifthDiv;
