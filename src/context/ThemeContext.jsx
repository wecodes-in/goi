import { createContext, useState, useContext } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle Theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => useContext(ThemeContext);
