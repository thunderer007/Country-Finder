import { SearchIcon } from "lucide-react";
import { globalThemeContext } from "../context/ThemeContext";

const SearchForm = ({ searchTerm, setSearchTerm }) => {
  const { isDarkTheme } = globalThemeContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="form-box"
      style={
        isDarkTheme
          ? { backgroundColor: "hsl(209, 23%, 22%)", color: "hsl(0, 0%, 100%)" }
          : { backgroundColor: "hsl(0, 0%, 100%)" }
      }
    >
      <span>
        <SearchIcon />
      </span>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country ..."
        className="search-box"
        style={isDarkTheme ? { color: "hsl(0, 0%, 100%)" } : { color: "" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
