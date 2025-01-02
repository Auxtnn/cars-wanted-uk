import React from "react";
import Link from "next/link";

const VanScheme: React.FC = () => {
  const eligible = [
    "    10 or fewer employees",
    "    Up to £632,000 turnover or up to £316,000 balance sheet total in the preceding and current financial year, and",
    "    Companies House registration as an active company or VAT registered within the 32 London boroughs or City of London",
  ];
  const eligible2 = [
    "A self-employed person who owns and operates a business within the 32 London boroughs or the City of London",
  ];

  const eligible3 = [
    "Registered with the Charities Commission as active within the 32 London boroughs or the City of London",
  ];
  const eligible4 = [
    "Scrap a van: £5,000",
    "Scrap a minibus: £7,000",
    "Retrofit a van: £5,000",
    "Retrofit a minibus: £5,000",
    "Scrap a van and replace with an electric van: £7,500",
    " Scrap a minibus and replace with an electric minibus: £7,500",
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="w-full md:w-11/12 px-4 mx-auto">
        <div className=" mb-8 justify-center items-center mx-auto flex">
          <Link href="#checkyourvehicle">
            <button className="bg-primary capitalize text-white border px-8 py-4 rounded-full hover:text-primary border-primary hover:bg-white  transition-all font-semibold">
              Check Your Vehicle
            </button>
          </Link>
        </div>
        <div className="w-full md:text-center md:mb-8 mb-4">
          <h2 className="lg:text-4xl font-extrabold text-2xl  capitalize ">
            <span className="text-primary"> Van </span>
            and
            <span className="text-primary"> minibus </span>
            scrappage scheme
          </h2>
          <p className="text-lg text-gray-700  mx-auto">
            The Mayor of London’s new scrappage scheme for vans and minibuses is
            helping to clear London’s air. It supports eligible sole traders,
            micro businesses and charities to replace polluting vehicles that
            don’t meet the Ultra Low Emission Zone (ULEZ) emissions standards.
          </p>
        </div>
        <div className="w-full  md:mb-8 mb-4">
          <h2 className="lg:text-4xl font-extrabold text-2xl  capitalize ">
            Organisation and vehicle eligibility
          </h2>
          <p className="text-lg text-gray-700  mx-auto">
            The scheme is open to micro businesses (with up to 10 employees),
            sole traders and registered charities with a registered address
            within the 32 London boroughs or the City of London (Greater London
            Area). The following organisations can apply:
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="flex flex-col items-start lg:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gold">
              Micro businesses with:
            </h3>

            <ul className="space-y-3 gap-4 list-disc px-4 text-lg text-gray-800">
              {eligible.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold text-gold">
              Grant payment options
            </h3>

            <ul className="space-y-3 text-lg list-disc px-4 gap-4 text-gray-800">
              {eligible4.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-start  lg:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gold">
              Sole traders who must be:
            </h3>

            <ul className="space-y-3 gap-4 text-lg px-4 list-disc text-gray-800">
              {eligible2.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-gold">
              Charities that are:
            </h3>

            <ul className="space-y-3 text-lg list-disc px-4 gap-4 text-gray-800">
              {eligible3.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VanScheme;
