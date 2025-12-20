import React from "react";

import Hero from "./Hero";
import Features from "./Features";
import Metrics from "./Metrics";
import Trial from "./Trial";
import Quotes from "./Quotes";
import CTA from "./Cta";
import Pricing from "./Pricing";



export default function Home() {
  return (
    <div>
    <Hero />
      <Features />
      <Metrics />
      <Trial />
      <Pricing />
      <Quotes />
      <CTA />
    </div>
  );
}
