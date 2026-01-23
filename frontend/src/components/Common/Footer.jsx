import { Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-8 h-8 text-amber-600" />
              <span className="text-xl font-bold">Sacred Journeys</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for spiritual pilgrimages worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-600 transition">
                  Packages
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-amber-600 transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Hindu Pilgrimages</li>
              <li>Islamic Pilgrimages</li>
              <li>Buddhist Tours</li>
              <li>Custom Packages</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+1 (800) 123-4567</li>
              <li>info@sacredjourneys.com</li>
              <li>123 Pilgrimage Lane</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 Sacred Journeys. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
