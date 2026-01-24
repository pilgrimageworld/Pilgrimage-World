// components/Testimonials.js
import React, { useState } from "react";

import Navbar from "../components/Common/Navbar";
import Filters from "../components/Testimonials/Filters";
import TestimonialGrid from "../components/Testimonials/TestimonialsGrid";
import Hero from "../components/Testimonials/Hero";
import Footer from "../components/Common/Footer";

const Testimonials = () => {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-linear-to-br from-amber-50 to-orange-50">
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <Filters filter={filter} setFilter={setFilter} />
          <TestimonialGrid filter={filter} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
