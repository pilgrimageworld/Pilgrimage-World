import React, { useState } from "react";
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Heart,
  Share2,
  Download,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock data - in real app, fetch from API based on id
  const packageData = {
    id: 1,
    title: "Camino de Santiago Classic",
    subtitle: "A Transformative Journey Through Northern Spain",
    category: "spiritual",
    duration: "14 Days / 13 Nights",
    groupSize: "Small Group (8-12 pilgrims)",
    price: 2899,
    originalPrice: 3399,
    discount: 15,
    rating: 4.9,
    reviews: 128,
    difficulty: "Moderate",
    startPoint: "Saint-Jean-Pied-de-Port, France",
    endPoint: "Santiago de Compostela, Spain",
    nextDeparture: "April 15, 2024",
    spotsLeft: 4,

    highlights: [
      "Complete French Way - 800km historic route",
      "Pilgrim's Passport with official stamps",
      "Luxury boutique hotels & paradors",
      "Daily spiritual guidance sessions",
      "Traditional Spanish cuisine included",
      "24/7 support vehicle & medical staff",
      "Certificate of Completion",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        description:
          "Arrive in Saint-Jean-Pied-de-Port, orientation meeting, group dinner",
      },
      {
        day: 2,
        title: "The Pyrenees Crossing",
        description:
          "Cross into Spain through the Roncesvalles Pass, first pilgrim's stamp",
      },
      {
        day: 3,
        title: "Pamplona Exploration",
        description: "Walking tour of Pamplona's historic sites and cathedral",
      },
      // ... more days
    ],

    inclusions: [
      "Round-trip international flights",
      "All accommodation (4-star & luxury properties)",
      "All meals (breakfast, lunch, dinner)",
      "Expert spiritual guide throughout",
      "Daily yoga and meditation sessions",
      "All transportation during the journey",
      "Travel insurance with medical coverage",
      "Pilgrim's kit (backpack, walking sticks, guidebook)",
    ],

    exclusions: [
      "Personal expenses & souvenirs",
      "Visa fees (if applicable)",
      "Optional activities",
      "Alcoholic beverages",
      "Tips for guides and staff",
    ],

    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Life-changing experience! The spiritual guidance was exceptional.",
      },
      {
        name: "Michael T.",
        rating: 5,
        date: "1 month ago",
        comment:
          "Perfect balance of challenge and comfort. Highly recommended!",
      },
      {
        name: "Priya K.",
        rating: 4,
        date: "2 months ago",
        comment:
          "Beautiful journey. The guides were knowledgeable and supportive.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <button
          onClick={() => navigate("/packages")}
          className="flex items-center text-gray-600 hover:text-amber-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Packages
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Package Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-wrap items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-linear-to-r from-amber-500 to-orange-400 text-white rounded-full text-sm font-semibold">
                      {packageData.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {packageData.difficulty} Difficulty
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {packageData.title}
                  </h1>
                  <p className="text-gray-600 text-lg">
                    {packageData.subtitle}
                  </p>
                </div>
                <div className="flex gap-2 mt-4 lg:mt-0">
                  <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Rating & Details */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(packageData.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-bold">{packageData.rating}</span>
                  <span className="ml-1 text-gray-500">
                    ({packageData.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Spain & France</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{packageData.groupSize}</span>
                </div>
              </div>

              {/* Image Gallery Placeholder */}
              <div className="h-64 md:h-96 bg-linear-to-r from-amber-400 to-orange-500 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-2xl">
                Package Gallery
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex flex-wrap -mb-px">
                  {["overview", "itinerary", "inclusions", "reviews"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`mr-8 py-4 px-1 font-medium text-sm border-b-2 transition-colors ${
                          selectedTab === tab
                            ? "border-amber-500 text-amber-600"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ),
                  )}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose max-w-none">
                {selectedTab === "overview" && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Journey Overview
                    </h3>
                    <p className="text-gray-700 mb-6">
                      The Camino de Santiago Classic package offers a complete
                      and transformative pilgrimage experience along the
                      historic French Way. This 800-kilometer journey takes you
                      through the breathtaking landscapes of Northern Spain,
                      from the French Pyrenees to the majestic Cathedral of
                      Santiago de Compostela.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {packageData.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === "itinerary" && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Detailed Itinerary
                    </h3>
                    <div className="space-y-4">
                      {packageData.itinerary.map((day) => (
                        <div
                          key={day.day}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 rounded-full bg-linear-to-r from-amber-500 to-orange-400 flex items-center justify-center text-white font-bold mr-4">
                              {day.day}
                            </div>
                            <h4 className="text-lg font-semibold">
                              {day.title}
                            </h4>
                          </div>
                          <p className="text-gray-700 ml-14">
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === "inclusions" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        What's Included
                      </h4>
                      <ul className="space-y-3">
                        {packageData.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        What's Not Included
                      </h4>
                      <ul className="space-y-3">
                        {packageData.exclusions.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-600"
                          >
                            <div className="w-5 h-5 rounded-full border border-gray-400 mr-3 mt-0.5 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedTab === "reviews" && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Pilgrim Reviews
                      </h3>
                      <button className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg font-semibold hover:bg-amber-100">
                        Write a Review
                      </button>
                    </div>
                    <div className="space-y-6">
                      {packageData.reviews.map((review, idx) => (
                        <div
                          key={idx}
                          className="border border-gray-200 rounded-lg p-6"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <div className="w-12 h-12 rounded-full bg-linear-to-r from-amber-400 to-orange-300 flex items-center justify-center text-white font-bold mr-4">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-bold">{review.name}</h4>
                                <div className="flex items-center text-sm text-gray-500">
                                  <div className="flex mr-2">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? "text-amber-400 fill-current"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <MessageCircle className="h-5 w-5 text-gray-400" />
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Download Itinerary */}
            <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-2xl p-6 text-white mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Download Complete Itinerary
                  </h3>
                  <p>
                    Get the detailed day-by-day schedule with maps and packing
                    list
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-amber-600 rounded-lg font-bold hover:bg-amber-50 transition-colors flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Price Box */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-end mb-4">
                    <div className="text-3xl font-bold text-gray-900">
                      ${packageData.price.toLocaleString()}
                    </div>
                    {packageData.originalPrice && (
                      <>
                        <div className="ml-3 text-lg text-gray-500 line-through">
                          ${packageData.originalPrice.toLocaleString()}
                        </div>
                        <div className="ml-3 px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-bold">
                          Save {packageData.discount}%
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-gray-600 mb-6">
                    per person (double occupancy)
                  </div>

                  {/* Next Departure */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-1">
                      Next Departure
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">
                        {packageData.nextDeparture}
                      </div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                        {packageData.spotsLeft} spots left
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button className="w-full py-4 bg-linear-to-r from-amber-600 to-orange-500 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity mb-4">
                    Book Now
                  </button>
                  <button className="w-full py-4 border-2 border-amber-600 text-amber-600 rounded-xl font-bold text-lg hover:bg-amber-50 transition-colors">
                    Reserve Spot ($500 deposit)
                  </button>
                </div>

                {/* Quick Info */}
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Quick Information
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Start Point
                      </div>
                      <div className="font-semibold">
                        {packageData.startPoint}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        End Point
                      </div>
                      <div className="font-semibold">
                        {packageData.endPoint}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Physical Level
                      </div>
                      <div className="font-semibold">
                        {packageData.difficulty}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Expert */}
                <div className="p-6 bg-amber-50">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Have Questions?
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Speak with our pilgrimage expert for personalized guidance
                  </p>
                  <button className="w-full py-3 bg-linear-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Pilgrimage Expert
                  </button>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  Need Help Deciding?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Take our 2-minute quiz to find the perfect pilgrimage for you
                </p>
                <button className="w-full py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                  Take Pilgrimage Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
