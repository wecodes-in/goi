import React, { useEffect, useState } from "react";

const Slider = () => {
  const slides = [
    {
      image: "https://dopt.gov.in/sites/default/files/rojgar_mela_dec2024.jpg",
      title: "Digital India Initiative",
      description: "Empowering citizens through technology",
      date: "June 15, 2024",
      location: "New Delhi",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/Vikasit_Panchayat_GGD2024.JPG",
      title: "Smart Cities Mission",
      description: "Building sustainable urban infrastructure",
      date: "July 1, 2024",
      location: "Mumbai",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/annual_conference.JPG",
      title: "E-Governance Summit",
      description: "Transforming governance through digital solutions",
      date: "July 15, 2024",
      location: "Bengaluru",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/annual_conference.JPG",
      title: "E-Governance Summit",
      description: "Transforming governance through digital solutions",
      date: "July 15, 2024",
      location: "Bengaluru",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/P1105998.JPG",
      title: "E-Governance Summit",
      description: "Transforming governance through digital solutions",
      date: "July 15, 2024",
      location: "Bengaluru",
    },
    {
      image: "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5?34",
      title: "E-Governance Summit",
      description: "Transforming governance through digital solutions",
      date: "July 15, 2024",
      location: "Bengaluru",
    },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[500px] mt-20 md:mt-0">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
        <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
        <p className="mb-2">{slides[currentSlide].description}</p>
        <div className="flex space-x-4 text-sm">
          <span>{slides[currentSlide].date}</span>
          <span>{slides[currentSlide].location}</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
