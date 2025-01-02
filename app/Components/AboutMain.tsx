"use client";

import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="container py-8 lg:py-16" id="about">
      {/* Main Content Container */}
      <div className="flex flex-col gap-8 lg:w-11/12 mx-auto px-4 ">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Discover the Story Behind Cars Wanted UK:
            <span className="text-primary">
              {" "}
              Family Values and Exceptional Service
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            Based in Hornchurch, Essex, Cars Wanted UK is a family run-business
            which has been trading for over 20 years. We are licensed, fully
            insured and approved by the DVLA. Our aim is always to provide
            first-class customer service and for you to be confident in
            recommending us to others.
          </p>
          <p className="text-gray-600 text-lg leading-7">
            We will buy almost any Ford from you, particularly EcoBoost
            vehicles, whatever the age or condition. Got an unwanted Focus,
            Fiesta or Kuga sitting on your driveway? We will happily remove it
            for you. We will collect it from you for free at a time that is
            convenient for you AND pay top price on collection.
          </p>
          <p className="text-gray-600 text-lg leading-7">
            At Cars Wanted UK, we are proud of our reputation. Give us a call
            today… we are looking forward to paying you a great price for your
            unwanted Ford.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                <CountUp start={0} end={20} duration={2.5} separator="," />+
              </p>
              <p className="text-gray-700 mt-2">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                <CountUp start={0} end={97} duration={2.5} separator="," />%
              </p>
              <p className="text-gray-700 mt-2">Customer Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
