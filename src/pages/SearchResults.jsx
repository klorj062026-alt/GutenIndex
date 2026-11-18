import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchBook } from "../axios/SearchgutenApi";
import { useState } from "react";

export default function SearchResults({ searchText }) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", searchText, page],
    queryFn: () => searchBook(searchText, page),
  });
  if (isLoading) return <p>Laster...</p>;
  if (isError) return <p>Feil...Prøv igjen...</p>;
  return (
    <>
      <h2>Søk: {searchText}</h2>
      <ul>
        {data.results.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={!data.previous}>
        Forrige
      </button>
      <span>Side {page}</span>
      <button onClick={() => setPage(page + 1)} disabled={!data.next}>
        Neste
      </button>
    </>
  );
}
