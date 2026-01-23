import { Award, Globe, Shield, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Operating in 50+ countries with local expertise",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Customized Itineraries",
      description: "Tailored journeys for every pilgrim",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description: "24/7 support and emergency assistance",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Guides",
      description: "Expert guides with deep cultural knowledge",
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Why Choose Pilgrimage World?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex p-4 bg-linear-to-r from-amber-600 to-orange-500 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
