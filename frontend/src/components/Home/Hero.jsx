import { Globe, Heart, MapPin, Users, Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "./assets/images/hero-1.jpg",
      title: "Himalayan Pilgrimages",
      subtitle: "Journey to the abode of gods",
    },
    {
      url: "./assets/images/hero-2.jpg",
      title: "Sacred Mecca & Medina",
      subtitle: "Experience spiritual awakening",
    },
    {
      url: "./assets/images/hero-3.jpg",
      title: "Divine Temples",
      subtitle: "Connect with ancient spirituality",
    },
    {
      url: "./assets/images/hero-4.jpg",
      title: "Buddhist Heritage",
      subtitle: "Walk the path of mindfulness and peace",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Service",
      description:
        "Serving pilgrims from over 50 countries worldwide with multilingual support",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Spiritual Guidance",
      description:
        "Experienced guides who understand the religious significance of each journey",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Premium Locations",
      description:
        "Carefully selected accommodations near sacred sites for your convenience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group & Private Tours",
      description:
        "Flexible options for solo travelers, families, and large groups",
    },
  ];
  return (
    <section id="home" className="pt-16 pb-16 px-4">
      <div className=" mx-auto my-8">
        {/* Carousel */}
        <div className="relative h-150 rounded-3xl overflow-hidden mb-16 shadow-2xl">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
                  {image.title}
                </h2>
                <p className="text-2xl md:text-3xl opacity-90 animate-fadeIn">
                  {image.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Search Bar */}
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 z-20">
            <div className="mx-auto w-full sm:w-105 md:w-130">
              <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search destinations, packages, or experiences..."
                  className="flex-1 px-5 py-3 text-gray-700 focus:outline-none text-sm md:text-base"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 transition cursor-pointer">
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div> */}

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={"/packages"}
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Packages
            </Link>
            <Link
              to={"/contact"}
              className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition border-2 border-amber-600 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Feature Cards with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-amber-600 flex justify-center mb-4 transform transition-transform hover:scale-110 hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
