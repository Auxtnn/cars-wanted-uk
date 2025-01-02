import React from "react";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import EstateBrokerage from "./Components/About";
import Services from "./Components/Services";
import WhatWeDoSection from "./Components/WhyChooseUs";
import Gallery from "./Components/Gallery";
import Faq from "./Components/Faq";
import QuoteForm from "./Components/QuoteFormHome";

export default function Home() {
  return (
    <div>
      <Hero />

      <EstateBrokerage />
      <Services />
      <QuoteForm />
      <WhatWeDoSection />
      <Gallery />
      <Testimonials />
      <Faq />
    </div>
  );
}
