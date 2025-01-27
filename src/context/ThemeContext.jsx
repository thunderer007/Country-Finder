import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [continentTerm, setContinentTerm] = useState("all");

  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{ toggleTheme, isDarkTheme, continentTerm, setContinentTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const globalThemeContext = () => useContext(AppContext);
