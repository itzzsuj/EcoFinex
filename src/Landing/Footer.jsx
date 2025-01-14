import React from "react";
import header1 from "../assets/header1.webp";

const Footer = () => {
  return (
    <div id="contact" className="bg-green-700 w-full py-6 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* About Section */}
          <div className="flex flex-col space-y-2 text-center md:text-left w-full md:w-auto">
            <h2 className="font-bold text-lg">About EcoFinex</h2>
            <ul className="space-y-1">
              <li>Our Mission</li>
              <li>Sustainability Goals</li>
              <li>ESG Policies</li>
              <li>Trust & Transparency</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-2 text-center md:text-left w-full md:w-auto">
            <h2 className="font-bold text-lg">Contact Us</h2>
            <ul className="space-y-1">
              <li>+91 9878674939</li>
              <li>SRMIST, Kattankulathur</li>
              <li>greenfinance@ecofinex.com</li>
            </ul>
          </div>

          {/* Logo and Tagline Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src={header1}
              alt="EcoFinex Logo"
              className="w-28 h-auto"
            />
            <h1 className="font-bold text-lg">EcoFinex</h1>
            <p className="text-center md:text-left text-sm">
              Bridging Green Ambitions with Sustainable Investments
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm border-t border-green-600 pt-4">
          <p>&copy; {new Date().getFullYear()} EcoFinex, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
