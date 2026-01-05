import React from "react";
import { CheckCircle2, ShieldCheck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 pt-20">
      {/* Header */}
      <div className="bg-[#0F4C81] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Crdtlin Capital
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Building a future where financial freedom is accessible to everyone.
            Trust, speed, and transparency are at the core of everything we do.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
              alt="Team Meeting"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0F4C81] mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2025, Crdtlin Capital started with a simple vision: to
              make borrowing effortless. We saw the complexities and delays in
              traditional banking and built a digital-first platform that puts
              the customer first.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We leverage advanced technology to assess creditworthiness beyond
              just scores, allowing us to support ambitious individuals and
              growing businesses who might be overlooked by others.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#0F4C81]">
            <ShieldCheck className="w-12 h-12 text-[#0F4C81] mb-4" />
            <h3 className="text-xl font-bold mb-3">Integrity First</h3>
            <p className="text-gray-600">
              We operate with 100% transparency. No hidden charges, no fine
              print surprises.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[var(--color-cta)]">
            <CheckCircle2 className="w-12 h-12 text-[var(--color-cta)] mb-4" />
            <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
            <p className="text-gray-600">
              Every product we design starts with "How does this help our
              customer?"
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
            <Users className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Inclusive Growth</h3>
            <p className="text-gray-600">
              We aim to provide financial access to underserved markets and
              sectors.
            </p>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div
          id="terms"
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-[#0F4C81] mb-8 border-b pb-4">
            Terms and Conditions
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                1. Introduction
              </h3>
              <p>
                Welcome to Crdtlin Capital. These Terms and Conditions govern
                your use of our website and services. By accessing our platform,
                you agree to comply with these terms.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                2. Eligibility
              </h3>
              <p>
                Our services are available to Indian citizens aged 21 and above.
                You must have valid identification and income proof to apply for
                any loan products.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
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
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                4. Privacy & Data Security
              </h3>
              <p>
                We take your privacy seriously. Your data is encrypted and used
                only for credit verification and processing. We do not sell your
                data to third parties.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                5. Repayment & Defaults
              </h3>
              <p>
                Borrowers are responsible for timely EMI payments. Failure to
                repay may result in penalties, impact your credit score, and
                legal action as per Indian laws.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
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

export default About;
