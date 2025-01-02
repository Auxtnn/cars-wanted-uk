import React from "react";

const QuoteHero: React.FC = () => {
  return (
    <section className="pt-[7rem] pb-10 bg-blue-50">
      <div className="w-full md:w-11/12 mx-auto px-4 md:text-center">
        <h2 className="lg:text-4xl font-extrabold text-2xl  capitalize mb-4">
          Submit <span className="text-primary"> the form below </span> for a
          same day quote of your <span className="text-primary">Ford</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Receive a competitive quote for your unwanted Ford vehicle in just
          minutes. Our team is ready to provide you with an unbeatable price and
          free collection at your convenience.
        </p>
      </div>
    </section>
  );
};

export default QuoteHero;
