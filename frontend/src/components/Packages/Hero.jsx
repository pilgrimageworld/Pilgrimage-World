const Hero = () => {
  return (
    <div className="pt-16 md:pt-20 bg-linear-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sacred Journeys
            <span className="block text-amber-600">For Every Pilgrim</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover transformative pilgrimage packages crafted with spiritual
            insight, cultural authenticity, and luxurious comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
