import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import FrontPage from "./pages/FrontPage";
// import FavouritesContext from "./context/FavouritesContext";
import BookDetails from "./pages/BookDetails";
import CategoryPage from "./pages/CategoryPage";
import Favourites from "./pages/Favourites";
import SearchPage from "./components/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
      {
        path: "category/:topic",
        element: <CategoryPage />,
      },
      {
        path: "favorites",
        element: <Favourites />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
      {
        path: "search/:searchText",
        element: <SearchPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
