import { useParams } from "react-router-dom";
import CategoryResults from "../components/CategoryResults";

export default function CategoryPage() {
  const { topic } = useParams();
  return <CategoryResults key={topic} topic={topic} />;
}
