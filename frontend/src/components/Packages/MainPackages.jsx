import { ArrowRight, Calendar, Filter, MapPin, Star } from "lucide-react";
import PackageCard from "./PackageCard";

const MainPackages = ({ filter, filteredPackages, setFilter, categories }) => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              All Pilgrimage Packages
            </h2>
            <p className="text-gray-600">
              Filter by your spiritual interests and preferences
            </p>
          </div>
        </div>
        {/* Category Filter */}

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

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({pkg.rating})
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.highlights.slice(0, 3).map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="text-amber-600 mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-linear-to-r from-amber-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition flex items-center justify-center group">
                  View Details
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              No packages found for this category
            </div>
            <button
              onClick={() => setFilter("all")}
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              View all packages
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainPackages;
