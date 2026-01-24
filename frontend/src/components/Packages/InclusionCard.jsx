const InclusionCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl md:rounded-2xl p-6 border border-gray-100 hover:border-amber-200 transition-colors text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-amber-500 to-orange-400 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base">{description}</p>
  </div>
);

export default InclusionCard;
