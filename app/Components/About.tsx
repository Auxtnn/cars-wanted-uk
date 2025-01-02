"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EstateBrokerage = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16" id="about">
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 md:order-first order-last">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/3.jpeg"
              alt="ford car"
              width={550}
              height={350}
              className="w-full h-full lg:h-[410px] object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Discover the Story Behind Cars Wanted UK:
            <span className="text-primary">
              {" "}
              Family Values and Exceptional Service
            </span>
          </h2>
          <p className="text-gray-600 leading-7">
            Based in Hornchurch, Essex, Cars Wanted UK is a family run-business
            which has been trading for over 20 years. We are licensed, fully
            insured and approved by the DVLA. Our aim is always to provide
            first-class customer service and for you to be confident in
            recommending us to others.
          </p>
          <p className="text-gray-600 leading-7">
            We will buy almost any Ford from you, particularly EcoBoost
            vehicles, whatever the age or condition. Got an unwanted Focus,
            Fiesta or Kuga sitting on your driveway? We will happily remove it
            for you. We will collect it from you for free at a time that is
            convenient for you AND pay top price on collection.
          </p>

          {/* Statistics */}
          <div className=" mt-4">
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white border px-8 py-4 rounded-full hover:text-primary border-primary hover:bg-white  transition-all font-semibold"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateBrokerage;
