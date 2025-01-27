import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CountriesList from "../components/CountriesList";
import SearchForm from "../components/SearchForm";
import SelectContinent from "../components/SelectContinent";
import { globalThemeContext } from "../context/ThemeContext";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const url = "https://restcountries.com/v3.1/";
// regions url = https://restcountries.com/v3.1/subregion/{subregion}

const LandingPage = () => {
  const { continentTerm } = globalThemeContext();
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced value of searchTerm
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries", continentTerm],
    queryFn: async () => {
      const res = await axios.get(`${url}${continentTerm}`);
      return res.data;
    },
  });
  if (isLoading) return <h1>Loading ......</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  // Filter countries based on search term
  const filteredCountries = data.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container flex">
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SelectContinent />
      </div>
      <CountriesList data={filteredCountries} />
    </>
  );
};

export default LandingPage;
