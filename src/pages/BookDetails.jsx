import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBook } from "../axios/bookApi";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function BookDetails() {
  const { id } = useParams();
  const { favorites, setFavorites } = useContext(FavouritesContext);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBook(id),
    retry: 3,
  });
  if (isLoading) return <p>Laster...</p>;
  if (isError) return <p>Feil... Prøv igjen senere...</p>;
  const isFavorite = favorites.some((fav) => fav.id === data.id);
  function toggleFavorite() {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== data.id));
    } else {
      setFavorites([...favorites, data]);
    }
  }
  console.log(data.formats["image/jpeg"]);
  return (
    <div className="book-details">
      <h2>{data.title}</h2>
      <a href={data.formats["text/html"]} target="_blank" rel="noreferrer">
        Les boka
      </a>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Fjern fra favoritter" : "Legg til i favoritter"}
      </button>
      <img src={data.formats["image/jpeg"]} alt={data.title} />
      <p>Forfatter: {data.authors[0]?.name}</p>
      <p>Nedlastninger: {data.download_count}</p>
      <p>Språk: {data.languages.join(", ")}</p>
      <p>Kategori: {data.subjects[0]}</p>
    </div>
  );
}
