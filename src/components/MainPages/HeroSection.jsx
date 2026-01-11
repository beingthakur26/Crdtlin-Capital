import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  Home,
  User,
  ArrowRightLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useApply } from "../../context/ApplyContext";

const HeroSection = () => {
  const { openModal } = useApply();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      type: "Personal Loan",
      headline: "Cash for Your Dreams",
      subhead:
        "Quick, hassle-free personal loans for travel, medical, or lifestyle needs.",
      icon: <User className="w-12 h-12 text-blue-400" />,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      criteria: [
        "Min Income: ₹25,000",
        "Age: 21-60 Years",
        "Credit Score: 700+",
      ],
      cta: "Apply Now",
      path: "/services/personal-loan",
    },
    {
      id: 4,
      type: "Balance Transfer",
      headline: "Pay Less, Save More",
      subhead:
        "Transfer your outstanding loan balances to us at lower interest rates.",
      icon: <ArrowRightLeft className="w-12 h-12 text-purple-400" />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80",
      criteria: [
        "Existing Loan: ₹1L+",
        "Track Record: 12+ EMIs",
        "Credit Score: 750+",
      ],
      cta: "Transfer Now",
      path: "/services/balance-transfer",
    },
    {
      id: 2,
      type: "Home Loan",
      headline: "Build Your Legacy",
      subhead:
        "Affordable home financing with extended tenure and lowest interest rates.",
      icon: <Home className="w-12 h-12 text-green-400" />,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1773&q=80",
      criteria: [
        "Salary: ₹40,000+",
        "Experience: 2 Years",
        "Max Tenure: 30 Years",
      ],
      cta: "Check Rates",
      path: "/services/home-loan",
    },
    {
      id: 3,
      type: "Business Loan",
      headline: "Scale New Heights",
      subhead:
        "Capital to expand your operations, buy inventory, or manage cash flow.",
      icon: <Briefcase className="w-12 h-12 text-orange-400" />,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      criteria: ["Turnover: ₹5L+", "Vintage: 3 Years", "Profitable: 2 Years"],
      cta: "Grow Business",
      path: "/services/business-loan",
    },
  ];

  // Auto-play Logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 Seconds

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div
      id="home"
      className="relative w-full h-screen min-h-[600px] bg-[var(--color-brand)] overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Overlay for text readability - Stronger based on user feedback */}

      {/* Slide Content */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.type}
                className="w-full h-full object-cover transform scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand)] via-transparent to-black/30 z-10" />

            {/* Content Container - Centered and constrained width */}
            <div className="relative z-20 h-full w-full flex items-center justify-center">
              <div
                className={`w-[90%] md:w-[75%] lg:w-[70%] flex flex-col items-center text-center space-y-8 transition-all duration-700 delay-200 transform ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-[var(--color-brand)]/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-xl">
                  {slide.icon}
                  <span className="font-bold tracking-wider uppercase text-blue-200 text-sm md:text-base">
                    {slide.type}
                  </span>
                </div>

                {/* Text Content - High Contrast Card */}
                <div className="bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl w-full">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-xl">
                    {slide.headline}
                  </h1>
                  <p className="text-lg md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
                    {slide.subhead}
                  </p>

                  {/* Animated Eligibility Cards - Centered Loop */}
                  <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {slide.criteria.map((bgItem, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl border border-white/20 text-sm md:text-base font-semibold text-white transition-colors animate-fade-in-up"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        {bgItem}
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <button
                      onClick={openModal}
                      className="group flex items-center justify-center gap-3 bg-[var(--color-cta)] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,122,0,0.4)] hover:shadow-[0_0_30px_rgba(255,122,0,0.6)] transition-all hover:-translate-y-1 transform-gpu w-full sm:w-auto"
                    >
                      {slide.cta}
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      onClick={() => navigate(slide.path)}
                      className="flex items-center justify-center gap-3 bg-white/10 text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto backdrop-blur-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center items-center gap-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "w-8 bg-[var(--color-cta)]"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
