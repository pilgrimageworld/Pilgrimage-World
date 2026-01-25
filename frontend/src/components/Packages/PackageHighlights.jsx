const PackageHighlights = ({ highlights }) => {
  return (
    <ul className="space-y-2 mb-6">
      {highlights.slice(0, 3).map((highlight, i) => (
        <li key={i} className="flex items-start text-sm text-gray-600">
          <span className="text-amber-600 mr-2">✓</span>
          {highlight}
        </li>
      ))}
    </ul>
  );
};

export default PackageHighlights;
