import { Heart, Target } from "lucide-react";

const MissionAndVision = () => {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-linear-to-r from-amber-600 to-orange-500 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 ml-4">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To facilitate meaningful spiritual journeys by providing
            comprehensive travel solutions that respect local traditions while
            ensuring comfort, safety, and authentic experiences for every
            pilgrim.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-linear-to-r from-amber-600 to-orange-500 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 ml-4">
              Our Vision
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To become the world's most trusted pilgrimage travel partner,
            connecting people across cultures and faiths through shared
            spiritual experiences and promoting global understanding through
            sacred journeys.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
