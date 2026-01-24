import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-amber-600 to-orange-500 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Journey With Purpose,
            <span className="block">
              <span className="text-white">Travel With</span>
              <span className="bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent">
                {" "}
                Faith
              </span>
            </span>
          </h1>
          <p className="text-xl mb-8 text-amber-100 leading-relaxed">
            For over 20 years, Pilgrimage World has been guiding souls on
            transformative journeys to sacred sites worldwide. We blend
            spiritual enrichment with seamless travel experiences.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Star className="h-5 w-5 text-yellow-300" fill="currentColor" />
            <span className="font-semibold">
              Over 20 Years of Spiritual Travel Expertise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
