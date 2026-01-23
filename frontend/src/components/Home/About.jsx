const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Trusted Pilgrimage Partner
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in organizing spiritual journeys,
              Sacred Journeys has helped thousands of pilgrims fulfill their
              religious aspirations. We understand the profound significance of
              these sacred travels and ensure every aspect of your journey is
              handled with utmost care and reverence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of experienced professionals, multilingual guides, and
              dedicated support staff work tirelessly to provide you with a
              seamless, comfortable, and spiritually enriching experience. From
              visa processing to accommodation, transportation to spiritual
              guidance, we take care of everything.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  15+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Happy Pilgrims</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=1000&fit=crop"
              alt="Pilgrimage"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div>Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
