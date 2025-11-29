import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Stats from "./components/Stats";
import ServicesSection from "./components/ServicesSection";
import ServicesTabs from "./components/ServicesTabs";
import FeaturesSection from "./components/FeaturesSection";
import FeaturesGrid from "./components/FeaturesGrid";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Stats />
      <ServicesSection />
      <ServicesTabs />
      <FeaturesSection />
      <FeaturesGrid />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactBanner />
      <Footer />
    
{/* 
      <footer className="text-center py-4 text-muted mt-5">
        © {new Date().getFullYear()} Landio — Starter Template
      </footer> */}
    </>
  );
};

export default App;
