import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { customFetch } from "../../utils/apiClient";
import CountriesList from "../components/CountriesList";

const url =
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population";

const LandingPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  if (isLoading) return <h1>Loading ......</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <>
      <CountriesList data={data} />
    </>
  );
};

export default LandingPage;
