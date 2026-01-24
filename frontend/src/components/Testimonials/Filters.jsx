import { Filter } from "lucide-react";
const Filters = ({ filter, setFilter }) => {
  const categories = [
    { id: "all", label: "All Testimonials" },
    { id: "featured", label: "Featured Stories" },
    { id: "international", label: "International" },
    { id: "national", label: "National" },
    { id: "religious", label: "Religious" },
    { id: "cultural", label: "Cultural" },
    { id: "adventure", label: "Adventure" },
  ];
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Pilgrim Stories</h2>
        <div className="flex items-center space-x-2 text-gray-700">
          <Filter className="h-5 w-5" />
          <span className="font-medium">Filter by:</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === category.id
                ? "bg-linear-to-r from-amber-600 to-orange-500 text-white"
                : "bg-white text-gray-700 hover:bg-amber-50 border border-amber-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Filters;
