import React from "react";

const WebInformationManager = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm ">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">
          Home
        </a>{" "}
        &gt; &gt; Web Information Manager
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Web Information Manager</h1>

      {/* WIM Information Section */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-lg font-semibold text-blue-400 mb-4">Contact Details</h2>

        {/* Name and Title */}
        <p className="text-gray-300 mb-2">
          <strong>Name:</strong> Mr. S.D. Sharma
        </p>
        <p className="text-gray-300 mb-4">
          <strong>Designation:</strong> Joint Secretary (ADMN.)
        </p>

        {/* Contact Info */}
        <div className="mb-4">
          <p className="text-gray-300 mb-2">
            <strong>Phone:</strong> 011-23093668 (O)
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:som.sharma@nic.in"
              className="text-blue-400 hover:text-white"
            >
              som.sharma@nic.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebInformationManager;
