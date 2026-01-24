import { Star, Quote, Users, Globe, Heart, Award } from "lucide-react";

const TestimonialHero = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "My pilgrimage to Jerusalem with Pilgrimage World was a life-changing experience. The spiritual guidance combined with flawless logistics made it truly unforgettable.",
      author: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "As a first-time pilgrim, I was nervous about traveling to Mecca. The team's expertise and care made me feel secure and spiritually connected throughout the journey.",
      author: "Ahmed Hassan",
      location: "Dubai, UAE",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The Camino de Santiago trip was perfectly balanced between spiritual reflection and physical challenge. I returned home renewed and inspired.",
      author: "Maria Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
    },
  ];

  const stats = [
    {
      id: 1,
      value: "15,000+",
      label: "Pilgrims Served",
      icon: Users,
      color: "text-amber-200",
    },
    {
      id: 2,
      value: "40+",
      label: "Sacred Destinations",
      icon: Globe,
      color: "text-orange-200",
    },
    {
      id: 3,
      value: "98%",
      label: "Satisfaction Rate",
      icon: Heart,
      color: "text-red-200",
    },
    {
      id: 4,
      value: "25+",
      label: "Awards Won",
      icon: Award,
      color: "text-yellow-200",
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 text-yellow-300" fill="currentColor" />
    ));
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-amber-600 to-orange-500 text-white py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <Quote size={120} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Voices of
              <span className="block">
                <span className="text-white">Transformation &</span>
                <span className="bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  {" "}
                  Spiritual Growth
                </span>
              </span>
            </h1>
            <p className="text-xl mb-8 text-amber-100 leading-relaxed max-w-3xl mx-auto">
              Hear from pilgrims whose lives have been changed through our
              sacred journeys. For over two decades, we've been honored to
              facilitate spiritual connections across the globe.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="h-5 w-5 text-yellow-300" fill="currentColor" />
              <span className="font-semibold">
                Trusted by thousands of spiritual seekers worldwide
              </span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <Quote className="h-8 w-8 text-amber-200 mb-4 opacity-70" />
                <p className="text-lg italic mb-6 text-amber-50">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-white/20">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-amber-200 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-linear-to-r from-amber-800/40 to-orange-700/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Journey in Numbers
              <span className="block text-amber-100 text-xl font-normal mt-2">
                Two decades of faithful service
              </span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-white/10 ${stat.color}`}
                    >
                      <stat.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-amber-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-10 pt-8 border-t border-white/20 text-center">
              <p className="text-amber-100">
                <span className="font-bold text-white">20+ Years</span> of
                creating meaningful pilgrimage experiences •
                <span className="font-bold text-white"> 50+</span> Expert
                spiritual guides •
                <span className="font-bold text-white"> 100%</span> Tailored
                spiritual itineraries
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <button className="bg-white text-amber-700 hover:bg-amber-50 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Spiritual Journey
            </button>
            <p className="text-amber-100 mt-4">
              Join our community of faithful travelers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHero;
