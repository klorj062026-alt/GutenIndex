import { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <FavouritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavouritesContext.Provider>
  );
}
