// components/WhyChooseUs.js
import React from "react";
import {
  Shield,
  Award,
  Globe,
  Clock,
  Users,
  Heart,
  MapPin,
  Star,
  CheckCircle,
  Wallet,
  Headphones,
  Calendar,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "End-to-End Security",
      description:
        "Comprehensive safety protocols and 24/7 emergency support ensure your journey is protected from start to finish.",
      details: [
        "Travel insurance included",
        "Emergency medical evacuation",
        "24/7 support hotline",
        "Secure payment processing",
      ],
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning Service",
      description:
        "Recognized globally for excellence in pilgrimage tourism and customer satisfaction.",
      details: [
        "Travel Excellence Award 2023",
        "5-star customer rating",
        "ISO 9001 certified",
        "Sustainable Tourism Certified",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Expertise",
      description:
        "Local guides and partners in 50+ countries provide authentic cultural experiences.",
      details: [
        "Local language guides",
        "Cultural immersion programs",
        "Historical experts",
        "Community partnerships",
      ],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "20+ Years Experience",
      description:
        "Two decades of perfecting pilgrimage journeys with deep spiritual understanding.",
      details: [
        "Established 2003",
        "100,000+ pilgrims served",
        "Continuous itinerary improvement",
        "Multi-generational family service",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Attention",
      description:
        "Small group sizes and dedicated coordinators for personalized spiritual journeys.",
      details: [
        "Max 15 pilgrims per guide",
        "Dedicated trip coordinator",
        "Custom spiritual guidance",
        "Flexible scheduling",
      ],
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Spiritual Focus",
      description:
        "Journeys designed for spiritual growth, reflection, and meaningful connections.",
      details: [
        "Meditation sessions",
        "Spiritual workshops",
        "Interfaith dialogues",
        "Sacred site ceremonies",
      ],
    },
  ];

  const comparison = [
    {
      feature: "Group Size",
      us: "12-15 pilgrims",
      others: "25-40 pilgrims",
      icon: <Users className="h-5 w-5" />,
    },
    {
      feature: "Guide Expertise",
      us: "Certified & 5+ years experience",
      others: "Basic certification",
      icon: <Award className="h-5 w-5" />,
    },
    {
      feature: "Accommodation",
      us: "4-star near sacred sites",
      others: "3-star, distant locations",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      feature: "Inclusions",
      us: "All meals & spiritual activities",
      others: "Basic meals only",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      feature: "Support",
      us: "24/7 dedicated coordinator",
      others: "Office hours only",
      icon: <Headphones className="h-5 w-5" />,
    },
    {
      feature: "Flexibility",
      us: "Fully customizable",
      others: "Fixed packages",
      icon: <Calendar className="h-5 w-5" />,
    },
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      location: "New York, USA",
      journey: "Camino de Santiago 2023",
      text: "The spiritual guidance and attention to detail were exceptional. Every moment was meaningful.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      journey: "Char Dham Yatra",
      text: "They handled all logistics perfectly, allowing us to focus entirely on our spiritual journey.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    },
    {
      name: "Carlos Rodriguez",
      location: "Mexico City, Mexico",
      journey: "Holy Land Pilgrimage",
      text: "Life-changing experience. The local guides had profound knowledge that enriched our journey.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Understand your spiritual goals and preferences",
      icon: <Headphones className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Custom Planning",
      description: "Create personalized itinerary with sacred site experts",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Preparation",
      description: "Visa assistance, packing guide, and spiritual preparation",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Journey",
      description: "Experience with expert guides and spiritual support",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      step: "05",
      title: "Aftercare",
      description: "Post-journey reflection and community connection",
      icon: <Heart className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-amber-600 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <span className="block">Pilgrimage World?</span>
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Discover the difference that two decades of spiritual travel
              expertise makes
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">
                98% Customer Satisfaction Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Key Differentiators */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Unmatched Advantages
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              What sets us apart in creating truly transformative pilgrimage
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 border border-amber-100"
              >
                <div className="inline-flex p-4 bg-linear-to-r from-amber-600 to-orange-500 rounded-2xl mb-6">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-20">
          <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                The Pilgrimage World Difference
              </h2>
              <p className="text-amber-100 text-lg">
                Compare and see why we're the preferred choice
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="border-b border-amber-500">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-left bg-amber-700/30">
                      Pilgrimage World
                    </th>
                    <th className="py-4 px-6 text-left">Other Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b border-amber-500/30">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="p-2 bg-white/20 rounded-lg mr-3">
                            {item.icon}
                          </div>
                          <span className="font-semibold">{item.feature}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 bg-amber-700/20">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                          <span className="font-bold">{item.us}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-amber-200">{item.others}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our 5-Step Pilgrimage Process
            </h2>
            <p className="text-lg text-gray-700">
              From dream to reality, guided every step of the way
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-amber-600 to-orange-500 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-amber-200">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-amber-600 to-orange-500 rounded-full text-white text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <div className="p-3 bg-amber-100 rounded-xl inline-flex mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hear From Our Pilgrims
            </h2>
            <p className="text-lg text-gray-700">
              Real stories from those who've journeyed with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                    <p className="text-amber-600 font-semibold text-sm">
                      {testimonial.journey}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-12">
          <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Wallet className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2">Best Value</h3>
                <p className="text-amber-100">
                  Premium experiences at competitive prices with no hidden costs
                </p>
              </div>

              <div className="text-center p-6 border-l border-r border-amber-500/50">
                <Headphones className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2">Dedicated Support</h3>
                <p className="text-amber-100">
                  Personal coordinator from planning through journey completion
                </p>
              </div>

              <div className="text-center p-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-amber-100">
                  If any aspect doesn't meet expectations, we make it right
                </p>
              </div>
            </div>

            <div className="text-center mt-10 pt-8 border-t border-amber-500/50">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors duration-300"
              >
                Start Your Journey
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUs;
