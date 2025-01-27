import { useState } from "react";

export const action = async ({ request }) => {
  console.log(request);
  return null;
};
const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        className="search-box"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
