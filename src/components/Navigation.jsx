import React, { useState } from "react";

const Navigation = ({ language, isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const translations = {
    English: ["Home", "About Us", "Employees Corner", "IAS", "Services", "Contact"],
    Hindi: ["होम", "हमारे बारे में", "कर्मचारी कॉर्नर", "आईएएस", "सेवाएं", "संपर्क करें"],
  };

  return (
    <div className={`hidden md:block ${isDarkMode ? "bg-blue-900" : "bg-blue-800"} `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {translations[language].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-white py-4 px-4 transition-colors ${
                activeIndex === index ? "bg-red-500 text-black" : "hover:bg-blue-700"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
