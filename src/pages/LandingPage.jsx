import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CountriesList from "../components/CountriesList";
import SearchForm from "../components/SearchForm";
import SelectContinent from "../components/SelectContinent";
import { globalThemeContext } from "../context/ThemeContext";

const url = "https://restcountries.com/v3.1/";
// regions url = https://restcountries.com/v3.1/subregion/{subregion}

const LandingPage = () => {
  const { continentTerm } = globalThemeContext();
  console.log(continentTerm);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries", continentTerm],
    queryFn: async () => {
      const res = await axios.get(`${url}${continentTerm}`);
      return res.data;
    },
  });
  if (isLoading) return <h1>Loading ......</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <>
      <div className="container">
        <SearchForm />
        <SelectContinent />
      </div>
      <CountriesList data={data} />
    </>
  );
};

export default LandingPage;
