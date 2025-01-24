import { globalThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { isDarkTheme } = globalThemeContext();
  return (
    <div
      className="country"
      style={
        isDarkTheme
          ? { backgroundColor: "hsl(209, 23%, 22%)" }
          : { backgroundColor: "hsl(0, 0%, 100%)" }
      }
    >
      {/* "/country/:id" */}
      <Link to={`/country/${country.name.common}`}>
        <img src={country.flags.png} alt={country.name.common} />
      </Link>
      <div className="country-desc-box">
        <h2>{country.name.common}</h2>
        <p>
          <span>Population:</span>
          {country.population}
        </p>
        <p>
          <span>Region:</span>
          {country.region}
        </p>
        <p>
          <span>Capital:</span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
