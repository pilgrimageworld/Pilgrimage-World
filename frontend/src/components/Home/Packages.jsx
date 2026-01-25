import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      id: 1,
      slug: "do-dham-yatra",
      title: "Do Dham Yatra",
      category: "religious",
      location: "Kedarnath & Badrinath",
      duration: "6 Days / 5 Nights",
      image:
        "https://amazinghotels.co.in/wp-content/uploads/2025/04/Badrinath-Dham-Yatra.webp",
      highlights: [
        "Helicopter service available",
        "Premium accommodation",
        "Experienced guides",
        "All meals included",
      ],
      rating: 5.0,
    },
    {
      id: 2,
      slug: "char-dham-yatra",
      title: "Char Dham Yatra",
      category: "religious",
      location: "Complete Uttarakhand Circuit",
      duration: "12 Days / 11 Nights",
      image:
        "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=80&w=1170&auto=format&fit=crop&w=1200&60",
      highlights: [
        "All four dhams covered",
        "Luxury hotels",
        "Medical support",
        "Cultural programs",
      ],
      rating: 5.0,
    },
    {
      id: 3,
      slug: "hajj-package",
      title: "Hajj Package",
      category: "religious",
      location: "Mecca & Medina",
      duration: "15 Days / 14 Nights",
      image:
        "https://images.unsplash.com/photo-1605553378313-22d0dc541393?q=80&w=1974&auto=format&fit=crop&w=1200&60",
      highlights: [
        "Ministry approved",
        "5-star hotels",
        "Experienced mutawwif",
        "Group coordination",
      ],
      rating: 5.0,
    },
    {
      id: 4,
      slug: "umrah-package",
      title: "Umrah Package",
      category: "religious",
      location: "Mecca & Medina",
      duration: "10 Days / 9 Nights",
      image:
        "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Year-round availability",
        "Ziyarat tours included",
        "Comfortable transport",
        "Spiritual guidance",
      ],
      rating: 5.0,
    },
    {
      id: 5,
      slug: "kailash-mansarovar",
      title: "Kailash Mansarovar",
      category: "religious",
      location: "Tibet, China",
      duration: "14 Days / 13 Nights",
      image:
        "https://images.unsplash.com/photo-1606163338600-0e212c836bb3?q=80&w=1170&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Sacred parikrama",
        "Medical team",
        "Oxygen support",
        "Permits included",
      ],
      rating: 5.0,
    },
    {
      id: 6,
      slug: "vaishno-devi-yatra",
      title: "Vaishno Devi Yatra",
      category: "religious",
      location: "Jammu & Kashmir",
      duration: "4 Days / 3 Nights",
      image:
        "https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?q=80&w=1931&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Helicopter options",
        "VIP darshan",
        "Comfortable hotels",
        "Local sightseeing",
      ],
      rating: 5.0,
    },
    {
      id: 7,
      slug: "amarnath-yatra",
      title: "Amarnath Yatra",
      category: "religious",
      location: "Jammu & Kashmir",
      duration: "7 Days / 6 Nights",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS0DgJujf_00a7Wz5zxwfxvmXnWfsKZNIN7UaRCE8fLd7UdnOwVUp3uV9TW-sirb-Bwt5eqYynnv46VeJ6KInxPyiqP6Pu4ik-Y2t7zrf977y0fqcOP65NwL3xSs6GlQxkA2Ptof056rQ/s1600/Lord_Amarnath.jpg",
      highlights: [
        "Helicopter & trekking options",
        "Medical assistance",
        "Secure base camps",
        "Experienced yatra guides",
      ],
      rating: 5.0,
    },
    {
      id: 8,
      slug: "vrindavan-mathura-yatra",
      title: "Vrindavan Mathura Yatra",
      category: "religious",
      location: "Uttar Pradesh",
      duration: "3 Days / 2 Nights",
      image:
        "https://images.unsplash.com/photo-1662376107358-21296a9234f1?q=80&w=2126&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Krishna Janmabhoomi visit",
        "Banke Bihari ji darshan",
        "Yamuna aarti",
        "Comfortable stay",
      ],
      rating: 5.0,
    },
    {
      id: 9,
      slug: "golden-temple-yatra",
      title: "Golden Temple Yatra",
      category: "religious",
      location: "Amritsar, Punjab",
      duration: "3 Days / 2 Nights",
      image:
        "https://images.unsplash.com/photo-1623059508779-2542c6e83753?q=80&w=627&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Sri Harmandir Sahib visit",
        "Langar experience",
        "Wagah Border ceremony",
        "City sightseeing",
      ],
      rating: 5.0,
    },
  ];

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
          {packages.map((pkg) => (
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

                <Link
                  to={`/package/${pkg.slug}`}
                  className="w-full bg-linear-to-r from-amber-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition flex items-center justify-center group cursor-pointer"
                >
                  View Details
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
