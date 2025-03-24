import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSun, FaMoon, FaPlus, FaMinus } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("whatsNew");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState("English");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1529579134665-75dfc9c5ccef",
      title: "Digital India Initiative",
      description: "Empowering citizens through technology",
      date: "June 15, 2024",
      location: "New Delhi"
    },
    {
      image: "https://images.unsplash.com/photo-1569516449771-41c89ee14ca3",
      title: "Smart Cities Mission",
      description: "Building sustainable urban infrastructure",
      date: "July 1, 2024",
      location: "Mumbai"
    },
    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      title: "E-Governance Summit",
      description: "Transforming governance through digital solutions",
      date: "July 15, 2024",
      location: "Bengaluru"
    }
  ];

  const tabs = [
    { id: "whatsNew", label: "What's New" },
    { id: "events", label: "Events" },
    { id: "pmSVANidhi", label: "PM SVANidhi" },
    { id: "announcements", label: "Announcements" },
    { id: "schemes", label: "Schemes" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    "Home",
    "About Us",
    "Employees Corner",
    "IAS",
    "Services",
    "Contact"
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const increaseFontSize = () => {
    setFontSize(prev => prev + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(12, prev - 1));
  };

  const translations = {
    English: {
      title: "Government of India",
      home: "Home",
      about: "About Us",
      employees: "Employees Corner",
      ias: "IAS",
      services: "Services",
      contact: "Contact"
    },
    Hindi: {
      title: "भारत सरकार",
      home: "होम",
      about: "हमारे बारे में",
      employees: "कर्मचारी कॉर्नर",
      ias: "आईएएस",
      services: "सेवाएं",
      contact: "संपर्क करें"
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`} style={{ fontSize: `${fontSize}px` }}>
      <nav className={`fixed top-0 w-full ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-md z-50`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1550697757-47b431dfb000"
                alt="Government Logo"
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold">{translations[language].title}</h1>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <button onClick={decreaseFontSize} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <FaMinus />
                </button>
                <button onClick={increaseFontSize} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <FaPlus />
                </button>
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                </button>
              </div>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"} px-3 py-1 rounded-md`}
              >
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
              </select>

              <div className="flex space-x-4">
                <FaFacebook className="text-blue-600 text-xl cursor-pointer hover:opacity-80" />
                <FaTwitter className="text-blue-400 text-xl cursor-pointer hover:opacity-80" />
                <FaInstagram className="text-pink-600 text-xl cursor-pointer hover:opacity-80" />
                <FaLinkedin className="text-blue-800 text-xl cursor-pointer hover:opacity-80" />
              </div>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`fixed top-20 left-0 w-full ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg md:hidden z-40`}>
          <div className="container mx-auto px-4 py-2">
            {Object.values(translations[language]).map((item, index) => (
              <a
                key={index}
                href="#"
                className={`block py-2 px-4 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className={`hidden md:block ${isDarkMode ? "bg-blue-900" : "bg-blue-800"} mt-20`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {Object.values(translations[language]).map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white py-4 px-4 hover:bg-blue-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full ${
                activeTab === tab.id
                  ? isDarkMode ? "bg-blue-600 text-white" : "bg-blue-800 text-white"
                  : isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
              } hover:opacity-90`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}
            >
              <img
                src={`https://images.unsplash.com/photo-${item + 1}5595876234-${item}7f82f29e1c`}
                alt="Information card"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Information Title</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className={`mt-4 ${isDarkMode ? "bg-blue-600" : "bg-blue-800"} text-white px-4 py-2 rounded hover:opacity-90 transition-colors`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;