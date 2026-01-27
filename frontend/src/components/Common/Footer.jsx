import { Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 overflow-x-hidden">
      {/* Add overflow-x-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add responsive padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />
              <span className="text-lg md:text-xl font-bold">
                Pilgrimage World
              </span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              Your trusted partner for spiritual pilgrimages worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-xs md:text-sm">
              <li>
                <a href="/" className="hover:text-amber-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/packages" className="hover:text-amber-600 transition">
                  Packages
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="hover:text-amber-600 transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              Services
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-xs md:text-sm">
              <li>Hindu Pilgrimages</li>
              <li>Islamic Pilgrimages</li>
              <li>Buddhist Tours</li>
              <li>Custom Packages</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              Contact
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-xs md:text-sm">
              <li>+1 (800) 123-4567</li>
              <li>info@pilgrimages.com</li>
              <li>123 Pilgrimage Lane</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>
            &copy; 2026 Pilgrimage World. All rights reserved. | Privacy Policy
            | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
