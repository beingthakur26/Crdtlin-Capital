import React from "react";
import {
  ArrowLeft,
  CheckCircle,
  Percent,
  ArrowRightLeft,
  Banknote,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useApply } from "../../context/ApplyContext";

const BalanceTransfer = () => {
  const { openModal } = useApply();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
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
                Smart Financing
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-brand)] mb-6">
                Balance Transfer
              </h1>
              <p className="text-xl text-[var(--color-text-primary)] mb-8 leading-relaxed">
                Reduce your EMI burden by transferring your existing
                high-interest loans to Crdtlin Capital. Enjoy lower interest
                rates, better terms, and significant savings on your total
                repayment.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={openModal}
                  className="bg-[var(--color-cta)] text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity transform hover:scale-105"
                >
                  Apply for Transfer
                </button>
                <button
                  onClick={openModal}
                  className="bg-white text-[var(--color-brand)] border-2 border-[var(--color-brand)] px-8 py-3 rounded-full font-bold text-lg hover:bg-[var(--color-secondary)] transition-colors"
                >
                  Check Savings
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <Percent className="w-8 h-8 text-[var(--color-brand)] mb-4" />
                  <h3 className="font-bold text-lg mb-2">
                    Lower Interest Rates
                  </h3>
                  <p className="text-sm text-gray-600">
                    Switch to a lower rate and save money instantly.
                  </p>
                </div>
                <div className="p-6 bg-orange-50 rounded-xl">
                  <Banknote className="w-8 h-8 text-[var(--color-cta)] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Reduce EMI</h3>
                  <p className="text-sm text-gray-600">
                    Pay less every month with our tailored repayment plans.
                  </p>
                </div>
                <div className="p-6 bg-green-50 rounded-xl">
                  <ArrowRightLeft className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Top-up Loan</h3>
                  <p className="text-sm text-gray-600">
                    Get additional funds over and above your transferred amount.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-6">
                Why Choose Balance Transfer?
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Zero hidden charges on transfer",
                  "Simplified documentation process",
                  "Flexible tenure options up to 20 years",
                  "Consolidate multiple loans into one",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-lg text-[var(--color-text-primary)]">
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
  );
};

export default BalanceTransfer;
