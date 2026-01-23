import React, { useState } from "react";
import { Mountain, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const destinations = [
    "Makkah & Madinah (Umrah)",
    "Karbala & Najaf",
    "Jerusalem",
    "Vatican City",
    "Varanasi",
    "Bodh Gaya",
    "Amritsar",
    "Mount Kailash",
    "Pashupatinath",
    "Lumbini",
    "Golden Temple",
    "Ajmer Sharif",
    "Rameshwaram",
    "Tirupati Balaji",
    "Vaishno Devi",
    "Dwarka",
    "Somnath",
    "Kedarnath",
    "Badrinath",
    "Haridwar",
    "Prayagraj",
    "Mathura–Vrindavan",
    "Sabarimala",
    "Kamakhya Devi",
    "Shirdi",
    "Ujjain Mahakaleshwar",
    "Kashi Vishwanath",
    "Chardham Yatra",
  ];

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Why Choose Us", link: "/why-choose-us" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Mountain className="w-9 h-9 text-amber-600" />
            <span className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Pilgrimage World
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium">
            <a
              href="#home"
              className="relative text-gray-700 hover:text-amber-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-amber-600 after:transition-all hover:after:w-full"
            >
              Home
            </a>

            {/* Destinations Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 relative text-gray-700 hover:text-amber-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-amber-600 after:transition-all group-hover:after:w-full">
                Destinations
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 mt-4 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4">
                <ul className="grid grid-cols-3 gap-x-6 gap-y-2 w-180">
                  {destinations.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#packages"
                        className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#packages"
              className="relative text-gray-700 hover:text-amber-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-amber-600 after:transition-all hover:after:w-full"
            >
              Packages
            </a>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 relative text-gray-700 hover:text-amber-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-amber-600 after:transition-all group-hover:after:w-full">
                Company
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="py-3">
                  {companyLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="ml-4 bg-linear-to-r from-amber-600 to-orange-500 text-white px-7 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-6 py-6 space-y-4 text-base font-medium">
            {/* Home */}
            <a
              href="#home"
              className="block text-gray-700 hover:text-amber-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>

            {/* Destinations Accordion */}
            <div>
              <button
                onClick={() => setMobileDestOpen(!mobileDestOpen)}
                className="flex justify-between items-center w-full text-gray-700 hover:text-amber-600 transition py-2"
              >
                Destinations
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileDestOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDestOpen && (
                <div className="mt-2 max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-2">
                  <ul className="space-y-1">
                    {destinations.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#packages"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Packages */}
            <a
              href="#packages"
              className="block text-gray-700 hover:text-amber-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </a>

            {/* Company Accordion */}
            <div>
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="flex justify-between items-center w-full text-gray-700 hover:text-amber-600 transition py-2"
              >
                Company
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileCompanyOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg p-2">
                  <ul className="space-y-1">
                    {companyLinks.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.link}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Book Now CTA */}
            <a
              href="#contact"
              className="block mt-4 bg-linear-to-r from-amber-600 to-orange-500 text-white px-6 py-3 rounded-full text-center shadow-md hover:shadow-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
