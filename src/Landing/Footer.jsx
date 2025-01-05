import React from "react";
import header1 from '../assets/header1.webp';


const Footer = () => {
  return (
    <div id="contact" className="bg-green-700 w-full py-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto px-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* About Section */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold text-lg">About EcoFinex</h2>
          <p>Our Mission</p>
          <p>Sustainability Goals</p>
          <p>ESG Policies</p>
          <p>Trust & Transparency</p>
          <p>Contact Us</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <p>+91 9878674939</p>
          <p>SRMIST, Kattankulathur</p>
          <p>greenfinance@ecofinex.com</p>
        </div>
      </div>

      {/* Logo and Tagline Section */}
      <div className="flex flex-col items-center mt-8 space-y-4">
        <img
          src={header1}
          alt="EcoFinex Logo"
          className="w-40 h-auto"
        />
        <h1 className="font-bold text-xl">EcoFinex</h1>
        <p className="text-center text-sm">
          Bridging Green Ambitions with Sustainable Investments
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} EcoFinex, Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
