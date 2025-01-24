import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const url = "https://restcountries.com/v3.1/name/";

const fetchCountry = async (id) => {
  const response = await axios.get(`${url}${id}`);
  return response.data;
};

const Country = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["country"],
    queryFn: () => fetchCountry(id),
  });

  if (isLoading) {
    return <h2>Loading ... </h2>;
  }

  if (isError) return <h2>Something went wrong...</h2>;
  // console.log(data);

  return (
    <div className="container">
      <div className="single-country-container">
        <img src={data[0].flags.png} alt={data[0].flags.alt} />
        <div className="single-country-right">
          <h4>{data[0].name.common}</h4>
          <div className="single-country-details">
            <div className="single-country-details-left">
              <p>
                <span>Native Name:</span>
                {data[0].name.nativeName.official}
              </p>
              <p>
                <span>Population:</span>
                {data[0].population}
              </p>
              <p>
                <span>Region:</span>
                {data[0].region}
              </p>
              <p>
                <span>Sub Region:</span>
                {data[0].subregion}
              </p>
              <p>
                <span>Capital:</span>
                {data[0].capital}
              </p>
            </div>
            <div className="single-country-details-right">
              <p>
                <span>Top Level Domain: </span>
                {data[0].tld}
              </p>
              <p>
                <span>Currencies:</span>
              </p>
              <p>
                <span>Languages:</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
