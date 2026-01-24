import { Calendar, CheckCircle, Globe, Headphones, Heart } from "lucide-react";

const Process = () => {
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
  );
};

export default Process;
