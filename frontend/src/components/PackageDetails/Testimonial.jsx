import { Heart } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="bg-linear-to-r from-amber-600 to-orange-500 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <Heart className="w-12 h-12 mx-auto mb-4" />
        <blockquote className="text-2xl italic mb-6 max-w-3xl mx-auto">
          "This pilgrimage transformed my life. Every moment was filled with
          divine grace and the arrangements were flawless."
        </blockquote>
        <p className="font-semibold">— Ramesh Kumar, Delhi</p>
      </div>
    </div>
  );
};

export default Testimonial;
