import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaSun,
    FaMoon,
    FaPlus,
    FaMinus,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = ({
    isDarkMode,
    toggleTheme,
    increaseFontSize,
    decreaseFontSize,
    language,
    setLanguage,
  
}) => {
   

    return (
        <nav
            className={` top-10 w-full ${isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md z-50`}
        >
            <div className="container mx-auto px-4 py-3">

                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row    items-center justify-between">
                   
                    <div
                        className="flex flex-col sm:flex-col md:flex-col  lg:flex-row    mb-4 sm:mb-0 items-center justify-center"
                    >
                        {/* Bharat Sarkar and Government of India */}
                        <div className="flex flex-col sm:flex-row  md:flex-row lg:flex-col  text-center  pr-4 sm:border-r border-gray-300 ">
                            <span>भारत सरकार</span>
                            <span>GOVERNMENT OF INDIA</span>
                        </div>

                        {/* Ministry Information */}
                        <div className="flex flex-col sm:flex-row md:flex-row  lg:flex-col   text-center  pl-0 sm:pl-4">
                            <span>कार्मिक लोक शिकायत और पेंशन मंत्रालय</span>
                            <span>MINISTRY OF PERSONNEL, PUBLIC GRIEVANCES AND PENSIONS</span>
                        </div>
                    </div>

                    

                 
                    <div className="flex flex-row sm:flex-row  md:flex-row  lg:flex-row    items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <button
                            onClick={decreaseFontSize}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <FaMinus />
                        </button>
                        <button
                            onClick={increaseFontSize}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <FaPlus />
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                        </button>

                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"
                                } px-3 py-1 rounded-md`}
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
                </div>
            </div>
        </nav>
    );
};

export default Header;
