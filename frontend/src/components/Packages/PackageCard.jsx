import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";
import PackageHighlights from "./PackageHighlights";
import { Link } from "react-router-dom";

const PackageCard = ({ pkg, onSelect }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
      onClick={() => onSelect(pkg)}
    >
      <PackageImage image={pkg.image} alt={pkg.title} />

      <div className="p-6">
        <PackageRating rating={pkg.rating} />

        <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>

        <PackageInfo location={pkg.location} duration={pkg.duration} />

        <PackageHighlights highlights={pkg.highlights} />

        <ViewDetailsButton slug={pkg.slug} />
      </div>
    </div>
  );
};

const PackageImage = ({ image, alt }) => (
  <div className="relative overflow-hidden h-56">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
    />
  </div>
);

const PackageRating = ({ rating }) => (
  <div className="flex items-center gap-1 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))}
    <span className="text-sm text-gray-600 ml-2">({rating})</span>
  </div>
);

const PackageInfo = ({ location, duration }) => (
  <>
    <div className="flex items-center text-gray-600 mb-1">
      <MapPin className="w-4 h-4 mr-2" />
      <span className="text-sm">{location}</span>
    </div>
    <div className="flex items-center text-gray-600 mb-4">
      <Calendar className="w-4 h-4 mr-2" />
      <span className="text-sm">{duration}</span>
    </div>
  </>
);

const ViewDetailsButton = ({ slug }) => (
  <Link
    to={`/${slug}`}
    className="w-full bg-linear-to-r from-amber-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition flex items-center justify-center group cursor-pointer"
  >
    View Details
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
  </Link>
);

export default PackageCard;
