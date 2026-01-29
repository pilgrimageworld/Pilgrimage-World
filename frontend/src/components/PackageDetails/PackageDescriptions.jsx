import { CheckCircle, Globe } from "lucide-react";

const PackageDescriptions = ({
  category,
  subcategory,
  difficulty,
  description,
  detailedDescription,
  bestSeason,
  highlights,
}) => {
  console.log(difficulty);
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Journey Overview</h2>
          <div className="flex items-center gap-4 mt-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              {category}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {subcategory}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {difficulty}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {description}
      </p>

      {detailedDescription && (
        <p className="text-gray-600 mb-8">{detailedDescription}</p>
      )}

      {/* Best Season Display */}
      {bestSeason && (
        <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <h4 className="font-semibold text-blue-900 mb-2">
            Best Time to Visit
          </h4>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(bestSeason) ? (
              bestSeason.map((season, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm border border-blue-200"
                >
                  {season}
                </span>
              ))
            ) : (
              <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm border border-blue-200">
                {bestSeason}
              </span>
            )}
          </div>
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-6 text-gray-900">
          Package Highlights
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-amber-50 rounded-xl border border-amber-100"
            >
              <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 shrink-0" />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageDescriptions;
