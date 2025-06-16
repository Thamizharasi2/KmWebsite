import React from "react";
import img1 from '../assets/ForthDiv1.jpg';
import img2 from '../assets/ForthDiv2.jpg';
import img3 from '../assets/ForthDiv3.jpg';
import img4 from '../assets/ForthDiv4.jpg';
import img5 from '../assets/ForthDiv5.jpg';
import img6 from '../assets/ForthDiv6.jpg';
import img7 from '../assets/ForthDiv7.jpg';

const ForthDiv = () => {
  return (

    <div className="bg-gray-100 py-10 px-4 md:px-16 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Culture & Employee Engagement
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-2 text-lg leading-relaxed">
        Building an environment that’s all about a human-centric approach to our work culture, ya know?
        Making sure our peeps are engaged, sharing the same values, and hustling together like well-connected roots.
      </p>
      <p className="text-gray-700 max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
        It’s all about fostering a space where each one of us can thrive and level up, paving
        the way for strong success in this dynamic world.
      </p>

      {/* Custom Grid Layout */}
      <div className="grid grid-cols-6 gap-x-5 gap-y-1 max-w-7xl mx-auto items-start flex justify-center">
        <div className="col-span-1 " style={{ paddingTop: '100px'  }}>
            <img
            src={img1}
            alt="Team High Five"
            className="rounded-2xl border-4 border-blue-100 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ width: '100%', height: '192px'}} // h-48 = 192px
            />
        </div>

        <div className="col-span-1"style={{ paddingTop: '30px'  }}>
            <img
            src={img2}
            alt="Birthday Celebration"
            className="rounded-2xl border-4 border-blue-100 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ width: '290px', height: '152px' }}
            />
            <img
            src={img3}
            alt="Woman Celebrating"
            className="rounded-2xl border-4 border-blue-100 object-cover mt-1 transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ width: '192px', height: '232px' }}
            />
        </div>

        <div className="col-span-2 flex " >
            <img
            src={img4}
            alt="Team Meeting"
            className="rounded-2xl border-4 border-blue-100 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ width: '291px', height: '520px' }}
            />
        </div>

        <div className="col-span-1" >
            <div className="" style={{ paddingTop: '30px'  }}>

            <img
            src={img5}
            alt="Chair Racing Fun"
            className="rounded-2xl border-4 border-blue-100 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ width: '250px', height: '192px' }}
            />
            </div>
            <div style={{ paddingTop: '20px'  }}>

            <img
            src={img6}
            alt="Rangoli Decoration"
            className="rounded-2xl border-4 border-blue-100 object-cover mt-1 transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ width: '100%', height: '192px' }}
            />
            </div>
        </div>

        <div className="col-span-1" style={{ paddingTop: '100px'  }}>
            <img
            src={img7}
            alt="Woman on Laptop"
            className="rounded-2xl border-4 border-blue-100 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ width: '100%', height: '192px' }}
            />
        </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
        {/* Connect */}
        <div className="relative pl-6 border-l-4 border-orange-500 -ml-1 p-4 ">
            <div className="absolute -left-3 top-0 bg-orange-500 text-white font-semibold px-2 py-0.5 text-sm rounded">
            Connect
            </div>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
            New employees are welcomed into our family with comprehensive onboarding programs, ensuring a smooth transition and integration into our team.
            </p>
        </div>

        {/* Engage */}
        <div className="relative pl-6 border-l-4 border-orange-500 -ml-1 p-4">
            <div className="absolute -left-3 top-0 bg-orange-500 text-white font-semibold px-2 py-0.5 text-sm rounded">
            Engage
            </div>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Regular feedback surveys allow us to understand and address employee needs, ensuring a positive and supportive work environment.
            </p>
        </div>

                {/* Evolve */}
                <div className="relative pl-6 border-l-4 border-orange-500 -ml-1 p-4">
                    <div className="absolute -left-3 top-0 bg-orange-500 text-white font-semibold px-2 py-0.5 text-sm rounded">
                    Evolve
                    </div>
                    <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    Our performance review process is transparent and constructive, providing opportunities for growth and development for every team member.
                    </p>
                </div>
            </div>

  </div>


  );
};

export default ForthDiv;
