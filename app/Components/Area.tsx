"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
const Area = () => {
  return (
    <div className="container mx-auto bg-blue-50 px-4 py-8 lg:py-16" id="about">
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:w-11/12 mx-auto px-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/map.png"
            alt="ford card"
            width={550}
            height={350}
            className="rounded-lg w-full h-full lg:h-[410px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl capitalize lg:text-4xl font-extrabold text-gray-800">
            The
            <span className="text-primary"> Areas </span>
            we cover
          </h2>
          <p className="text-gray-600 font-semibold text-xl leading-7 text-center">
            Our Ford buying service operates all across{" "}
            <span className="text-primary">
              {" "}
              Essex, Hertfordshire and London{" "}
            </span>{" "}
            – Nationwide collection Available.
          </p>
          <p className="text-gray-600 font-semibold text-2xl leading-7 text-center">
            Call Us For A Quote Today – 01708 523374
          </p>

          {/* Statistics */}
          <div className=" mt-4">
            <Link href="/get-quote">
              <button className="bg-primary capitalize text-white border px-8 py-4 rounded-full hover:text-primary border-primary hover:bg-white  transition-all font-semibold">
                Request A Quote Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
