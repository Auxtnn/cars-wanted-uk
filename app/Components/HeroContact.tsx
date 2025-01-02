import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="pt-[7rem] pb-10 bg-blue-50">
      <div className="w-full md:w-11/12 px-4 mx-auto md:text-center">
        <h2 className="text-3xl font-bold text-gold mb-4">
          Have Questions? Get in Touch!
        </h2>
        <p className="text-lg text-gray-700  mx-auto">
          Our friendly team at Cars Wanted UK is ready to assist you with any
          inquiries you may have. Whether you need more information about our
          services or want to get a quote, don’t hesitate to reach out!
        </p>
      </div>
    </section>
  );
};

export default Introduction;
