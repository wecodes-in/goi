import React from "react";

const Help = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm ">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">Home</a> &gt; &gt; Help
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Help</h1>

      {/* Viewing Information in Various File Formats */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Viewing Information in Various File Formats</h2>
        <p className="mt-2">
          The information on this website is available in different formats such as PDF, Word, and HTML. 
          To view these documents properly, your browser needs the appropriate plug-ins or software. 
          You can download them for free from the Internet.
        </p>

        <table className="mt-4 w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-500 px-4 py-2">Document Type</th>
              <th className="border border-gray-500 px-4 py-2">Required Plug-in</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PDF Files</td>
              <td className="border border-gray-500 px-4 py-2">
                <a href="https://get.adobe.com/reader/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
                  Adobe Acrobat Reader
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Word Files</td>
              <td className="border border-gray-500 px-4 py-2">
                <a href="https://www.microsoft.com/en-us/download/details.aspx?id=4" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
                  Word Viewer
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Excel Files</td>
              <td className="border border-gray-500 px-4 py-2">
                <a href="https://www.microsoft.com/en-us/download/details.aspx?id=10" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
                  Excel Viewer
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PowerPoint Files</td>
              <td className="border border-gray-500 px-4 py-2">
                <a href="https://www.microsoft.com/en-us/download/details.aspx?id=13" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
                  PowerPoint Viewer
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Accessibility Help */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Accessibility Help</h2>
        <p className="mt-2">
          Use the accessibility options provided on this website to control the screen display.
          These options allow increasing the text size and changing the contrast scheme for better readability.
        </p>

        <h3 className="text-lg font-medium mt-4">Changing the Text Size</h3>
        <p className="mt-2">
          You can adjust text size for better readability:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Small:</strong> Displays text in a smaller size than the default.</li>
          <li><strong>Medium:</strong> Displays text in the default standard size.</li>
          <li><strong>Large:</strong> Displays text in a larger size.</li>
        </ul>
        <p className="mt-2">
          You can change the text size using the icons at the top of each page:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Decrease Text Size:</strong> Reduces the text size.</li>
          <li><strong>Normal Text Size:</strong> Resets to the default size.</li>
          <li><strong>Increase Text Size:</strong> Enlarges the text size.</li>
        </ul>
      </section>

      {/* Changing Content Language */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Changing Content Language</h2>
        <p className="mt-2">
          You can view the content in different languages:
        </p>
        <ul className="list-disc pl-5">
          <li><strong><a href="/?lang=hi" className="text-blue-400 hover:text-white">हिंदी</a>:</strong> View content in Hindi.</li>
          <li><strong><a href="/?lang=en" className="text-blue-400 hover:text-white">English</a>:</strong> View content in English.</li>
        </ul>
      </section>

      {/* Search Help */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Help on Search Facility</h2>
        <p className="mt-2">
          Use the search facility to find relevant information quickly.
        </p>

        <h3 className="text-lg font-medium mt-4">Using the Search Facility</h3>
        <p className="mt-2">
          The website provides:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Simple Search:</strong> Available on the homepage. Search by content and keywords.</li>
          <li><strong>Advanced Search:</strong> Available on specific pages. Search by keywords, location, title, subject, etc.</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">Search Tips</h3>
        <ul className="list-disc pl-5">
          <li>Avoid plural words. Use <em>release</em> instead of <em>releases</em>.</li>
          <li>Search is case-insensitive. "Help" and "help" give the same results.</li>
        </ul>
      </section>
    </div>
  );
};

export default Help;
