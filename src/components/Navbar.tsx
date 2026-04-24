import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-500">
          🍽 RecipeApp
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/favorites" className="hover:text-orange-500">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
