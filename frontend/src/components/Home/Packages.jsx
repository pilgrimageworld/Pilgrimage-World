import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import packages from "../../data/packages.json";

const Packages = () => {
  const navigate = useNavigate();

  // show only first 9 packages
  const visiblePackages = packages.slice(0, 9);

  const handleNavigate = (slug) => {
    navigate(`/package/${slug}`);
  };

  return (
    <section id="packages" className="py-16 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Pilgrimage Packages
          </h2>
          <p className="text-lg text-gray-600">
            Carefully curated spiritual journeys for every devotee
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handleNavigate(pkg.slug)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(pkg.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({pkg.rating})
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {pkg.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.location}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>

                {/* Highlights */}
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

                {/* CTA */}
                <div className="w-full bg-linear-to-r from-amber-600 to-orange-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center group-hover:from-amber-700 group-hover:to-orange-600 transition">
                  View Details
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 bg-linear-to-r from-amber-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition"
          >
            Explore More Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;
