import { MoonIcon, SunIcon } from "lucide-react";
import { globalThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme, isDarkTheme } = globalThemeContext();

  return (
    <nav
      className="nav"
      style={
        isDarkTheme
          ? { backgroundColor: "hsl(209, 23%, 22%)" }
          : { backgroundColor: "hsl(0, 0%, 100%)" }
      }
    >
      <div className="nav-container">
        <h2>Where in the world?</h2>
        <div className="theme-container" onClick={toggleTheme}>
          {isDarkTheme ? (
            <p>
              <SunIcon />
              <span>Light Mode</span>
            </p>
          ) : (
            <p>
              <MoonIcon />
              <span>Dark Mode</span>
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
