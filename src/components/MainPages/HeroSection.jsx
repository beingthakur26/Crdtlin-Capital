import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useApply } from "../../context/ApplyContext";

const HeroSection = () => {
  const { openModal } = useApply();

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#1a5f96] to-[#0F4C81]">
      {/* Abstract Shapes for Depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-slow"></div>

      {/* Main Content Container with Glass Effect */}
      <div className="relative z-10 w-[90%] max-w-4xl mx-auto p-8 md:p-12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center text-center gap-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Smart Loans. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-green-300">
            Trusted Decisions.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl">
          Get fast, transparent, and secure loans designed for your goals. No
          hidden charges. No stress.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full">
          <button
            onClick={openModal}
            className="flex items-center justify-center gap-3 bg-[var(--color-cta)] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Check Eligibility
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 pt-6 border-t border-white/10 w-full text-sm font-medium text-blue-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Instant Approval</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Minimal Documentation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
