import React from "react";

import AboutHero from "../Components/AboutHero";
import Faq from "../Components/Faq";
import About from "../Components/AboutMain";
import Area from "../Components/Area";
import Gallery from "../Components/Gallery";
export default function Home() {
  return (
    <div>
      <AboutHero />
      <About />
      <Area />
      <Faq />
      <Gallery />
    </div>
  );
}
