import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20 pt-20">
      {/* Header */}
      <div className="bg-[#0F4C81] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-xl text-[#0F4C81] mb-3">
                1. Introduction
              </h3>
              <p>
                Welcome to Crdtlin Capital. These Terms and Conditions govern
                your use of our website and services. By accessing our platform,
                you agree to comply with these terms.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#0F4C81] mb-3">
                2. Eligibility
              </h3>
              <p>
                Our services are available to Indian citizens aged 21 and above.
                You must have valid identification and income proof to apply for
                any loan products.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#0F4C81] mb-3">
                3. Loan Approval
              </h3>
              <p>
                Loan approval is at the sole discretion of Crdtlin Capital and
                its financing partners. Submission of an application does not
                guarantee approval. Interest rates and tenure are subject to
                credit assessment.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#0F4C81] mb-3">
                4. Privacy & Data Security
              </h3>
              <p>
                We take your privacy seriously. Your data is encrypted and used
                only for credit verification and processing. We do not sell your
                data to third parties.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#0F4C81] mb-3">
                5. Repayment & Defaults
              </h3>
              <p>
                Borrowers are responsible for timely EMI payments. Failure to
                repay may result in penalties, impact your credit score, and
                legal action as per Indian laws.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#0F4C81] mb-3">
                6. Changes to Terms
              </h3>
              <p>
                Crdtlin Capital reserves the right to modify these terms at any
                time. Continued use of the service constitutes acceptance of the
                modified terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
