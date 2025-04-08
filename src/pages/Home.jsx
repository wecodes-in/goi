import React from "react";
import Slider from "../components/Slider";

const Home = ({ isDarkMode }) => {
  return (
    <div className="container mx-auto px-4 py-8">

      <Slider />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`${isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}
          >
            <img
              src={`https://images.unsplash.com/photo-${item + 1}5595876234-${item}7f82f29e1c`}
              alt="Information card"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Information Title</h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button
                className={`mt-4 ${isDarkMode ? "bg-blue-600" : "bg-blue-800"
                  } text-white px-4 py-2 rounded hover:opacity-90 transition-colors`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
