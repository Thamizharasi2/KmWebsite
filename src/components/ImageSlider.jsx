import React, { useState, useEffect } from 'react';

import img1 from '../assets/CareerImgFresher1.jpg';
import img2 from '../assets/CareerImgFresher2.jpg';
import img3 from '../assets/CareerImgFresher3.jpg';
import img4 from '../assets/CareerImgFresher4.jpg';

const images = [img1, img2, img3, img4];


const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 4000); // 4 sec per slide

    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`
            absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat
            transition-opacity duration-1000 ease-in-out
            ${idx === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}
          `}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
