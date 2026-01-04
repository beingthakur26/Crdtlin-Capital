import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-secondary)]/30 skew-x-12 translate-x-1/2 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 w-fit">
              <span className="text-[var(--color-brand)] text-sm font-bold tracking-wide">
                About Crdtlin Capital
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-brand)] leading-tight">
              Empowering Your <br />
              <span className="text-[var(--color-cta)]">Financial Journey</span>
            </h2>

            <p className="text-lg text-[var(--color-text-primary)] leading-relaxed text-justify">
              At Crdtlin Capital, we believe that access to credit should be
              simple, transparent, and dignified. Founded in 2025, we have
              helped thousands of individuals and businesses bridge the gap
              between their dreams and reality. Our mission is to provide
              financial solutions that are not just products, but pathways to
              growth.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[var(--color-brand)] font-bold text-lg hover:text-[var(--color-cta)] transition-colors group"
              >
                Read Our Story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 ">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                alt="Team working together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand)]/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-3xl font-bold">10k+</p>
                  <p className="text-blue-100">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
