"use client";

import React from "react";
import { IconQuote } from "@tabler/icons-react";

function Testimonials() {
  return (
    <div
      className="flex items-center justify-center bg-[#f8f8f8] py-16 text-[#010103]"
      id="testimonials"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col">
          {/* Title Section */}
          <div className="flex flex-col text-center mx-auto">
            <h2 className="mb-5 text-2xl lg:text-4xl font-bold text-gray-800">
              What our <span className="text-primary">customers</span> are
              saying
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {/* Testimonial Card */}
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <span className="absolute bottom-8 right-8 text-primary">
                <IconQuote size={40} />
              </span>
              <p className="text-base text-gray-600 leading-6 font-medium mb-6">
                The gentlemen from Cars Wanted UK are so friendly and
                professional. They responded so quickly and I can't recommend
                them highly enough.
              </p>
              <div className="flex items-center">
                <h4 className="text-lg font-semibold">Ms Olga</h4>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <span className="absolute bottom-8 right-8 text-primary">
                <IconQuote size={40} />
              </span>
              <p className="text-base text-gray-600 leading-6 font-medium mb-6">
                Cars wanted UK were punctual, efficient and very friendly. They
                took care of all the paperwork and I received payment
                immediately as promised.
              </p>
              <div className="flex items-center">
                <h4 className="text-lg font-semibold">Mr Smith</h4>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <span className="absolute bottom-8 right-8 text-primary">
                <IconQuote size={40} />
              </span>
              <p className="text-base text-gray-600 leading-6 font-medium mb-6">
                Extremely honest and efficient. They responded to my enquiry
                straight away and collected the same day. And best prices paid
                too!
              </p>
              <div className="flex items-center">
                <h4 className="text-lg font-semibold">Vadim</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
