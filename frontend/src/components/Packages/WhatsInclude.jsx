import { Hotel, Plane, Shield, Utensils } from "lucide-react";
import InclusionCard from "./InclusionCard";

const WhatsInclude = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's Included in Every Package
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach ensures a seamless spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <InclusionCard
            icon={<Plane className="h-8 w-8" />}
            title="Flights & Transfers"
            description="International flights, domestic transfers, and airport pickups"
          />
          <InclusionCard
            icon={<Hotel className="h-8 w-8" />}
            title="Premium Accommodation"
            description="Carefully selected hotels and spiritual retreat centers"
          />
          <InclusionCard
            icon={<Utensils className="h-8 w-8" />}
            title="Meals & Dining"
            description="Cultural dining experiences with dietary accommodations"
          />
          <InclusionCard
            icon={<Shield className="h-8 w-8" />}
            title="Full Support"
            description="24/7 guide assistance, travel insurance, and emergency support"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatsInclude;
