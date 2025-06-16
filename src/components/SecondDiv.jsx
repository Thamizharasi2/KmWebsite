import React from 'react';
import secondDivImage from '../assets/SecondDivImg.jpeg';

const SecondDiv = () => {
  return (
    <div className="w-full min-h-screen bg-white-100 flex flex-col items-center justify-center  px-6 py-12 text-center">
      <h2 className="text-4xl mb-6 text-blue-900">We are Hiring !!</h2>

      <p className="text-2lg max-w-2xl leading-relaxed">
        We are looking for an experienced professional to be a part of our dynamic team and grow together.
        If you’re passionate about contributing to our team through your skills effectively,
        please submit your CV to <span className="text-indigo-600 font-semibold">hr@dacdevelopers.com</span> or call us at{' '}
        <span className="text-indigo-600 font-semibold">9500242333</span>.
      </p>

      {/* ✅ Image Section */}
      <div className="mt-8">
        <img
          src={secondDivImage}
          alt="Career Opportunities"
          className="w-full max-w-md mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default SecondDiv;
