import { useAppSelector } from "../app/hooks";
import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favorites.items);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Your Favorites
      </h1>

      {favorites.length === 0 ? (
        <p>No favorite recipes yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((recipe: any) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}