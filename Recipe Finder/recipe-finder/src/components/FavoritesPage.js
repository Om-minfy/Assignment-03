import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "./RecipeCard";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>❤️ Your Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>You haven’t added any favorites yet.</p>
      ) : (
        <div className="recipe-list">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;