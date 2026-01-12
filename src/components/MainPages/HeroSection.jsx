import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useApply } from "../../context/ApplyContext";

const HeroSection = () => {
  const { openModal } = useApply();

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg_premium.png"
          alt="Premium Financial Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for readability - Balanced for centered text */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 w-[70%] max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-6 pt-20">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          Smart Loans. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Trusted Decisions.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-md">
          Get fast, transparent, and secure loans designed for your goals. No
          hidden charges. No stress.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
          <button
            onClick={openModal}
            className="flex items-center justify-center gap-3 bg-[var(--color-cta)] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Check Eligibility
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm font-medium text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Instant Approval</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Minimal Documentation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
