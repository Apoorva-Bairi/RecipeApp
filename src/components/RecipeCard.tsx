// import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import {
//   addFavorite,
//   removeFavorite,
// } from "../features/favorites/favoritesSlice";

// export default function RecipeCard({ recipe }: any) {
//   const dispatch = useAppDispatch();
//   const favorites = useAppSelector((state) => state.favorites.items);

//   const isFavorite = favorites.some(
//     (item: any) => item.idMeal === recipe.idMeal
//   );

//   const handleFavorite = (e: React.MouseEvent) => {
//     e.preventDefault(); // 🚨 stops Link navigation
//     e.stopPropagation(); // 🚨 extra safety

//     if (isFavorite) {
//       dispatch(removeFavorite(recipe.idMeal));
//     } else {
//       dispatch(addFavorite(recipe));
//     }
//   };

//   return (
//     <Link to={`/recipe/${recipe.idMeal}`}>
//       <div className="relative bg-white rounded shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
        
    

//         <img
//           src={recipe.strMealThumb}
//           alt={recipe.strMeal}
//           className="w-full h-48 object-cover"
//         />

//         <div className="p-3">
//           <h2 className="font-semibold">{recipe.strMeal}</h2>
//           <p className="text-sm text-gray-500">
//             {recipe.strCategory}
//           </p>
        
//             {/* ❤️ Favorite Button */}
        

//         </div>
       
//       </div>
      

//     </Link>
//   );
// }
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

export default function RecipeCard({ recipe }: any) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  const isFavorite = favorites.some(
    (item: any) => item.idMeal === recipe.idMeal
  );

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // 🚨 stops navigation
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavorite(recipe.idMeal));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
        
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />

        <div className="p-3 space-y-2">
  
  {/* Title + Favorite Button Row */}
  <div className="flex justify-between items-center">
    <h2 className="font-semibold text-md">
      {recipe.strMeal}
    </h2>

   <button
  onClick={handleFavorite}
  className={`w-8 h-8 flex items-center justify-center rounded-full border transition ${
    isFavorite
      ? "bg-red-300 text-white border-red-300"
      : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
  }`}
>
  {isFavorite ? "❤️" : "🤍"}
</button>
  </div>

  <p className="text-sm text-gray-500">
    {recipe.strCategory}
  </p>
</div>
      </div>
    </Link>
  );
}


//  <button
//           onClick={handleFavorite}
//           className={` ${
//   isFavorite
//     ? "bg-red-500 text-white"
//     : "bg-white text-gray-700"
// }`}
//         >
//           {isFavorite ? "❤️" : "🤍"}
//         </button>