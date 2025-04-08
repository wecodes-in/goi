import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);

  const menuItems = [
    { label: "Home", path: "/" },
    { 
      label: "About Us", 
      path: "/about-us",
      submenu: [
        { label: "Who's Who", path: "/about-us/whos-who" },
        { label: "Vision and Mission", path: "/about-us/vision-mission" },
        { 
          label: "Functions", 
          path: "/about-us/functions",
          submenu: [
            { 
              label: "Wings/Division in DoPT", 
              path: "/about-us/functions/wings-division",
              submenu: [
                { label: "Establishment Officer", path: "/about-us/functions/wings-division/establishment-officer" },
                { label: "Establishment", path: "/about-us/functions/wings-division/establishment" },
                { label: "Administrative Tribunal", path: "/about-us/functions/wings-division/administrative-tribunal" },
                { label: "Service & Vigilance", path: "/about-us/functions/wings-division/service-vigilance" },
                { label: "Training", path: "/about-us/functions/wings-division/training" },
                { label: "Central Secretariat", path: "/about-us/functions/wings-division/central-secretariat" },
                { label: "Retraining & Redeployment", path: "/about-us/functions/wings-division/retraining-redeployment" },
              ]
            },
            { label: "Organizations under DoPT", path: "/about-us/functions/organizations" },
            { label: "Work Allocation", path: "/about-us/functions/work-allocation" },
          ]
        }
      ]
    },
    { label: "Employees Corner", path: "/employees-corner" },
    { label: "IAS", path: "/ias" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className={`hidden md:block ${isDarkMode ? "bg-blue-900" : "bg-blue-800"} `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-start space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.path}
                className={`text-white py-4 px-4 transition-colors ${
                  activeIndex === index ? "bg-red-500 text-black" : "hover:bg-blue-700"
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {item.label}
              </Link>

              {/* Main Dropdown Menu */}
              {item.submenu && dropdownOpen === index && (
                <div className="absolute left-0 mt-2 w-56 bg-red-600 text-white shadow-lg rounded-md">
                  {item.submenu.map((sub, subIndex) => (
                    <div 
                      key={subIndex} 
                      className="relative group"
                      onMouseEnter={() => setSubDropdownOpen(subIndex)}
                      onMouseLeave={() => setSubDropdownOpen(null)}
                    >
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-red-500"
                      >
                        {sub.label}
                      </Link>

                      {/* Submenu inside Functions Dropdown */}
                      {sub.submenu && subDropdownOpen === subIndex && (
                        <div className="absolute left-full top-0 ml-1 w-56 bg-red-600 text-white shadow-lg rounded-md">
                          {sub.submenu.map((subSub, subSubIndex) => (
                            <Link
                              key={subSubIndex}
                              to={subSub.path}
                              className="block px-4 py-2 hover:bg-red-500"
                            >
                              {subSub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
