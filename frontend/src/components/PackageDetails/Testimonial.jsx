import { Heart } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 to-orange-500 py-8 md:py-12 overflow-x-hidden">
      {/* Add overflow-x-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Add responsive padding */}
        <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" />
        <blockquote className="text-lg md:text-xl lg:text-2xl italic mb-4 md:mb-6 max-w-3xl mx-auto px-2">
          {/* Add px-2 for mobile */}
          "This pilgrimage transformed my life. Every moment was filled with
          divine grace and the arrangements were flawless."
        </blockquote>
        <p className="font-semibold text-sm md:text-base">
          — Ramesh Kumar, Delhi
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
