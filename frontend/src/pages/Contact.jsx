import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Hero from "../components/Contact/Hero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfoCards from "../components/Contact/ContactInfoCards";
import FAQSection from "../components/Contact/FAQ";
import MapSection from "../components/Contact/Map";
import CTASection from "../components/Contact/CTA";
import Footer from "../components/Common/Footer";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="pt-16 md:pt-20 min-h-screen bg-linear-to-br from-amber-50 to-orange-50">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
          {/* Stack layout for mobile, grid for desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Contact Info (moves to top on mobile) */}
            <div className="lg:col-span-1 order-1 lg:order-1">
              <ContactInfoCards />
            </div>

            {/* Right Column - Contact Form & FAQ (moves below on mobile) */}
            <div className="lg:col-span-2 order-2 lg:order-2" id="book-now">
              <div className="space-y-6 md:space-y-8">
                <ContactForm />
                <FAQSection />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 md:mt-12 lg:mt-16">
            <MapSection />
          </div>

          {/* CTA Section */}
          <div className="mt-8 md:mt-12 lg:mt-16">
            <CTASection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
