import React, { useState } from "react";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Hero from "../components/Packages/Hero";
import MainPackages from "../components/Packages/MainPackages";
import CTA from "../components/Packages/CTA";
import WhatsInclude from "../components/Packages/WhatsInclude";

const Packages = () => {
  const packages = [
    {
      id: 1,
      slug: "do-dham-yatra",
      title: "Do Dham Yatra",
      category: "religious",
      location: "Kedarnath & Badrinath",
      duration: "6 Days / 5 Nights",
      image:
        "https://amazinghotels.co.in/wp-content/uploads/2025/04/Badrinath-Dham-Yatra.webp",
      highlights: [
        "Helicopter service available",
        "Premium accommodation",
        "Experienced guides",
        "All meals included",
      ],
      rating: 5.0,
    },
    {
      id: 2,
      slug: "char-dham-yatra",
      title: "Char Dham Yatra",
      category: "religious",
      location: "Complete Uttarakhand Circuit",
      duration: "12 Days / 11 Nights",
      image:
        "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=80&w=1170&auto=format&fit=crop&w=1200&60",
      highlights: [
        "All four dhams covered",
        "Luxury hotels",
        "Medical support",
        "Cultural programs",
      ],
      rating: 5.0,
    },
    {
      id: 3,
      slug: "hajj-package",
      title: "Hajj Package",
      category: "religious",
      location: "Mecca & Medina",
      duration: "15 Days / 14 Nights",
      image:
        "https://images.unsplash.com/photo-1605553378313-22d0dc541393?q=80&w=1974&auto=format&fit=crop&w=1200&60",
      highlights: [
        "Ministry approved",
        "5-star hotels",
        "Experienced mutawwif",
        "Group coordination",
      ],
      rating: 5.0,
    },
    {
      id: 4,
      slug: "umrah-package",
      title: "Umrah Package",
      category: "religious",
      location: "Mecca & Medina",
      duration: "10 Days / 9 Nights",
      image:
        "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Year-round availability",
        "Ziyarat tours included",
        "Comfortable transport",
        "Spiritual guidance",
      ],
      rating: 5.0,
    },
    {
      id: 5,
      slug: "kailash-mansarovar",
      title: "Kailash Mansarovar",
      category: "religious",
      location: "Tibet, China",
      duration: "14 Days / 13 Nights",
      image:
        "https://images.unsplash.com/photo-1606163338600-0e212c836bb3?q=80&w=1170&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Sacred parikrama",
        "Medical team",
        "Oxygen support",
        "Permits included",
      ],
      rating: 5.0,
    },
    {
      id: 6,
      slug: "vaishno-devi-yatra",
      title: "Vaishno Devi Yatra",
      category: "religious",
      location: "Jammu & Kashmir",
      duration: "4 Days / 3 Nights",
      image:
        "https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?q=80&w=1931&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Helicopter options",
        "VIP darshan",
        "Comfortable hotels",
        "Local sightseeing",
      ],
      rating: 5.0,
    },
    {
      id: 7,
      slug: "amarnath-yatra",
      title: "Amarnath Yatra",
      category: "religious",
      location: "Jammu & Kashmir",
      duration: "7 Days / 6 Nights",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS0DgJujf_00a7Wz5zxwfxvmXnWfsKZNIN7UaRCE8fLd7UdnOwVUp3uV9TW-sirb-Bwt5eqYynnv46VeJ6KInxPyiqP6Pu4ik-Y2t7zrf977y0fqcOP65NwL3xSs6GlQxkA2Ptof056rQ/s1600/Lord_Amarnath.jpg",
      highlights: [
        "Helicopter & trekking options",
        "Medical assistance",
        "Secure base camps",
        "Experienced yatra guides",
      ],
      rating: 5.0,
    },
    {
      id: 8,
      slug: "vrindavan-mathura-yatra",
      title: "Vrindavan Mathura Yatra",
      category: "religious",
      location: "Uttar Pradesh",
      duration: "3 Days / 2 Nights",
      image:
        "https://images.unsplash.com/photo-1662376107358-21296a9234f1?q=80&w=2126&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Krishna Janmabhoomi visit",
        "Banke Bihari ji darshan",
        "Yamuna aarti",
        "Comfortable stay",
      ],
      rating: 5.0,
    },
    {
      id: 9,
      slug: "golden-temple-yatra",
      title: "Golden Temple Yatra",
      category: "religious",
      location: "Amritsar, Punjab",
      duration: "3 Days / 2 Nights",
      image:
        "https://images.unsplash.com/photo-1623059508779-2542c6e83753?q=80&w=627&auto=format&fit=crop&w=1200&q=60",
      highlights: [
        "Sri Harmandir Sahib visit",
        "Langar experience",
        "Wagah Border ceremony",
        "City sightseeing",
      ],
      rating: 5.0,
    },
  ];

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
