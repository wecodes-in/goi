import React, { useState, useEffect } from "react";

const VisitorAnalytics = () => {
  const [visitorStats, setVisitorStats] = useState({
    referer: [],
    browser: [],
    devices: [],
  });

  // Fetch visitor statistics (mock data in this case)
  useEffect(() => {
    // Replace this with actual API data if necessary
    const mockData = {
      referer: ["Google", "Direct", "Facebook", "Twitter"],
      browser: ["Chrome", "Firefox", "Safari", "Edge"],
      devices: ["Desktop", "Mobile", "Tablet"],
    };

    setVisitorStats(mockData);
  }, []);

  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm ">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">
          Home
        </a>{" "}
        &gt; &gt; Visitor Analytics
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Visitor Analytics</h1>

      {/* Visitor Stats Section */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Visitor Statistics</h2>

        {/* Referer */}
        <div className="mb-4">
          <h3 className="text-md font-semibold text-blue-400 mb-2">Referer</h3>
          <ul className="list-disc pl-6 space-y-2">
            {visitorStats.referer.map((referer, index) => (
              <li key={index} className="text-gray-300">{referer}</li>
            ))}
          </ul>
        </div>

        {/* Browser */}
        <div className="mb-4">
          <h3 className="text-md font-semibold text-blue-400 mb-2">Browser</h3>
          <ul className="list-disc pl-6 space-y-2">
            {visitorStats.browser.map((browser, index) => (
              <li key={index} className="text-gray-300">{browser}</li>
            ))}
          </ul>
        </div>

        {/* Devices */}
        <div className="mb-4">
          <h3 className="text-md font-semibold text-blue-400 mb-2">Devices</h3>
          <ul className="list-disc pl-6 space-y-2">
            {visitorStats.devices.map((device, index) => (
              <li key={index} className="text-gray-300">{device}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisitorAnalytics;
