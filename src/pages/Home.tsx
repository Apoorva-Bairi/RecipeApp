import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getRecipes, getRecipesByCategory  } from "../features/recipes/recipesSlice";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const dispatch = useAppDispatch();
  const { recipes, loading } = useAppSelector((state) => state.recipes);

  const [search, setSearch] = useState("chicken");
  const [filter, setFilter] = useState("All");
  const DEFAULT_QUERY = "chicken";

  useEffect(() => {
  dispatch(getRecipes(search || DEFAULT_QUERY));
    }, [search, dispatch]);

  const handleFilter = (category: string) => {
  setFilter(category);

  if (category === "All") {
    setSearch(DEFAULT_QUERY);
    dispatch(getRecipes(search || DEFAULT_QUERY));
  } else {
    dispatch(getRecipesByCategory(category));
  }
};

if (loading) {
  return <p>Loading...</p>;
}

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Recipes</h1>

      <SearchBar onSearch={setSearch} />
      {/* <FilterBar onFilter={setFilter} /> */}
     <FilterBar onFilter={handleFilter} active={filter} />

      {loading && <p>Loading...</p>}

      {!loading && recipes.length === 0 && (
            <p>No recipes found</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recipes.map((recipe: any) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
            </div>
      </div>
    
  );
}