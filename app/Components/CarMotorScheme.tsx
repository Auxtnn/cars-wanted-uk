import React from "react";

const Scheme: React.FC = () => {
  const eligible = [
    "Universal Credit",
    " Armed Forces Independence Payment",
    "Attendance Allowance",
    "Carer’s",
    "Allowance",
    "Child Tax Credit",
    "Constant Attendance Allowance",
    "Disability Living Allowance",
    "Employment and Support Allowance",
    "Housing Benefit",
    "Income Support",
    "Industrial Injuries Disablement Benefit",
    "Jobseeker’s Allowance",
    "Pension Credit",
    "Personal Independence Payment",
    "Severe Disablement Allowance",
    "War Pensioners’ Mobility Supplement",
    "Working Tax Credit",
  ];
  const eligible2 = [
    "V5C log book (DVLA registration document)",
    " Valid vehicle insurance certificate",
  ];

  const eligible3 = [
    " Scrap a car: £2,000",
    " Scrap a car: £1,600 plus one adult-rate Annual Bus & Tram Pass",
    " Scrap a car: £1,200 plus two adult-rate Annual Bus & Tram Passes",
    " Scrap a motorcycle: £1,000",
    " Scrap a motorcycle: £600 plus one adult-rate Annual Bus & Tram Pass",
    " Scrap a motorcycle: £200 plus two adult-rate Annual Bus & Tram Passes",
    " Scrap a wheelchair accessible vehicle (car or van): £5,000",
    " Retrofit a wheelchair accessible vehicle (van only): £5,000",
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="w-full md:w-11/12 px-4 mx-auto">
        <div className="w-full md:w-11/12 mx-auto md:text-center md:mb-8 mb-4">
          <h2 className="lg:text-4xl font-extrabold text-2xl  capitalize ">
            <span className="text-primary"> Car </span>
            and
            <span className="text-primary"> motorcycle </span>
            scrappage scheme
          </h2>
          <p className="text-lg text-gray-700  mx-auto">
            The Mayor of London’s new scrappage scheme for cars and motorcycles
            is helping to clear London’s air.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="flex flex-col items-start lg:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gold">
              Eligible applicants and vehicles
            </h3>
            <p className="text-lg text-gray-700 font-medium">
              To apply, you must live within one of the 32 London boroughs or
              the City of London and receive one or more of the following
              benefits:
            </p>
            <ul className="space-y-3 gap-4 list-disc text-lg px-4 text-gray-800">
              {eligible.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-start  lg:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gold ">About the vehicle</h3>
            <p className="text-lg text-gray-700 font-medium ">
              You will need to show that the vehicle is registered with the DVLA
              and that it is insured by providing:
            </p>
            <ul className="space-y-3 gap-4 text-lg list-disc px-4 text-gray-800">
              {eligible2.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-gold">
              Grant Payment Options
            </h3>
            <p className="text-lg text-gray-700 font-medium">
              For cars, motorcycles and wheelchair accessible cars or vans,
              there are eight grant payment options:
            </p>

            <ul className="space-y-3 text-lg list-disc gap-4 px-4 text-gray-800">
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

export default Scheme;
