import {
  Calendar,
  Filter,
  MapPin,
  Play,
  Quote,
  Star,
  Users,
} from "lucide-react";

const TestimonialGrid = ({ filter }) => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      location: "New York, USA",
      journey: "Camino de Santiago",
      date: "September 2023",
      duration: "14 Days",
      groupSize: "Small Group (12 people)",
      rating: 5,
      text: "This was more than a pilgrimage—it was a life-changing experience. The spiritual guidance, the carefully curated route, and the attention to detail were exceptional. Our guide, Maria, had profound knowledge of the Camino's history and made every step meaningful.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      category: "international",
      featured: true,
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai, India",
      journey: "Char Dham Yatra",
      date: "May 2023",
      duration: "21 Days",
      groupSize: "Private Family Tour",
      rating: 5,
      text: "As a family, we wanted a spiritual journey that was also comfortable and well-organized. Pilgrimage World exceeded our expectations. They handled all logistics perfectly, allowing us to focus entirely on our spiritual experience. The accommodations near the temples were excellent.",
      image:
        "https://images.unsplash.com/photo-1626193081943-7edeae05ef83?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "national",
      featured: true,
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      location: "Mexico City, Mexico",
      journey: "Holy Land Pilgrimage",
      date: "March 2023",
      duration: "10 Days",
      groupSize: "Small Group (15 people)",
      rating: 5,
      text: "Visiting the Holy Land has been a dream for decades. Pilgrimage World made it a reality with such depth and meaning. Our guide's knowledge of biblical history brought every site to life. The spiritual reflections each evening were profoundly moving.",
      image:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "international",
      featured: false,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      location: "London, UK",
      journey: "Varanasi & Bodhgaya",
      date: "November 2022",
      duration: "12 Days",
      groupSize: "Solo Traveler",
      rating: 5,
      text: "Traveling alone as a woman, I had concerns about safety. Pilgrimage World provided exceptional care and support throughout. My guide was with me every step, and I never felt alone. The spiritual depth of the journey was transformative.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400",
      category: "international",
      featured: false,
    },
    {
      id: 5,
      name: "Robert Chen",
      location: "Singapore",
      journey: "Mount Kailash",
      date: "August 2022",
      duration: "18 Days",
      groupSize: "Adventure Group (8 people)",
      rating: 5,
      text: "The Mount Kailash trek was challenging but Pilgrimage World made it accessible. The support team was incredible—porters, cooks, and guides all worked seamlessly. The spiritual significance of the journey was enhanced by our guide's deep understanding of Tibetan Buddhism.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      category: "adventure",
      featured: true,
    },
    {
      id: 6,
      name: "Fatima Al-Mansoori",
      location: "Dubai, UAE",
      journey: "Umrah Pilgrimage",
      date: "January 2023",
      duration: "7 Days",
      groupSize: "Family Group",
      rating: 5,
      text: "Our Umrah was perfectly organized from arrival to departure. The proximity to Haram, the knowledgeable guides, and the spiritual preparation sessions made this journey deeply meaningful for our entire family. We felt cared for every moment.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      category: "religious",
      featured: false,
    },
    {
      id: 7,
      name: "James Wilson",
      location: "Sydney, Australia",
      journey: "Japanese Temple Pilgrimage",
      date: "April 2023",
      duration: "16 Days",
      groupSize: "Couple",
      rating: 5,
      text: "The blend of Zen Buddhism, beautiful temples, and cultural immersion was perfect. Our guide's understanding of Japanese spirituality enriched every temple visit. The ryokan stays added authentic cultural experience.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      category: "cultural",
      featured: false,
    },
    {
      id: 8,
      name: "Elena Petrova",
      location: "Moscow, Russia",
      journey: "Mount Athos",
      date: "June 2023",
      duration: "8 Days",
      groupSize: "Women's Group",
      rating: 5,
      text: "Although women cannot enter Mount Athos, Pilgrimage World created a beautiful spiritual journey around it with visits to monasteries accessible to women, boat tours along the coast, and meaningful spiritual discussions with nuns.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      category: "cultural",
      featured: false,
    },
  ];

  const filteredTestimonials =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) =>
          filter === "featured" ? t.featured : t.category === filter,
        );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  console.log("Filtered Testimonials:", filteredTestimonials);

  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-amber-100"
          >
            {/* Header */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                {testimonial.featured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-amber-600 to-orange-500 text-white">
                    Featured
                  </span>
                )}
              </div>

              {/* Journey Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-amber-50 rounded-xl">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Journey</div>
                  <div className="font-bold text-gray-900">
                    {testimonial.journey}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Duration</div>
                  <div className="font-bold text-gray-900">
                    {testimonial.duration}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Date</div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-600" />
                    <span className="font-bold text-gray-900">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Group Size</div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-600" />
                    <span className="font-bold text-gray-900">
                      {testimonial.groupSize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <span className="ml-2 font-bold text-gray-900">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial Text */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-amber-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-linear-to-r from-amber-50 to-orange-50 border-t border-amber-200">
              <div className="text-center">
                <span className="text-gray-700 font-medium">
                  Category:
                  <span className="text-amber-600 font-bold ml-2 capitalize">
                    {testimonial.category}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex p-4 bg-linear-to-r from-amber-600 to-orange-500 rounded-full mb-4">
            <Filter className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No testimonials found
          </h3>
          <p className="text-gray-700">
            Try selecting a different filter category
          </p>
        </div>
      )}
    </section>
  );
};

export default TestimonialGrid;
