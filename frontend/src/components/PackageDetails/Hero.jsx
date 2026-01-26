import { Calendar, MapPin, Star } from "lucide-react";

const Hero = ({
  title,
  image,
  category,
  location,
  region,
  duration,
  rating,
  reviewCount,
}) => {
  return (
    <div className="relative h-[70vh] min-h-125 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-amber-900/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm font-medium">
              {category.toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-lg">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-amber-300" />
              <span className="font-semibold">{location}</span>
              <span className="text-gray-300 mx-2">|</span>
              <span className="text-amber-200">{region}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-amber-300" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{rating.toFixed(1)}</span>
              <span className="text-gray-300 mx-2">|</span>
              <span className="text-amber-200">{reviewCount} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
