import Navbar from "../components/Common/Navbar";
import Hero from "../components/About/Hero";
import MissionAndVision from "../components/About/MissionAndVision";
import Features from "../components/About/Features";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import Stats from "../components/About/Stats";
import Footer from "../components/Common/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-linear-to-b from-sky-50 via-white to-amber-50">
        <Hero />
        <MissionAndVision />
        <Features />
        <Story />
        <Team />
        <Stats />
        <Footer />
      </div>
    </>
  );
};

export default About;
