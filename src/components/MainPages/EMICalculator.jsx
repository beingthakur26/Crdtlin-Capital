import React, { useState, useEffect } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";

const EMICalculator = () => {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const calculateEMI = () => {
      const principal = parseFloat(amount);
      const r = parseFloat(rate) / 12 / 100;
      const n = parseFloat(tenure) * 12;

      const emiValue =
        (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      const totalAmount = emiValue * n;
      const totalInterestValue = totalAmount - principal;

      setEmi(Math.round(emiValue));
      setTotalInterest(Math.round(totalInterestValue));
      setTotalPayment(Math.round(totalAmount));
    };

    calculateEMI();
  }, [amount, rate, tenure]);

  // Donut Chart CSS Gradient Calculation
  const interestPercentage = (totalInterest / totalPayment) * 100 || 0;
  const principalPercentage = 100 - interestPercentage;

  const chartGradient = `conic-gradient(
    var(--color-cta) 0% ${interestPercentage}%,
    var(--color-brand) ${interestPercentage}% 100%
  )`;

  return (
    <section id="emi-calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-brand)] mb-4">
            EMI Calculator
          </h2>
          <p className="text-lg text-[var(--color-text-primary)] max-w-2xl mx-auto">
            Plan your loan with our easy-to-use EMI calculator.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Inputs Section */}
          <div className="p-8 lg:p-12 lg:w-3/5 space-y-8 bg-slate-50">
            {/* Loan Amount */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[var(--color-brand)] font-semibold">
                <label className="flex items-center gap-2">
                  <DollarSign size={20} className="text-[var(--color-cta)]" />{" "}
                  Loan Amount
                </label>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-lg w-40">
                  <span className="mr-1">₹</span>
                  <input
                    type="number"
                    min="1000"
                    max="500000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full outline-none text-[var(--color-brand)] font-bold"
                  />
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-cta)]"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>₹1K</span>
                <span>₹500K</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[var(--color-brand)] font-semibold">
                <label className="flex items-center gap-2">
                  <Percent size={20} className="text-[var(--color-cta)]" />{" "}
                  Interest Rate
                </label>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-lg w-28">
                  <input
                    type="number"
                    min="1"
                    max="20"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full outline-none text-[var(--color-brand)] font-bold"
                  />
                  <span className="ml-1">%</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-cta)]"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>1%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[var(--color-brand)] font-semibold">
                <label className="flex items-center gap-2">
                  <Calendar size={20} className="text-[var(--color-cta)]" />{" "}
                  Tenure (Years)
                </label>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-lg w-28">
                  <input
                    type="number"
                    min="1"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full outline-none text-[var(--color-brand)] font-bold"
                  />
                  <span className="ml-1">Yr</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-cta)]"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:w-2/5 p-8 lg:p-12 bg-[var(--color-brand)] text-white flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 w-full text-center">
              <h3 className="text-xl font-medium text-blue-200 mb-8">
                Monthly EMI
              </h3>
              <div className="text-5xl font-bold mb-2">
                ₹{emi.toLocaleString()}
              </div>
              <p className="text-sm text-blue-300 mb-12">
                Total Payment: ₹{totalPayment.toLocaleString()}
              </p>

              {/* Donut Chart */}
              <div className="flex justify-center mb-10">
                <div
                  className="w-48 h-48 rounded-full shadow-2xl relative"
                  style={{ background: chartGradient }}
                >
                  <div className="absolute inset-4 bg-[var(--color-brand)] rounded-full flex flex-col items-center justify-center">
                    <span className="text-sm text-blue-200">
                      Total Interest
                    </span>
                    <span className="text-xl font-bold text-[var(--color-cta)]">
                      ₹{totalInterest.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-brand)] border border-white/50"></div>
                  <span className="text-blue-100">Principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-cta)]"></div>
                  <span className="text-blue-100">Interest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
