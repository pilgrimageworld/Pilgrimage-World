import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PackageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-amber-50 to-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Package Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The package you're looking for doesn't exist.
      </p>
      <Link
        to="/packages"
        className="flex items-center text-amber-600 hover:text-amber-700 font-semibold"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Browse All Packages
      </Link>
    </div>
  );
};

export default PackageNotFound;
