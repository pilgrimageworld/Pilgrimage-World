import PackagesGrid from "./PackagesGrid";

const MainPackages = ({ packages }) => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              All Pilgrimage Packages
            </h2>
            <p className="text-gray-600">
              Filter by your spiritual interests and preferences
            </p>
          </div>
        </div>

        <PackagesGrid packages={packages} />
      </div>
    </section>
  );
};

export default MainPackages;
