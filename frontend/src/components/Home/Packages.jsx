import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: 1,
      slug: "do-dham-yatra",
      title: "Do Dham Yatra",
      location: "Kedarnath & Badrinath",
      duration: "6 Days / 5 Nights",
      image:
        "https://images.pexels.com/photos/35536244/pexels-photo-35536244.jpeg?_gl=1*11k8evp*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI2MjQkajQ5JGwwJGgw",
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
      location: "Complete Uttarakhand Circuit",
      duration: "12 Days / 11 Nights",
      image:
        "https://images.pexels.com/photos/27170153/pexels-photo-27170153.jpeg?_gl=1*sa1xxb*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI2OTgkajQ4JGwwJGgw",
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
      location: "Mecca & Medina",
      duration: "15 Days / 14 Nights",
      image:
        "https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?_gl=1*knxgsv*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI3NTckajUzJGwwJGgw",
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
      location: "Mecca & Medina",
      duration: "10 Days / 9 Nights",
      image:
        "https://images.pexels.com/photos/34498854/pexels-photo-34498854.jpeg?_gl=1*1ib4yeu*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI3OTckajEzJGwwJGgw",
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
      location: "Tibet, China",
      duration: "14 Days / 13 Nights",
      image:
        "https://images.pexels.com/photos/33330138/pexels-photo-33330138.jpeg?_gl=1*1d2w5vm*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI4NjUkajEyJGwwJGgw",
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
      location: "Jammu & Kashmir",
      duration: "4 Days / 3 Nights",
      image:
        "https://images.pexels.com/photos/12738180/pexels-photo-12738180.jpeg?_gl=1*3jh9kj*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI5MTckajM0JGwwJGgw",
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
      location: "Jammu & Kashmir",
      duration: "7 Days / 6 Nights",
      image:
        "https://images.pexels.com/photos/13917231/pexels-photo-13917231.jpeg?_gl=1*tid5n2*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI5OTAkajIyJGwwJGgw",
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
      location: "Uttar Pradesh",
      duration: "3 Days / 2 Nights",
      image:
        "https://images.pexels.com/photos/31089350/pexels-photo-31089350.jpeg?_gl=1*r6fsc7*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjMwMjMkajQ5JGwwJGgw",
      highlights: [
        "Krishna Janmabhoomi visit",
        "Banke Bihari ji darshan",
        "Yamuna aarti",
        "Comfortable stay",
      ],
      rating: 4.9,
    },
    {
      id: 9,
      slug: "golden-temple-yatra",
      title: "Golden Temple Yatra",
      location: "Amritsar, Punjab",
      duration: "3 Days / 2 Nights",
      image:
        "https://images.pexels.com/photos/28905559/pexels-photo-28905559.jpeg?_gl=1*1w8155l*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjMwNzkkajU3JGwwJGgw",
      highlights: [
        "Sri Harmandir Sahib visit",
        "Langar experience",
        "Wagah Border ceremony",
        "City sightseeing",
      ],
      rating: 4.8,
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

                <button className="w-full bg-linear-to-r from-amber-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition flex items-center justify-center group">
                  View Details
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
