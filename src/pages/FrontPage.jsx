import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchBook } from "../axios/SearchGutenApi";

export default function FrontPage() {
  const [randomNumber] = useState(() => Math.random());
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular"],
    queryFn: () => searchBook(),
  });

  if (isLoading) return <p>Laster...</p>;
  if (isError) return <p>Feil... Prøv igjen senere...</p>;

  const randomBook =
    data.results[Math.floor(randomNumber * data.results.length)];

  return (
    <>
      <h2>Guten Index Page</h2>
      <h3>Random bok</h3>
      <Link to={`/book/${randomBook.id}`}>
        <img src={randomBook.formats["image/jpeg"]} alt={randomBook.title} />
        <p>{randomBook.title}</p>
      </Link>
    </>
  );
}
