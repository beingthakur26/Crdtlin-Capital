import React from "react";
import { Building2 } from "lucide-react";

const OurPartners = () => {
  // Placeholder function to generate generic partner logos
  const PartnerLogo = ({ name }) => (
    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
      <div className="p-3 bg-blue-100 rounded-lg">
        <Building2 className="w-8 h-8 text-[var(--color-brand)]" />
      </div>
      <span className="text-xl font-bold text-gray-700">{name}</span>
    </div>
  );

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] uppercase tracking-widest opacity-70">
            Trusted by Leaders
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          <PartnerLogo name="HDFC Bank" />
          <PartnerLogo name="ICICI Bank" />
          <PartnerLogo name="SBI" />
          <PartnerLogo name="Axis Bank" />
          <PartnerLogo name="Bajaj Finserv" />
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
