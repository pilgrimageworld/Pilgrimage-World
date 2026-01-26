import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-amber-600 to-orange-500 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to plan your perfect pilgrimage experience
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full">
              <Phone className="w-5 h-5" />
              <Link to="tel:+15551234567" className="font-semibold">
                +1 (800) 123-4567
              </Link>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full">
              <Mail className="w-5 h-5" />
              <Link
                to="mailto:info@pilgrimageworld.com"
                className="font-semibold"
              >
                info@pilgrimageworld.com
              </Link>
            </div>
          </div>
          <Link
            to="/contact#book-now"
            className="inline-block mt-8 bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
