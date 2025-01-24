import axios from "axios";

// const url = axios.create({
//   baseURL: "https://restcountries.com/v3.1/all",
// });

export const customFetch = async (data) => {
  const res = await axios.get(data);
  return res;
};
