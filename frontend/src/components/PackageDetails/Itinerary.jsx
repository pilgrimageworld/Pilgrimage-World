import { Clock, Home } from "lucide-react";

const Itinerary = ({ itinerary }) => {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        Detailed Itinerary
      </h2>
      <div className="space-y-6">
        {/* In the Itinerary section */}
        {(
          itinerary ||
          Array.from({ length: 3 }, (_, i) => ({
            day: `Day ${i + 1}`,
            title: `Day ${i + 1} Activities`,
            description: `Detailed description of day ${i + 1} activities including spiritual ceremonies, sightseeing, and travel arrangements.`,
            accommodation: "Hotel accommodation",
            meals: "All meals included",
          }))
        ).map((day, index) => (
          <div
            key={index}
            className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <div className="flex-1 w-0.5 bg-linear-to-b from-amber-200 to-transparent mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-amber-600 mr-2" />
                  <span className="text-sm font-semibold text-amber-600">
                    {day.day}
                  </span>
                </div>
                {day.meals && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                    {day.meals}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {day.title}
              </h3>
              <p className="text-gray-700 mb-4">{day.description}</p>
              {day.accommodation && (
                <div className="flex items-center text-sm text-gray-600">
                  <Home className="w-4 h-4 mr-2" />
                  <span>Stay: {day.accommodation}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
