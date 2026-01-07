import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Home,
  Building2,
  ArrowRight,
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Services = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; // Scroll by roughly one card width
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const loans = [
    {
      title: "Personal Loan",
      icon: <User className="w-8 h-8 text-[var(--color-cta)]" />,
      description:
        "Designed to support your everyday financial needs, our personal loans offer quick access to funds with clear terms and flexible repayment options.",
      features: [
        "Fast approval with minimal documentation",
        "Flexible repayment tenures",
      ],
      link: "/services/personal-loan",
    },
    {
      title: "Home Loan",
      icon: <Home className="w-8 h-8 text-[var(--color-cta)]" />,
      description:
        "Whether you're purchasing a new home or refinancing an existing one, our home loans are structured to provide long-term stability.",
      features: [
        "Competitive interest rates",
        "Long-term repayment options",
        "Trusted lending partners",
      ],
      link: "/services/home-loan",
    },
    {
      title: "Business Loan",
      icon: <Building2 className="w-8 h-8 text-[var(--color-cta)]" />,
      description:
        "Empower your business growth with financing solutions that help manage cash flow, expansion, and operational needs.",
      features: [
        "Quick disbursal for working capital",
        "No collateral for eligible businesses",
        "Flexible plans tailored to growth",
      ],
      link: "/services/business-loan",
    },
    {
      title: "Balance Transfer",
      icon: <ArrowRightLeft className="w-8 h-8 text-[var(--color-cta)]" />,
      description:
        "Reduce your EMI burden by transferring your existing high-interest loans to us. Enjoy lower interest rates and better terms.",
      features: [
        "Lower interest rates",
        "Reduce monthly EMI",
        "Top-up loan facility available",
      ],
      link: "/services/balance-transfer",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-[var(--color-secondary)] relative group"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[var(--color-brand)] mb-4">
              Our Loan Products
            </h2>
            <p className="text-lg text-[var(--color-text-primary)]">
              Choose the financing solution that best fits your goals.
            </p>
          </div>

          {/* Scroll Controls */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white border border-gray-200 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white transition-all shadow-md active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white border border-gray-200 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-8 no-scrollbar touch-pan-x snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {loans.map((loan, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-[var(--color-cta)] snap-center flex flex-col"
            >
              <div className="mb-6 bg-[var(--color-secondary)] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                {loan.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-brand)] mb-3">
                {loan.title}
              </h3>
              <p className="text-[var(--color-text-primary)] mb-6 leading-relaxed flex-grow">
                {loan.description}
              </p>
              <ul className="mb-8 space-y-2">
                {loan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-[var(--color-text-primary)]"
                  >
                    <span className="mr-2 text-[var(--color-cta)]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={loan.link}
                className="inline-flex items-center text-[var(--color-brand)] font-semibold hover:text-[var(--color-cta)] transition-colors mt-auto"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
