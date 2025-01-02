"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { BsChevronBarRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { href: "/about", label: "About Us" },
    {
      label: "Scrap My Ford",
      dropdown: [
        {
          href: "/scrap-my-ford/hertfordshire",
          label: "Scrap My Ford Hertfordshire",
        },
        {
          href: "/scrap-my-ford/east-london",
          label: "Scrap My Ford East London",
        },
        { href: "/scrap-my-ford/essex", label: "Scrap My Ford In Essex" },
      ],
    },
    { href: "/#whychooseus", label: "Why Choose Us" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/scrapping-scheme", label: "ULEZ Scrappage Scheme" },
    { href: "/get-quote", label: "Get A Quoute" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (e: any) => {
    const href = e.currentTarget.href;
    const path = window.location.pathname;

    if (href.includes("#") && href.split("#")[0] === path) {
      e.preventDefault();

      const id = href.split("#")[1];
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-4 pb-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Link href="/">
              <div>
                <span className="text-2xl text-primary font-extrabold">
                  Cars Wanted Uk
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="text-gray-600 hover:text-primary transition-all duration-300 relative group py-2">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-all duration-300 relative group py-2"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white border px-8 py-4 rounded-full border-primary hover:bg-white hover:text-black transition-all font-semibold"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <BiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none float-right"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-6 space-y-6">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="block text-gray-600 hover:text-primary transition-all duration-300 group">
                      <div className="flex items-center">
                        <span>{item.label}</span>
                        <BsChevronBarRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </button>
                    <div className="mt-2 pl-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className="block text-gray-600 hover:text-primary transition-colors duration-300 group"
                        >
                          <div className="flex items-center">
                            <span>{subItem.label}</span>
                            <BsChevronBarRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="flex items-center">
                      <span>{item.label}</span>
                      <BsChevronBarRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white mt-6 border px-8 py-4 rounded-full border-primary hover:bg-white hover:text-black transition-all font-semibold"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
