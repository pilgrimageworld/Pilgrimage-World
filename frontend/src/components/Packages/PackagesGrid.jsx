import PackageCard from "./PackageCard";

const PackagesGrid = ({ packages, onSelectPackage }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} onSelect={onSelectPackage} />
      ))}
    </div>
  );
};

export default PackagesGrid;
