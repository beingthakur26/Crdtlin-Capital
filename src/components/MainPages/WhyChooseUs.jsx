import React from "react";
import { ShieldCheck, Clock, ThumbsUp, Headset } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-[var(--color-cta)]" />,
      title: "Quick Approval",
      description:
        "Get your loan approved in as little as 24 hours with our streamlined process.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[var(--color-cta)]" />,
      title: "100% Secure",
      description:
        "Your data is protected with state-of-the-art encryption and security measures.",
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-[var(--color-cta)]" />,
      title: "Lowest Interest Rates",
      description:
        "We offer competitive interest rates starting from just 8.5% per annum.",
    },
    {
      icon: <Headset className="w-10 h-10 text-[var(--color-cta)]" />,
      title: "24/7 Support",
      description:
        "Our dedicated support team is always available to assist you with your queries.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--color-cta)] font-semibold uppercase tracking-wider text-sm">
            Why Choose Crdtlin
          </span>
          <h2 className="text-4xl font-bold text-[var(--color-brand)] mt-2">
            The Crdtlin Advantage
          </h2>
          <p className="text-lg text-[var(--color-text-primary)] mt-4 max-w-2xl mx-auto">
            We simplify the lending process so you can focus on what matters
            most to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-brand)] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
