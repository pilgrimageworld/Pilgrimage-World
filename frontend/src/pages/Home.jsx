import About from "../components/Home/About";
import Footer from "../components/Common/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Common/Navbar";
import Packages from "../components/Home/Packages";
import Testimonials from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-white to-amber-50">
      <Navbar />
      <Hero />
      <Packages />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
