import React from "react";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="mt-16">
      <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Ready for Your Spiritual Journey?
        </h2>
        <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
          Call us now for immediate assistance or schedule a personal
          consultation with our pilgrimage experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTALink
            href="tel:+15551234567"
            icon={<Phone className="h-5 w-5 mr-2" />}
            text="Call Now: +1 (555) 123-4567"
            variant="primary"
          />
          <CTALink
            href="/contact/#book-now"
            icon={<Calendar className="h-5 w-5 mr-2" />}
            text="Schedule Consultation"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

const CTALink = ({ href, icon, text, variant = "primary" }) => {
  const baseClasses =
    "px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center transition-colors duration-300";

  const variants = {
    primary: "bg-white text-amber-600 hover:bg-amber-50",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white/20",
  };

  return (
    <Link to={href} className={`${baseClasses} ${variants[variant]}`}>
      {icon}
      {text}
    </Link>
  );
};

export default CTA;
