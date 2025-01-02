import React from "react";

const Essex: React.FC = () => {
  return (
    <div className="container pt-[7rem]" id="about">
      <div className="py-10 bg-blue-50">
        <div className="w-full md:w-11/12 px-4 mx-auto md:text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">
            Scrap My Ford In Essex
          </h2>
        </div>
      </div>
      <div className="flex flex-col py-10 gap-8 lg:w-11/12 mx-auto px-4 ">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Scrap My Ford
            <span className="text-primary"> In Essex</span>
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            If you are in Essex and looking to turn your unwanted Ford into cash
            effortlessly, Cars-Wanted.uk is your first choice.
          </p>
          <p className="text-gray-600 text-lg leading-7">
            Our family-run business, with a rich history spanning over 20 years,
            specializes in providing top-tier vehicle scrapping services for
            Essex residents. We accept all types of Ford, regardless of their
            condition, and guarantee the best prices in the market. Our service
            is designed for your convenience, featuring a free collection
            service and instant cash payment, making the entire process
            hassle-free and profitable for you.
          </p>
          <p className="text-gray-600 text-lg leading-7">
            With a strong commitment to customer satisfaction and efficiency,
            choose Cars-Wanted.uk in Hertfordshire for a fast and trusted Ford
            scrapping service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Essex;
