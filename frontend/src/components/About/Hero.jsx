const Hero = () => {
  return (
    <section className="mb-16 ">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Journey With Purpose,
          <span className="bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            {" "}
            Travel With Faith
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          For over 20 years, Pilgrimage World has been guiding souls on
          transformative journeys to sacred sites worldwide. We blend spiritual
          enrichment with seamless travel experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
