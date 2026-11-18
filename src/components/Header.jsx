import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const categories = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  function handleSearch(event) {
    event.preventDefault();
    navigate(`/search/${searchText}`);
  }
  return (
    <header>
      <Link to="/">Forside</Link>
      <Link to="/favorites">Favoritter</Link>
      <select
        value=""
        onChange={(event) => navigate(`/category/${event.target.value}`)}
      >
        <option value="" disabled>
          Kategorier
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <form onSubmit={handleSearch}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Søk etter bok"
        />
        <button type="submit">Søk</button>
      </form>
    </header>
  );
}
