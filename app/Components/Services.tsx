"use client";

import React, { useState } from "react";

import {
  FaQuoteRight,
  FaTruck,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaThumbsUp,
  FaClock,
} from "react-icons/fa";

const Services: React.FC = () => {
  const features = [
    {
      icon: <FaQuoteRight />,
      title: "Instant Quotes",
      text: "Get a fair and competitive quote for your unwanted Ford vehicle quickly.",
    },
    {
      icon: <FaTruck />,
      title: "Free Collection",
      text: "We provide free collection from your location at a time that suits you.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Top Prices Paid",
      text: "We pride ourselves on offering top prices for all Ford models, ensuring you get the best deal.",
    },
  ];

  interface FeaturesCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
  }

  const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, title, text }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
      <div
        className="flex flex-col items-stretch"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${
            isHover ? "bg-primary" : ""
          } shadow-lg flex flex-col w-full py-10 rounded-2xl items-start px-4`}
        >
          <div
            className={`text-3xl ${isHover ? "text-white" : "text-primary"}`}
          >
            {icon}
          </div>
          <div
            className={`${
              isHover ? "text-white" : ""
            } text-base font-bold tracking-wider mt-4`}
          >
            {title}
          </div>
          <div
            className={`${
              isHover ? "text-white" : ""
            } text-sm text-gray-600 leading-6 capitalize mt-2`}
          >
            {text}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col pb-16 px-4 mx-auto max-w-screen-xl lg:w-11/12"
      id="services"
    >
      <h1 className=" md:text-center text-2xl lg:text-4xl font-bold text-gray-800">
        Our Services
      </h1>
      <p className="text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-4 max-md:max-w-full">
        At Cars Wanted UK, we offer a range of services designed to make selling
        your Ford as easy as possible.
      </p>
      <div className="w-full mt-6">
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-6">
          {features.map((item, key) => (
            <FeaturesCard
              key={key}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
