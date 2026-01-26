import React, { useState } from "react";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Hero from "../components/Packages/Hero";
import MainPackages from "../components/Packages/MainPackages";
import CTA from "../components/Packages/CTA";
import WhatsInclude from "../components/Packages/WhatsInclude";
import packages from "../data/packages.json";

const Packages = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainPackages packages={packages} />
      <WhatsInclude />
      <CTA />
      <Footer />
    </>
  );
};

export default Packages;
