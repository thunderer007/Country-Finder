import CountryCard from "./CountryCard";

const CountriesList = ({ data }) => {
  return (
    <div className="countries-container container">
      <div className="countries">
        {data.map((country) => {
          return <CountryCard country={country} key={country.name.common} />;
        })}
      </div>
    </div>
  );
};

export default CountriesList;
