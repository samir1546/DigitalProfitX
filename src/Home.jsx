import React from "react";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import FlagshipSolution from "./Components/FlagshipSolution";
import ClientReviews from "./Components/ClientReviews";
import CTASection from "./Components/CTASection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Clients />
      <FlagshipSolution />
      <ClientReviews />
        <CTASection />
    </div>
  );
};

export default HomePage;
