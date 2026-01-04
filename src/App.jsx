import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/MainPages/Navigation";
import HeroSection from "./components/MainPages/HeroSection";
import Services from "./components/MainPages/Services";
import PersonalLoan from "./components/LoanPages/PersonalLoan";
import HomeLoan from "./components/LoanPages/HomeLoan";
import BusinessLoan from "./components/LoanPages/BusinessLoan";

import { ApplyProvider } from "./context/ApplyContext";
import ApplyModal from "./components/MainPages/ApplyModal";

import EMICalculator from "./components/MainPages/EMICalculator";
import WhyChooseUs from "./components/MainPages/WhyChooseUs";
import AboutUsSection from "./components/MainPages/AboutUsSection";
import OurPartners from "./components/MainPages/OurPartners";
import Testimonials from "./components/MainPages/Testimonials";

const App = () => {
  return (
    <ApplyProvider>
      <Router>
        <div className="min-h-screen bg-[var(--color-bg)]">
          <Navigation />
          <ApplyModal />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Services />
                  <EMICalculator />
                  <WhyChooseUs />
                  <AboutUsSection />
                  <OurPartners />
                  <Testimonials />
                </>
              }
            />
            {/* <Route path="/services" element={<Services />} /> - Removed as it is now on Home */}
            <Route path="/services/personal-loan" element={<PersonalLoan />} />
            <Route path="/services/home-loan" element={<HomeLoan />} />
            <Route path="/services/business-loan" element={<BusinessLoan />} />
          </Routes>
        </div>
      </Router>
    </ApplyProvider>
  );
};

export default App;
