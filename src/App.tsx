import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import Trial from "./components/Trial";
import Quotes from "./components/Quotes";
import CTA from "./components/Cta";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Metrics />
      <Trial />
      <Pricing />
      <Quotes />
      <CTA />
      <Footer />
    </div>
  );
}
