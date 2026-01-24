import {
  Award,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Shield,
  Users,
} from "lucide-react";

const KeyDifferentiators = () => {
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
  return (
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
  );
};

export default KeyDifferentiators;
