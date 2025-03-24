import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState("English");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const increaseFontSize = () => setFontSize((prev) => prev + 1);
  const decreaseFontSize = () => setFontSize((prev) => Math.max(12, prev - 1));

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
        }`}
      style={{ fontSize: `${fontSize}px` }}
    >


      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        language={language}
        setLanguage={setLanguage}

      />

      <MainHeader
        isDarkMode={isDarkMode}

        language={language}

        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Navigation language={language} isDarkMode={isDarkMode} />
      <Slider isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
