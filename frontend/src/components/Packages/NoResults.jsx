const NoResults = ({ onResetFilter }) => {
  return (
    <div className="text-center py-16">
      <div className="text-gray-400 mb-4">
        No packages found for this category
      </div>
      <button
        onClick={onResetFilter}
        className="text-amber-600 hover:text-amber-700 font-semibold"
      >
        View all packages
      </button>
    </div>
  );
};

export default NoResults;
