import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceData } from "@/types";

import {
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaThumbsUp,
  FaClock,
} from "react-icons/fa";

const services: ServiceData[] = [
  {
    icon: <FaStar className=" text-primary text-4xl" />,
    title: "Experience You Can Trust",
    description:
      "With over 20 years in the business, we know how to provide exceptional service.",
  },

  {
    icon: <FaUsers className=" text-4xl text-primary" />,
    title: "Family-Owned Values",
    description:
      "As a family-run business, we treat our customers like family.",
  },
  {
    icon: <FaShieldAlt className=" text-4xl  text-primary" />,
    title: "Licensed and Insured",
    description:
      "Rest easy knowing that we are fully licensed and insured by the DVLA.",
  },
  {
    icon: <FaThumbsUp className=" text-primary text-4xl" />,
    title: "Customer Satisfaction Guaranteed ",
    description:
      "Our reputation is built on satisfied customers who recommend us to others.",
  },
  {
    icon: <FaClock className=" text-primary text-4xl" />,
    title: "Convenient Service ",
    description: "We work around your schedule for collection and payment.",
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center w-full pt-10 bg-gray-100"
      id="whychooseus"
    >
      <div className=" px-4 mx-auto md:w-11/12  w-full">
        <div className="flex flex-col lg:flex-row md:gap-8 w-full">
          <div className="lg:w-2/4 w-full">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
                Why Choose US
              </h2>

              <div className="flex flex-col space-y-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 w-full rounded">
            <div className="rounded-lg overflow-hidden">
              <img
                loading="lazy"
                src="/images/8b.jpeg"
                alt="Real estate"
                className="rounded w-full object-contain aspect-[0.73]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
