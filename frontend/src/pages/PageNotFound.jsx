import { Link } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="grow flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            {/* Decorative Elements */}
            <div className="relative inline-block mb-8">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-linear-to-r from-amber-400 to-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-linear-to-r from-orange-300 to-red-400 rounded-full opacity-20"></div>

              {/* 404 Number */}
              <div className="relative">
                <div className="text-9xl md:text-[180px] font-bold text-transparent bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text opacity-10">
                  404
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-6xl md:text-8xl font-bold text-transparent bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text">
                    404
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lost on Your Spiritual Journey?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              The path you're seeking seems to have wandered into uncharted
              territory. Every journey has its detours—let's help you find your
              way back to enlightenment.
            </p>
          </div>

          {/* Spiritual Guidance Section */}
          <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                  <div className="flex items-center mb-4">
                    <Sparkles className="h-6 w-6 mr-3" />
                    <span className="text-amber-100 font-semibold">
                      Spiritual Guidance
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Need Personalized Direction?
                  </h3>
                  <p className="text-amber-100 mb-6">
                    Our pilgrimage experts are here to guide you on your
                    spiritual journey. Let us help you find the perfect path to
                    enlightenment.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact/#book-now"
                    className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-colors duration-300 text-center"
                  >
                    Contact Expert Guide
                  </Link>
                  <a
                    href="tel:+15551234567"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-colors duration-300 text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pilgrim's Wisdom */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Pilgrim's Wisdom
            </div>
            <blockquote className="text-xl italic text-gray-700 max-w-2xl mx-auto">
              "Not all who wander are lost, and not every detour is a mistake.
              Sometimes, the most profound discoveries happen when we stray from
              the planned path."
            </blockquote>
            <div className="mt-4 text-gray-600">
              — Ancient Pilgrim's Proverb
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PageNotFound;
