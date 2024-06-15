import React, { useState, useEffect } from 'react';
import CarsouleImage1 from "../assets/CarsouleImage1.png";
import CarsouleImage2 from "../assets/CarsouleImage2.png";
import CarsouleImage3 from "../assets/CarsouleImage3.png";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const images = [CarsouleImage1, CarsouleImage2, CarsouleImage3, CarsouleImage2, CarsouleImage3, CarsouleImage1];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length / 2));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length / 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length / 2)) % (images.length / 2));
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/2 px-2 flex-shrink-0">
              <img className="w-full block" src={image} alt={`Carousel Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-[-1rem] transform -translate-y-1/2 bg-neutral-300 shadow-lg  rounded-full p-2 "
        onClick={handlePrev}
      >
        <GrFormPrevious className='text-[2rem] text-blue-700 font-bold'/>
      </button>
      <button
        className="absolute top-1/2 right-[-1rem] transform -translate-y-1/2 bg-neutral-300 shadow-lg rounded-full p-2 "
        onClick={handleNext}
      >
        <GrFormNext className='text-[2rem] text-blue-700 font-bold'/>
      </button>
    </div>
  );
};

export default ImageCarousel;
