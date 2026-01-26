import { Car, CheckCircle, Home, Utensils } from "lucide-react";

const Amenities = ({ amenities, transportation, meals, accommodation }) => {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        Package Amenities
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities &&
          amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                <CheckCircle className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-gray-800">{amenity}</span>
            </div>
          ))}
      </div>

      {/* Transportation, Meals, Accommodation info */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {transportation && (
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <Car className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-900">Transport</h4>
            <p className="text-blue-700">{transportation}</p>
          </div>
        )}
        {meals && (
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <Utensils className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-green-900">Meals</h4>
            <p className="text-green-700">{meals}</p>
          </div>
        )}
        {accommodation && (
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <Home className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-semibold text-purple-900">Stay</h4>
            <p className="text-purple-700">{accommodation}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Amenities;
