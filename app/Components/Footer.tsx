// components/Footer.tsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10 w-full">
      <div className="container w-full mx-auto px-4 lg:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Details */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Car Wanted UK</h2>
          <p>16 Hunter Dr, Hornchurch RM12 5TS, UK</p>
          <h2 className="text-lg font-semibold mb-4 mt-6">Where we operate:</h2>
          <p>Essex, Hertfordshire, and London</p>
        </div>

        {/* Working Hours and Location */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Working Hours</h2>
          <p>Call us anytime Monday to Sunday during the following hours:</p>
          <p>Mon - Sun: 7 AM - 5 PM</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>Phone: 01708 523374</p>
          <p>Email: theecoboostman@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="mt-6">
            <a href="#" className="text-white hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
