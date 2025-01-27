import { globalThemeContext } from "../context/ThemeContext";

const SelectContinent = () => {
  const continents = ["africa", "america", "asia", "europe", "oceania"];
  const { continentTerm, setContinentTerm } = globalThemeContext();
  return (
    <div>
      <select
        name="continent"
        id="continent"
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
