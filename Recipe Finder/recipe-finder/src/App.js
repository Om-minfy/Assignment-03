import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import FavoritesPage from "./components/FavoritesPage";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    setErrorMessage("");

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
          setErrorMessage(`No recipes found for "${query}".`);
        }
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage("Something went wrong. Try again later.");
      });
  }, [query]);

  return (
    <div className="App">
      <nav style={{ textAlign: "center", marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>🔍 Search</Link>
        <Link to="/favorites">❤️ Favorites</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>🍽️ Recipe Finder</h1>
              <SearchBar onSearch={setQuery} />
              {isLoading && <p className="info-text">🔎 Searching for recipes...</p>}
              {errorMessage && <p className="info-text error">{errorMessage}</p>}
              {!isLoading && !errorMessage && recipes.length > 0 && (
                <RecipeList recipes={recipes} />
              )}
            </>
          }
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
