import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Crdltlin Capital, your privacy is important to us. This Privacy
              Policy explains how we collect, use, protect, and disclose your
              information when you visit our website or submit your details for
              our financial services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you agree to the practices described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following information when you interact with
              our website or services:
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Personal Information
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>City / Location</li>
              <li>Employment or Business Details</li>
              <li>Loan requirements and related financial information</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Technical Information
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and interaction data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This data helps us improve user experience and provide better
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>Contact you regarding loan enquiries</li>
              <li>Process and evaluate loan eligibility</li>
              <li>Connect you with banks, NBFCs, or financial institutions</li>
              <li>Improve our website and services</li>
              <li>Send updates, offers, or service-related communication</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-semibold">
              We do not sell your personal data to third parties. Period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Data Sharing & Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be shared only with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>Partner banks and NBFCs for loan processing</li>
              <li>Regulatory or legal authorities when required by law</li>
              <li>Trusted service providers assisting our operations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All partners are obligated to keep your data confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We take data security seriously. Appropriate technical and
              organizational measures are used to protect your information
              against:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>Unauthorized access</li>
              <li>Misuse</li>
              <li>Loss or alteration</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no online transmission is 100% secure, and users share
              information at their own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may use cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>Enhance browsing experience</li>
              <li>Analyze traffic and user behavior</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can disable cookies in your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for communication</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed py-2">
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of those
              websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed py-2">
              This Privacy Policy may be updated from time to time. Any changes
              will be posted on this page with an updated date.
            </p>
          </section>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy or how
              your data is handled, you can contact us at:
            </p>
            <div className="text-gray-700 font-semibold">
              <p>Crdltlin Capital</p>
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:info@crdtlincapital.com"
                  className="text-[var(--color-cta)] hover:underline"
                >
                  info@crdtlincapital.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
