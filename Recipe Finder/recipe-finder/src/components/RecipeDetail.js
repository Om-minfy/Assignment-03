import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./RecipeDetail.css";

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { favorites, dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        }
      });
  }, [recipeId]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  const isFavorited = favorites.some((fav) => fav.idMeal === recipe?.idMeal);

  const handleToggleFavorite = () => {
    if (!recipe) return;
    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: recipe.idMeal });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: recipe });
    }
  };

  if (!recipe) return <p className="info-text">Loading recipe...</p>;

  return (
    <div className="recipe-detail">
      <Link to="/" className="back-link">← Back to Search</Link>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <button className="fav-btn" onClick={handleToggleFavorite}>
        {isFavorited ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
      </button>
      <h3>Ingredients</h3>
      <ul>
        {getIngredients().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;