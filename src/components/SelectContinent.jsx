import { globalThemeContext } from "../context/ThemeContext";

const SelectContinent = () => {
  const continents = ["africa", "america", "asia", "europe", "oceania"];
  const { continentTerm, setContinentTerm, isDarkTheme } = globalThemeContext();
  return (
    <div>
      <select
        name="continent"
        id="continent"
        className="continent-picker"
        style={
          isDarkTheme
            ? { backgroundColor: "hsl(209, 23%, 22%)", color: "white" }
            : { backgroundColor: "hsl(0, 0%, 100%)" }
        }
        onChange={(e) => setContinentTerm(e.target.value)}
        defaultValue={continentTerm}
      >
        <option value="all">All</option>
        {continents.map((continent, index) => {
          return (
            <option value={`region/${continent}`} key={index}>
              {continent}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectContinent;
