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
    <div className="relative h-[70vh] min-h-125 overflow-x-hidden">
      {/* Add overflow-x-hidden here */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Fix gradient classes - remove hyphens */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-amber-900/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 text-white">
        {/* Add px-4 for mobile padding */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-xs md:text-sm font-medium">
              {category.toUpperCase()}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-6 text-base md:text-lg">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2 text-amber-300" />
              <span className="font-semibold">{location}</span>
              <span className="text-gray-300 mx-2 hidden sm:inline">|</span>
              <span className="text-amber-200 block sm:inline mt-1 sm:mt-0">
                {region}
              </span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 text-amber-300" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      i < Math.floor(rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-sm md:text-base">
                {rating.toFixed(1)}
              </span>
              <span className="text-gray-300 mx-2">|</span>
              <span className="text-amber-200 text-sm md:text-base">
                {reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
