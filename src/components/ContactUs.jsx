import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">Home</a> &gt; &gt; Contact Us
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      {/* Who's Who Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Who's Who</h2>
        <p className="mb-4">
          For any inquiries or further information, you may reach out to the appropriate department.
        </p>

        {/* Disclaimer Section */}
        <div className="bg-yellow-900 text-yellow-300 p-4 rounded-lg border border-yellow-700 mb-6">
          <strong className="block text-lg">Disclaimer:</strong>
          <p className="mt-2">
            Any grievance sent by mail will <strong>not be attended to/entertained</strong>. Please lodge your grievance at:
            <a
              href="https://pgportal.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white ml-1"
            >
              pgportal.gov.in
            </a>
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-white">Department of Personnel & Training</h3>
          <p className="mt-2 text-gray-400">
            Ministry of Personnel, Public Grievances & Pensions<br />
            North Block, New Delhi - 110001, India<br />
            <strong className="text-white">Phone:</strong> +91-11-23094500 / 23092338<br />
            <strong className="text-white">Fax:</strong> +91-11-23092658
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-medium text-white">National Informatics Centre (NIC)</h3>
          <p className="mt-2 text-gray-400">
            National Informatics Centre (NIC), Ministry of Electronics & IT<br />
            A-Block, CGO Complex, Lodhi Road,<br />
            New Delhi - 110003, India<br />
            <strong className="text-white">Phone:</strong> +91-11-24305366<br />
            <strong className="text-white">Website:</strong>{" "}
            <a
              href="https://www.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white"
            >
              www.nic.in
            </a>
          </p>
        </div>
      </section>

      {/* Grievance Portal Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Lodge Your Grievance</h2>
        <p>
          For lodging grievances, kindly visit:
          <a
            href="https://pgportal.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white ml-1"
          >
            pgportal.gov.in
          </a>
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
