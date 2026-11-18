import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { topicBook } from "../axios/topicGutenApi";

export default function CategoryResults({ topic }) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", topic, page],
    queryFn: () => topicBook(topic, page),
  });

  if (isLoading) return <p>Laster...</p>;
  if (isError) return <p>Feil... Prøv igjen senere...</p>;

  return (
    <>
      <h2>{topic}</h2>
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
      <span> Side {page} </span>
      <button onClick={() => setPage(page + 1)} disabled={!data.next}>
        Neste
      </button>
    </>
  );
}
