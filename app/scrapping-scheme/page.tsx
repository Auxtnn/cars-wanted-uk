import React from "react";

import ScrapHero from "../Components/SCrappingHero";
import ScrapIntro from "../Components/ScrapIntro";
import Scheme from "../Components/CarMotorScheme";
import RecentInitiatives from "../Components/Criteria";
import VanScheme from "../Components/Van";
import CheckForm from "../Components/CheckVehicle";

export default function Home() {
  return (
    <div>
      <ScrapHero />
      <ScrapIntro />

      <Scheme />

      <RecentInitiatives />
      <VanScheme />
      <CheckForm />
    </div>
  );
}
