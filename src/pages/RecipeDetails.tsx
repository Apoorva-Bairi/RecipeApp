import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getRecipeDetails } from "../features/recipes/recipesSlice";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

export default function RecipeDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedRecipe, loading } = useAppSelector(
    (state) => state.recipes
  );

  const favorites = useAppSelector((state) => state.favorites.items);

  useEffect(() => {
    if (id) dispatch(getRecipeDetails(id));
  }, [id, dispatch]);

  if (loading || !selectedRecipe) {
    return <p>Loading...</p>;
  }

  const recipe = selectedRecipe;

  
  const isFavorite = favorites.some(
    (item: any) => item.idMeal === recipe.idMeal
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.idMeal));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
   
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-6">
      
        <div>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full rounded shadow"
          />
        </div>

        <div>
      
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">
              {recipe.strMeal}
            </h1>

            <button
              onClick={handleFavorite}
              className={`px-4 py-2 rounded ${
                isFavorite
                  ? "bg-red-500 text-white"
                  : "bg-orange-500 text-white"
              }`}
            >
              {isFavorite ? "❤️ Saved" : "♡ Save"}
            </button>
          </div>

          <p className="text-gray-500 mb-4">
            Category: {recipe.strCategory}
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Ingredients
          </h2>

          <ul className="list-disc ml-5 mb-4 max-h-48 overflow-y-auto">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = recipe[`strIngredient${i + 1}`];
              const measure = recipe[`strMeasure${i + 1}`];

              if (!ingredient) return null;

              return (
                <li key={i}>
                  {ingredient} - {measure}
                </li>
              );
            })}
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            Instructions
          </h2>

          <p className="mb-4 text-sm leading-relaxed max-h-48 overflow-y-auto">
            {recipe.strInstructions}
          </p>
        </div>
      </div>
      
    {recipe.strYoutube && (
        <div className="mt-6">
          <iframe
            className="w-full h-72 rounded"
            src={recipe.strYoutube.replace("watch?v=", "embed/")}
            title="Recipe Video"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}