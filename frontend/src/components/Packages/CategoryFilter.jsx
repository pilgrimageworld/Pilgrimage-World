const CategoryFilter = ({ filter, setFilter, categories }) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setFilter(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === cat.id
              ? "bg-linear-to-r from-amber-600 to-orange-500 text-white"
              : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
          }`}
        >
          {cat.label}
          <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
            {cat.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
