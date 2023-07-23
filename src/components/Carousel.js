import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import Clarify from "./Pictures/Clarify_Logo.png";
import Database from "./Pictures/Database_Project.png";
import Tailwind from "./Pictures/TailWind-Discord-Practice.png";

import { projects } from "./data";

function Carousel() {
  const slides = [
    {
      src: projects[0].image,
    },
    {
      src: projects[1].image,
    },
    {
      src: projects[2].image,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[800px] h-[400px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full rounded-2xl transition-all duration-500"
      >
        <a href={projects[currentIndex].link}>
          <img
            src={projects[currentIndex].image}
            alt="gallery"
            className="absolute inset-0 object-contain object-center w-full h-full transition-all duration-1000"
          />
          <div className="absolute inset-0 hover:bg-gray-900 opacity-0 hover:opacity-100 border-gray-900 border-5 transition-opacity  object- contain duration-300  bg-gray-800 ">
            <div className="px-8 py-10 relative h-full flex flex-col items-center justify-center text-center text-black">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {projects[currentIndex].subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {projects[currentIndex].title}
              </h1>
              <p className="leading-relaxed">
                {projects[currentIndex].description}
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={previousSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

/*

backgroundImage: `url(${slides[currentIndex].src})`,
*/
