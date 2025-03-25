import React, { useEffect, useState } from "react";

const Slider = () => {
  const bgColors = [
    "bg-yellow-500 bg-opacity-50",
    "bg-red-500 bg-opacity-50",
    "bg-blue-500 bg-opacity-50",
    "bg-green-500 bg-opacity-50",
    "bg-purple-500 bg-opacity-50",
    "bg-pink-500 bg-opacity-50",
  ];
  const slides = [
    {
      image: "https://dopt.gov.in/sites/default/files/rojgar_mela_dec2024.jpg",
      title: "Rojgar Mela 2025",
      description: "Empowering youth with employment opportunities",
      date: "March 10, 2025",
      location: "New Delhi",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/Vikasit_Panchayat_GGD2024.JPG",
      title: "Vikasit Bharat Panchayat",
      description: "Strengthening grassroots governance for a developed India",
      date: "April 5, 2025",
      location: "Mumbai",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/annual_conference.JPG",
      title: "National Digital Transformation Summit",
      description: "Exploring cutting-edge digital solutions for governance",
      date: "April 20, 2025",
      location: "Bengaluru",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/annual_conference.JPG",
      title: "AI & Governance Forum",
      description: "Harnessing artificial intelligence for public services",
      date: "May 10, 2025",
      location: "Hyderabad",
    },
    {
      image: "https://dopt.gov.in/sites/default/files/P1105998.JPG",
      title: "Smart Cities Conclave",
      description: "Innovations and policies for sustainable urban development",
      date: "May 25, 2025",
      location: "Chennai",
    },
    {
      image: "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5?34",
      title: "Digital India Conclave",
      description: "Accelerating India's journey towards a digital future",
      date: "June 15, 2025",
      location: "Pune",
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
      <div
  className={`absolute bottom-0 left-0 right-0 p-6 text-white ${bgColors[currentSlide % bgColors.length]}`}
>
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
