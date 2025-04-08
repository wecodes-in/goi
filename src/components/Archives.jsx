import React, { useState } from "react";

const Archives = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock Data (You can replace this with API data)
  const archiveData = [
    { id: 1, title: "IAS Civil List", link: "/archives/ias-civil-list" },
    { id: 2, title: "Publications/Reports", link: "/archives/publications-reports" },
    { id: 3, title: "Acts & Rules", link: "/archives/acts-rules" },
    { id: 4, title: "Orders", link: "/archives/orders" },
    { id: 5, title: "Gazette Notifications", link: "/archives/gazette-notifications" },
    { id: 6, title: "What's New", link: "/archives/whats-new" },
    { id: 7, title: "IAS Officers/ Assistant Secretaries Circulars", link: "/archives/ias-officers-circulars" },
    { id: 8, title: "Tool-Kit & Competency Dictionary for Civil Services Officers", link: "/archives/toolkit-competency-dictionary" },
  ];

  // Handle Search Input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Search Submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);

    // Filter Data Based on Search Query
    const filteredResults = archiveData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults);
    setIsSearching(false);
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm ">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">
          Home
        </a>{" "}
        &gt;  &gt; Archives
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Archives</h1>

      {/* Search Section */}
      <form
        onSubmit={handleSearchSubmit}
        className="bg-gray-800 p-4 mb-6 rounded-lg border border-gray-700"
      >
        <label
          htmlFor="search"
          className="block text-white font-medium mb-2"
        >
          Search Circular(s) / Notification(s)
        </label>
        <div className="flex">
          <input
            type="text"
            id="search"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter keywords to search..."
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
          >
            Search
          </button>
        </div>
      </form>

      {/* Search Results */}
      {isSearching && (
        <p className="text-yellow-400">Searching, please wait...</p>
      )}

      {results.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {results.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-blue-400 hover:text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : searchQuery && !isSearching ? (
        <p className="text-red-500">No results found for "{searchQuery}".</p>
      ) : null}

      {/* Archive Categories */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">
          Browse Available Archives:
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          {archiveData.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="text-blue-400 hover:text-white"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Archives;
