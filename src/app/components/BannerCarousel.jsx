"use client";

import { useState, useEffect } from "react";

const bannerData = [
  {
    image: "/Wayang-Kulit-shutterstock_732881719-1024x682.webp",
    title: "LENTARA",
    description: "Platform belajar seputar sejarah Indonesia yang menyenangkan dan interaktif.",
    button: "Mulai Belajar",
  },
  {
    image: "/bromo.jpg",
    title: "LENTARA",
    description: "Platform belajar seputar sejarah Indonesia yang menyenangkan dan interaktif.",
    button: "Mulai Belajar",
  },
  {
    image: "/indonesia.jpg",
    title: "LENTARA",
    description: "Platform belajar seputar sejarah Indonesia yang menyenangkan dan interaktif.",
    button: "Mulai Belajar",
  },
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden">
      {bannerData.map((banner, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <img
            src={banner.image}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
              {banner.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl font-serif">
              {banner.description}
            </p>
            <a
              href="/#pembelajaran"
              className="rounded-lg text-lg font-bold p-5 bg-yellow-900 mt-5 hover:bg-yellow-700 transition-all ease-in-out duration-200 font-serif"
            >
              {banner.button}
            </a>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {bannerData.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
