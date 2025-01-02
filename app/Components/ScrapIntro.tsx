"use client";

import React from "react";

const ScrapIntro = () => {
  return (
    <div className="container py-8 lg:py-16" id="about">
      {/* Main Content Container */}
      <div className="flex flex-col gap-8 lg:w-11/12 mx-auto px-4 ">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-gray-600 text-lg leading-7">
            The Lord Mayor of London’s new £110m scrappage scheme aims to help
            clear London’s air by providing grant payments to successful
            applicants to scrap or retrofit their vehicles that do not meet the
            ULEZ emissions standards and switch to cleaner, greener modes of
            transport.
          </p>
          <p className="text-gray-600 text-lg leading-7">
            Applications for the ULEZ London Scrappage Scheme are divided into
            two sub-schemes based on vehicle type and applicant.
          </p>
          <ul>
            <li className="text-gray-600 text-lg leading-7">
              <span className="font-bold text-black">Car and Motorcycle.</span>{" "}
              For Londoners on certain low income or disability benefits with
              cars, motorcycles and wheelchair accessible vehicles that do not
              meet the ULEZ emissions standards.
            </li>
            <li className="text-gray-600 text-lg leading-7">
              <span className="font-bold text-black">Van and Minibus.</span> For
              eligible sole traders, micro businesses (up to 10 employees) or
              charities with a registered address in London and a van or minibus
              that does not meet the ULEZ emissions standards.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrapIntro;
