// components/Testimonials.js
import React, { useState } from "react";
import {
  Star,
  Quote,
  MapPin,
  Calendar,
  Users,
  Filter,
  Play,
  Heart,
  Award,
  Globe,
} from "lucide-react";

const Testimonials = () => {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

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
      videoId: "Lw8JxYkLvMc",
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
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      videoId: "dQw4w9WgXcQ",
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
        "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400",
      videoId: null,
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
      videoId: null,
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
      videoId: "abc123",
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
      videoId: null,
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
      videoId: null,
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
      videoId: "def456",
      category: "cultural",
      featured: false,
    },
  ];

  const stats = [
    {
      value: "4.9/5",
      label: "Average Rating",
      icon: <Star className="h-6 w-6" />,
    },
    {
      value: "5,000+",
      label: "Happy Pilgrims",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      value: "98%",
      label: "Would Recommend",
      icon: <Award className="h-6 w-6" />,
    },
    {
      value: "50+",
      label: "Countries Served",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  const categories = [
    { id: "all", label: "All Testimonials" },
    { id: "featured", label: "Featured Stories" },
    { id: "international", label: "International" },
    { id: "national", label: "National" },
    { id: "religious", label: "Religious" },
    { id: "cultural", label: "Cultural" },
    { id: "adventure", label: "Adventure" },
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

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <div className="inline-flex p-3 bg-linear-to-r from-amber-600 to-orange-500 rounded-xl mb-4">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Pilgrim Stories
            </h2>
            <div className="flex items-center space-x-2 text-gray-700">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter by:</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-linear-to-r from-amber-600 to-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-amber-50 border border-amber-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
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
                      <div className="text-sm text-gray-600 mb-1">
                        Group Size
                      </div>
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
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
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

                  {/* Video Preview */}
                  {testimonial.videoId && (
                    <div className="mb-6">
                      <div
                        className="relative rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setActiveVideo(testimonial.videoId)}
                      >
                        <div className="aspect-video bg-linear-to-r from-amber-600 to-orange-500 flex items-center justify-center">
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                          <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-amber-600 ml-1" />
                          </div>
                          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                            Watch Story
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Testimonial Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Share Your Journey</h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Have you traveled with us? We'd love to hear about your pilgrimage
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/submit-testimonial"
                className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Share Your Story
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </a>
              <a
                href="/gallery"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors duration-300 inline-flex items-center justify-center"
              >
                View Photo Gallery
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Are the testimonials verified?",
                a: "Yes, all testimonials come from verified customers who have completed journeys with us. We follow up with pilgrims after their return to gather genuine feedback.",
              },
              {
                q: "Can I contact previous pilgrims?",
                a: "With their permission, we can connect you with pilgrims who have taken similar journeys. Many are happy to share their experiences.",
              },
              {
                q: "How are pilgrims selected for featured stories?",
                a: "Featured stories represent diverse journeys, demographics, and particularly transformative experiences that highlight different aspects of pilgrimage travel.",
              },
              {
                q: "Can I submit photos/videos with my testimonial?",
                a: "Absolutely! We encourage pilgrims to share photos and videos. Some may even be featured on our website with your permission.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
