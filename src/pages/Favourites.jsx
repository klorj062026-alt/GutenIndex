import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../context/FavouritesContext";

export default function Favourites() {
  const { favorites } = useContext(FavouritesContext);
  return (
    <>
      <h2>Favoritter</h2>
      {favorites.length === 0 && <p>Ingen favoritter</p>}
      <ul>
        {favorites.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}> {book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
