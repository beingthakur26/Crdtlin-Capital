import React from "react";
import { Link } from "react-router-dom";
import { User, Home, Building2, ArrowRight } from "lucide-react";

const Services = () => {
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
  ];

  return (
    <section id="services" className="py-20 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-brand)] mb-4">
            Our Loan Products
          </h2>
          <p className="text-lg text-[var(--color-text-primary)] max-w-2xl mx-auto">
            Choose the financing solution that best fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-[var(--color-cta)]"
            >
              <div className="mb-6 bg-[var(--color-secondary)] w-16 h-16 rounded-full flex items-center justify-center">
                {loan.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-brand)] mb-3">
                {loan.title}
              </h3>
              <p className="text-[var(--color-text-primary)] mb-6 leading-relaxed">
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
                className="inline-flex items-center text-[var(--color-brand)] font-semibold hover:text-[var(--color-cta)] transition-colors"
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
