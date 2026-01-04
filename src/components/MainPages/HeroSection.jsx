import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

import { useApply } from "../../context/ApplyContext";

const HeroSection = () => {
  const { openModal } = useApply();

  return (
    <div
      id="home"
      className="relative w-full min-h-[90vh] bg-[var(--color-brand)] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20 lg:py-0 min-h-[inherit]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-blue-100 text-sm font-medium tracking-wide">
                Financial Freedom Starts Here
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Smart Loans. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Trusted Decisions.
              </span>
            </h1>

            <p className="text-base md:text-lg text-blue-100/80 max-w-xl leading-relaxed">
              Get fast, transparent, and secure loans designed for your goals.
              No hidden charges. No stress. Just simple, honest lending.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={openModal}
                className="group flex items-center justify-center gap-2 bg-[var(--color-cta)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 cursor-pointer"
              >
                Check Eligibility
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 cursor-pointer">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Fast Approval</p>
                  <p className="text-blue-200/60 text-xs">Under 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Secure Data</p>
                  <p className="text-blue-200/60 text-xs">256-bit Encyption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Image */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/40 to-transparent z-10"></div>
              <img
                src="/hero-image.png"
                alt="Financial Advisor and Client"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-8 top-1/4 z-20 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase">
                    Status
                  </p>
                  <p className="text-gray-900 font-bold">Loan Approved</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 z-20 bg-white p-4 rounded-xl shadow-xl animate-pulse-slow">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <TrendingUp className="w-6 h-6 text-[var(--color-cta)]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase">
                    Interest Rate
                  </p>
                  <p className="text-gray-900 font-bold">Starting @ 4.5%</p>
                </div>
              </div>
            </div>

            {/* Background blobs for image */}
            <div className="absolute inset-0 bg-blue-600/30 blur-[80px] -z-10 rounded-full scale-90"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
