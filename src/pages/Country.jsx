import { globalThemeContext } from "../context/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoveLeftIcon } from "lucide-react";

const url = "https://restcountries.com/v3.1/name/";

const fetchCountry = async (id) => {
  const response = await axios.get(`${url}${id}`);
  return response.data;
};

const Country = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["country", id],
    queryFn: () => fetchCountry(id),
  });

  if (isLoading) {
    return <h2>Loading ... </h2>;
  }

  if (isError) return <h2>Something went wrong...</h2>;
  // console.log(data);

  // USE THE THEME CONTEXT
  const { isDarkTheme } = globalThemeContext();

  // NAVIGATE BACK HOME
  // const navigate = useNavigate();

  return (
    <div className="container">
      <button
        onClick={() => navigate("/")}
        className="home-btn"
        style={
          isDarkTheme
            ? { backgroundColor: "hsl(209, 23%, 22%)", color: "white" }
            : { backgroundColor: "hsl(0, 0%, 100%)" }
        }
      >
        <MoveLeftIcon />
        Back
      </button>

      <div className="single-country-container">
        <img
          src={data[0]?.flags?.png}
          alt={data[0]?.flags?.alt}
          className="single-country-flag"
        />
        <div className="single-country-right">
          <h4 className="country-name">{data[0]?.name?.common}</h4>
          <div className="single-country-details">
            <div className="single-country-details-left">
              <p>
                <span>Native Name: </span>
                {Object.values(data[0].name.nativeName)[0].common}
              </p>
              <p>
                <span>Population: </span>
                {data[0].population}
              </p>
              <p>
                <span>Region: </span>
                {data[0].region}
              </p>
              <p>
                <span>Sub Region: </span>
                {data[0].subregion}
              </p>
              <p>
                <span>Capital: </span>
                {data[0].capital}
              </p>
            </div>
            <div className="single-country-details-right">
              <p>
                <span>Top Level Domain: </span>
                {data[0].tld}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.entries(data[0].currencies).map(([key, value]) => {
                  return value.name;
                })}
              </p>
              <p>
                <span>Languages: </span>
                {Object.values(data[0].languages).map(
                  (language, index, arr) => {
                    return language + (index < arr.length - 1 ? ", " : " ");
                  }
                )}
              </p>
            </div>
          </div>
          <div className="single-details-bottom">
            <p>
              Border Countries:{" "}
              {data[0].borders
                ? data[0].borders.map((country, index) => {
                    return <span key={index}>{country}</span>;
                  })
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
