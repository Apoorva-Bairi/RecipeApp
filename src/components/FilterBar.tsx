export default function FilterBar({ onFilter, active }: any) {
  const categories = ["All", "Chicken", "Beef", "Dessert"];

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`px-3 py-1 rounded transition ${
            active === cat
              ? "bg-orange-500 text-white"
              : "bg-gray-200 hover:bg-orange-400 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}