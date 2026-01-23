const Stats = () => {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-700">Happy Pilgrims</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-700">Sacred Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-700">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
