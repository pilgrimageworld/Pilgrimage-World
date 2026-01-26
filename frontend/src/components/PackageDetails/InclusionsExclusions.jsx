import { CheckCircle } from "lucide-react";

const InclusionsExclusions = ({ inclusions, exclusions }) => {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">What's Included</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Inclusions</h3>
          </div>
          {/* Inclusions & Exclusions Section */}
          <ul className="space-y-3">
            {(
              inclusions || [
                "Accommodation in selected hotels",
                "All meals as specified",
                "Transportation throughout",
                "Experienced spiritual guide",
                "All entry fees and permits",
              ]
            ).map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-red-600 font-bold text-xl">×</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Exclusions</h3>
          </div>
          <ul className="space-y-3">
            {(
              exclusions || [
                "Personal expenses",
                "Travel insurance",
                "Medical expenses",
                "Optional activities",
                "Tips and gratuities",
              ]
            ).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">×</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InclusionsExclusions;
