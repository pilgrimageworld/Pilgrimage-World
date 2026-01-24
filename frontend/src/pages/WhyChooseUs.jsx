import Navbar from "../components/Common/Navbar";
import Hero from "../components/WhyChooseUs/Hero";
import KeyDifferentiators from "../components/WhyChooseUs/KeyDifferentiators";
import Comparison from "../components/WhyChooseUs/Comparison";
import Process from "../components/WhyChooseUs/Process";
import Testimonials from "../components/WhyChooseUs/Testimonials";
import ValueProposition from "../components/WhyChooseUs/ValueProposition";
import Footer from "../components/Common/Footer";

const WhyChooseUs = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-linear-to-br from-amber-50 to-orange-50">
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <KeyDifferentiators />
          <Comparison />
          <Process />
          <Testimonials />
          <ValueProposition />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WhyChooseUs;
