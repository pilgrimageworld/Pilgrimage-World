// components/Packages/Packages.jsx
import React, { useState } from "react";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Hero from "../components/Packages/Hero";
import MainPackages from "../components/Packages/MainPackages";
import CTA from "../components/Packages/CTA";
import WhatsInclude from "../components/Packages/WhatsInclude";

const Packages = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const packages = [
    {
      id: 1,
      slug: "do-dham-yatra",
      title: "Do Dham Yatra",
      category: "religious",
      location: "Kedarnath & Badrinath",
      duration: "6 Days / 5 Nights",
      image:
        "https://images.pexels.com/photos/35536244/pexels-photo-35536244.jpeg?_gl=1*11k8evp*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI2MjQkajQ5JGwwJGgw",
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
        "https://images.pexels.com/photos/27170153/pexels-photo-27170153.jpeg?_gl=1*sa1xxb*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI2OTgkajQ4JGwwJGgw",
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
        "https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?_gl=1*knxgsv*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI3NTckajUzJGwwJGgw",
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
        "https://images.pexels.com/photos/34498854/pexels-photo-34498854.jpeg?_gl=1*1ib4yeu*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI3OTckajEzJGwwJGgw",
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
        "https://images.pexels.com/photos/33330138/pexels-photo-33330138.jpeg?_gl=1*1d2w5vm*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI4NjUkajEyJGwwJGgw",
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
        "https://images.pexels.com/photos/12738180/pexels-photo-12738180.jpeg?_gl=1*3jh9kj*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI5MTckajM0JGwwJGgw",
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
        "https://images.pexels.com/photos/13917231/pexels-photo-13917231.jpeg?_gl=1*tid5n2*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjI5OTAkajIyJGwwJGgw",
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
        "https://images.pexels.com/photos/31089350/pexels-photo-31089350.jpeg?_gl=1*r6fsc7*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjMwMjMkajQ5JGwwJGgw",
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
        "https://images.pexels.com/photos/28905559/pexels-photo-28905559.jpeg?_gl=1*1w8155l*_ga*NDIwNTExNTI3LjE3NjkxNTM2NzM.*_ga_8JE65Q40S6*czE3NjkxNjE4MzYkbzIkZzEkdDE3NjkxNjMwNzkkajU3JGwwJGgw",
      highlights: [
        "Sri Harmandir Sahib visit",
        "Langar experience",
        "Wagah Border ceremony",
        "City sightseeing",
      ],
      rating: 5.0,
    },
  ];

  const categories = [
    { id: "all", label: "All Packages", count: packages.length },
    { id: "spiritual", label: "Spiritual Journeys", count: 1 },
    { id: "religious", label: "Religious Pilgrimages", count: 3 },
    { id: "cultural", label: "Cultural Experiences", count: 2 },
    { id: "adventure", label: "Adventure Pilgrimages", count: 1 },
    { id: "custom", label: "Custom Packages", count: 1 },
  ];

  const filteredPackages = packages.filter(
    (pkg) => filter === "all" || pkg.category === filter,
  );

  return (
    <>
      <Navbar />
      <Hero />
      <MainPackages
        filter={filter}
        filteredPackages={filteredPackages}
        setFilter={setFilter}
        categories={categories}
      />
      <WhatsInclude />
      <CTA />
      <Footer />
    </>
  );
};

export default Packages;
