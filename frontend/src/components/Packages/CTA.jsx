import { ChevronRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 md:py-16 bg-linear-to-r from-amber-600 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Pilgrimage?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Our spiritual journey designers can create a personalized pilgrimage
            tailored to your specific needs and spiritual goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#book-now"
              className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Design Your Journey
              <ChevronRight className="h-5 w-5 ml-2" />
            </a>
            <a
              href="tel:+15551234567"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors duration-300"
            >
              Speak with an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
