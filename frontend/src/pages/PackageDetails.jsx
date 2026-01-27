import { useParams } from "react-router-dom";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import packages from "../data/packages.json";
import PackageNotFound from "../components/PackageDetails/PackageNotFound";
import Hero from "../components/PackageDetails/Hero";
import PackageDescriptions from "../components/PackageDetails/PackageDescriptions";
import Itinerary from "../components/PackageDetails/Itinerary";
import InclusionsExclusions from "../components/PackageDetails/InclusionsExclusions";
import Amenities from "../components/PackageDetails/Amenities";
import ImportantDetails from "../components/PackageDetails/ImportantDetails";
import Sidebar from "../components/PackageDetails/Sidebar";
import Testimonial from "../components/PackageDetails/Testimonial";

const PackageDetails = () => {
  const { slug } = useParams();
  const pkg = packages.find((item) => item.slug === slug);

  if (!pkg) {
    return <PackageNotFound />;
  }
  const {
    title,
    image,
    category,
    subcategory,
    location,
    region,
    duration,
    rating,
    reviewCount,
    bestSeason,
    description,
    detailedDescription,
    difficulty,
    highlights,
    itinerary,
    amenities,
    transportation,
    meals,
    accommodation,
    importantNotes,
    inclusions,
    exclusions,
  } = pkg;

  return (
    <>
      <Navbar />
      <Hero
        title={title}
        image={image}
        category={category}
        location={location}
        region={region}
        duration={duration}
        rating={rating}
        reviewCount={reviewCount}
      />

      {/* Add overflow-x-hidden to prevent horizontal scroll */}
      <div className="overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          {/* Change px-4 to responsive padding */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Package Description */}
              <PackageDescriptions
                category={category}
                subcategory={subcategory}
                bestSeason={bestSeason}
                description={description}
                detailedDescription={detailedDescription}
                difficulty={difficulty}
                highlights={highlights}
              />

              {/* Itinerary */}
              <Itinerary itinerary={itinerary} />

              {/* Inclusions & Exclusions */}
              <InclusionsExclusions
                inclusions={inclusions}
                exclusions={exclusions}
              />

              <Amenities
                amenities={amenities}
                transportation={transportation}
                meals={meals}
                accommodation={accommodation}
              />

              <ImportantDetails importantNotes={importantNotes} />
            </div>

            {/* Right Column - Sidebar */}
            <Sidebar />
          </div>
        </div>

        {/* Testimonial Banner */}
        <Testimonial />
      </div>

      <Footer />
    </>
  );
};

export default PackageDetails;
