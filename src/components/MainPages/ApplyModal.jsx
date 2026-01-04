import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { useApply } from "../../context/ApplyContext";

const ApplyModal = () => {
  const { isModalOpen, closeModal } = useApply();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "Personal Loan",
    city: "",
    monthlyIncome: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeModal();
        setFormData({
          name: "",
          phone: "",
          email: "",
          loanType: "Personal Loan",
          city: "",
          monthlyIncome: "",
        });
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[var(--color-brand)]">
              Apply Now
            </h2>
            <p className="text-[var(--color-text-primary)] mt-2">
              Get one step closer to your financial goal.
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-pulse-slow">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">
                Application Received!
              </h3>
              <p className="text-gray-600">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all"
                    placeholder="123-456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all"
                    placeholder="New York"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Type
                  </label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all"
                  >
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Business Loan">Business Loan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Income (₹)
                  </label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    required
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all"
                    placeholder="5000"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-cta)] text-white font-bold py-3 rounded-xl mt-6 hover:shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-0.5"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
