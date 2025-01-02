import React from "react";

import Area from "../../Components/Area";
import Hertfordshire from "@/app/Components/Hertfordshire";
import QuoteForm from "../../Components/Quote";

export default function Home() {
  return (
    <div>
      <Hertfordshire />
      <Area />
      <div className="w-full md:w-11/12 px-4 mx-auto md:text-center">
        <h2 className="lg:text-4xl font-extrabold text-2xl  capitalize mt-6">
          Fill-In <span className="text-primary"> the form below </span> for a
          quote
        </h2>
      </div>
      <QuoteForm />
    </div>
  );
}
