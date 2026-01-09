import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/MainPages/Navigation";
import HeroSection from "./components/MainPages/HeroSection";
import AssuranceSection from "./components/MainPages/AssuranceSection";
import Services from "./components/MainPages/Services";
import PersonalLoan from "./components/LoanPages/PersonalLoan";
import HomeLoan from "./components/LoanPages/HomeLoan";
import BusinessLoan from "./components/LoanPages/BusinessLoan";
import BalanceTransfer from "./components/LoanPages/BalanceTransfer";
import ContactUs from "./components/MainPages/ContactUs";
import Footer from "./components/MainPages/Footer";
import TermsAndConditions from "./components/MainPages/TermsAndConditions";

import { ApplyProvider } from "./context/ApplyContext";
import ApplyModal from "./components/MainPages/ApplyModal";

import EMICalculator from "./components/MainPages/EMICalculator";
import WhyChooseUs from "./components/MainPages/WhyChooseUs";
import AboutUsSection from "./components/MainPages/AboutUsSection";
import OurPartners from "./components/MainPages/OurPartners";
import Testimonials from "./components/MainPages/Testimonials";
import About from "./components/MainPages/About";
import ScrollToTop from "./components/MainPages/ScrollToTop";

const App = () => {
  return (
    <ApplyProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
          <Navigation />
          <ApplyModal />
          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <AssuranceSection />
                    <Testimonials />
                    <Services />
                    <EMICalculator />
                    <WhyChooseUs />
                    <AboutUsSection />
                    <OurPartners />
                  </>
                }
              />
              {/* <Route path="/services" element={<Services />} /> - Removed as it is now on Home */}
              <Route
                path="/services/personal-loan"
                element={<PersonalLoan />}
              />
              <Route path="/services/home-loan" element={<HomeLoan />} />
              <Route
                path="/services/business-loan"
                element={<BusinessLoan />}
              />
              <Route
                path="/services/balance-transfer"
                element={<BalanceTransfer />}
              />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route
                path="/emi-calculator"
                element={
                  <div className="pt-20">
                    <EMICalculator />
                  </div>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApplyProvider>
  );
};

export default App;
