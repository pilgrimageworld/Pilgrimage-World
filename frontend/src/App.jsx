import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/package/:slug" element={<PackageDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
