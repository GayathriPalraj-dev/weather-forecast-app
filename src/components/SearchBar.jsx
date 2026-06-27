import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleClick = () => {
    onSearch(city);
  };
 
  const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    onSearch(city);
  }
};
  return (
    <div>
  <h2 className="search-title">Search City</h2>

  <div className="search-container">

    <input
      className="city-input"
      type="text"
      placeholder="Enter City"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={handleKeyDown}
    />

    <button
      className="search-btn"
      onClick={handleClick}
    >
      🔍 Search
    </button>

  </div>
</div>
  );
};

export default SearchBar;
