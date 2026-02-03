import { ArrowLeft, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Booking Card */}
      <div className="bg-linear-to-b from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-100 sticky top-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Book This Journey
          </h3>
          <p className="text-gray-600">Secure your spot with easy booking</p>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <Link
              to="/contact#book-now"
              className="block w-full bg-linear-to-r from-amber-600 to-orange-500 text-white py-4 rounded-xl font-bold text-center hover:from-amber-700 hover:to-orange-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
            <Link
              to="tel:+911143757575"
              className="block w-full bg-white text-amber-600 py-4 rounded-xl font-semibold text-center border-2 border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Enquire Now
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Safe & Secure Booking
              </span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">
                24/7 Customer Support
              </span>
            </div>
          </div>
        </div>
        <Link
          to="/packages"
          className="flex items-center justify-center mt-8 text-gray-700 hover:text-amber-600 font-medium group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          View All Packages
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
