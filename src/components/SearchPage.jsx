import { useParams } from "react-router-dom";
import SearchResults from "../pages/SearchResults";

export default function SearchPage() {
  const { searchText } = useParams();
  return <SearchResults key={searchText} searchText={searchText} />;
}
