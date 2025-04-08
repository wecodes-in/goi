import React from "react";

const ScreenReaderAccess = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">Home</a> &gt; &gt; Screen Reader Access
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Screen Reader Access</h1>

      {/* Introduction */}
      <p className="mb-4">
        The National Website of India fully complies with the <strong>Guidelines for Indian Government Websites</strong>.
        Our visitors with visual impairments can access the portal using assistive technologies, such as screen readers.
      </p>
      <p className="mb-4">
        The information on this website is accessible with different screen readers, including:
      </p>

      {/* Screen Reader Table */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Information about Different Screen Readers</h2>

        <table className="w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-500 px-4 py-2">Screen Reader</th>
              <th className="border border-gray-500 px-4 py-2">Website</th>
              <th className="border border-gray-500 px-4 py-2">Free / Commercial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Screen Access For All (SAFA)</td>
              <td className="border border-gray-500 px-4 py-2 text-center">—</td>
              <td className="border border-gray-500 px-4 py-2">Free</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Non Visual Desktop Access (NVDA)</td>
              <td className="border border-gray-500 px-4 py-2">
                <a
                  href="http://www.nvda-project.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white"
                >
                  nvda-project.org
                </a>
              </td>
              <td className="border border-gray-500 px-4 py-2">Free</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">System Access To Go</td>
              <td className="border border-gray-500 px-4 py-2">
                <a
                  href="http://www.satogo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white"
                >
                  satogo.com
                </a>
              </td>
              <td className="border border-gray-500 px-4 py-2">Free</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Hal</td>
              <td className="border border-gray-500 px-4 py-2">
                <a
                  href="http://www.yourdolphin.co.uk/productdetail.asp?id=5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white"
                >
                  yourdolphin.co.uk
                </a>
              </td>
              <td className="border border-gray-500 px-4 py-2">Commercial</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">JAWS</td>
              <td className="border border-gray-500 px-4 py-2">
                <a
                  href="https://www.freedomscientific.com/products/software/jaws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white"
                >
                  freedomscientific.com
                </a>
              </td>
              <td className="border border-gray-500 px-4 py-2">Commercial</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Supernova</td>
              <td className="border border-gray-500 px-4 py-2">
                <a
                  href="http://www.yourdolphin.co.uk/productdetail.asp?id=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white"
                >
                  yourdolphin.co.uk
                </a>
              </td>
              <td className="border border-gray-500 px-4 py-2">Commercial</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Window-Eyes</td>
              <td className="border border-gray-500 px-4 py-2">
                <a
                  href="http://www.gwmicro.com/Window-Eyes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white"
                >
                  gwmicro.com
                </a>
              </td>
              <td className="border border-gray-500 px-4 py-2">Commercial</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ScreenReaderAccess;
