import React from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { useApply } from "../../context/ApplyContext";

const HomeLoan = () => {
  const { openModal } = useApply();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center text-[var(--color-text-primary)] hover:text-[var(--color-cta)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-secondary)] text-[var(--color-brand)] text-sm font-bold mb-4">
                Housing Finance
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-brand)] mb-6">
                Home Loan
              </h1>
              <p className="text-xl text-[var(--color-text-primary)] mb-8 leading-relaxed">
                Turn your dream home into reality with our affordable home loan
                solutions. Whether buying new, constructing, or renovating, we
                support you every step of the way with low rates and expert
                guidance.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={openModal}
                  className="bg-[var(--color-cta)] text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity transform hover:scale-105"
                >
                  Apply Now
                </button>
                <button
                  onClick={openModal}
                  className="bg-white text-[var(--color-brand)] border-2 border-[var(--color-brand)] px-8 py-3 rounded-full font-bold text-lg hover:bg-[var(--color-secondary)] transition-colors"
                >
                  Check Eligibility
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12 border-t pt-12 border-gray-100">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-brand)] mb-6">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-4">
                  {[
                    "Age: 21 to 70 years",
                    "Min Annual Income: ₹40,000",
                    "Work Experience: Min 2 years",
                    "Credit Score: 720+",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[var(--color-cta)] mr-3 flex-shrink-0" />
                      <span className="text-[var(--color-text-primary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--color-brand)] mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {[
                    "Attractive interest rates starting @ 8.5%",
                    "Longer tenure up to 30 years",
                    "Zero prepayment charges on floating rates",
                    "Doorstep service and quick processing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-brand)] mt-2 mr-3"></div>
                      <span className="text-[var(--color-text-primary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
