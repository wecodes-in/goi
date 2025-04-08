import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    topic: "",
    name: "",
    email: "",
    feedback: "",
    captcha: "",
  });

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate Random CAPTCHA
  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaInput.toUpperCase() !== captchaCode) {
      alert("Invalid CAPTCHA. Please try again.");
      setCaptchaCode(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    // Simulate API call or feedback submission
    console.log("Feedback submitted successfully:", formData);
    setIsSubmitted(true);

    // Reset Form
    setFormData({
      topic: "",
      name: "",
      email: "",
      feedback: "",
      captcha: "",
    });
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
  };

  // Handle CAPTCHA Refresh
  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">Home</a> &gt; &gt; Feedback
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>

      {isSubmitted ? (
        <div className="bg-green-800 text-green-300 p-4 rounded-lg mb-6">
          🎉 Thank you for your feedback! We will review your submission and respond within 15 days if required.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          {/* Feedback Topic */}
          <div className="mb-4">
            <label htmlFor="topic" className="block text-white font-medium mb-2">
              Feedback Topic <span className="text-red-500">*</span>
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">- Select -</option>
              <option value="website">Website</option>
              <option value="services">Services</option>
              <option value="accessibility">Accessibility</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Please enter name"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Please enter email"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Feedback */}
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-white font-medium mb-2">
              Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              value={formData.feedback}
              onChange={handleChange}
              required
              placeholder="Please enter feedback"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CAPTCHA Section */}
          <div className="mb-4">
            <label htmlFor="captcha" className="block text-white font-medium mb-2">
              CAPTCHA <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-900 px-4 py-2 border border-gray-700 text-lg font-bold text-white">
                {captchaCode}
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-blue-400 hover:text-white text-sm"
              >
                Refresh CAPTCHA
              </button>
            </div>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
              placeholder="Please enter CAPTCHA"
              className="w-full mt-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submission Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
          >
            Submit Feedback
          </button>

          <p className="text-gray-500 text-xs mt-4">
            <strong>Note:</strong> Feedback provided is for departmental internal use only. If required, the department will respond to you within 15 days of receiving your feedback.
          </p>
        </form>
      )}
    </div>
  );
};

export default Feedback;
