import Hero from "../components/About/Hero";
import MissionAndVision from "../components/About/MissionAndVision";
import Features from "../components/About/Features";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import Stats from "../components/About/Stats";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
// import Navbar from "../components/Common/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-white to-amber-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* Mission & Vision */}
      <MissionAndVision />

      {/* Features */}
      <Features />

      {/* Story */}
      <Story />

      {/* Team */}
      <Team />

      {/* Stats */}
      <Stats />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
