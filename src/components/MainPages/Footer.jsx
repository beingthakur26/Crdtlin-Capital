import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F4C81] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/crdtlin website.jpg"
                alt="Crdtlin Capital Logo"
                className="h-12 w-12 object-contain rounded-full bg-white p-1"
              />
              <h2 className="text-2xl font-bold">Crdtlin Capital</h2>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering your financial journey with trust, transparency, and
              speed. We provide tailored loan solutions to help you achieve your
              dreams.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/crdtlin.capital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-cta)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/crdtlin-capital1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-cta)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/emi-calculator"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Loans */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/personal-loan"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link
                  to="/services/home-loan"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Home Loan
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-loan"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Business Loan
                </Link>
              </li>
              <li>
                <Link
                  to="/services/balance-transfer"
                  className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Balance Transfer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-200">
                <MapPin className="w-5 h-5 text-[var(--color-cta)] flex-shrink-0 mt-1" />
                <span>
                  102/103/104 Shree Apartment, Near Panchamrut Restaurant, Virar
                  East, 401303
                </span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Phone className="w-5 h-5 text-[var(--color-cta)] flex-shrink-0" />
                <a
                  href="tel:+918291223678"
                  className="hover:text-white transition-colors"
                >
                  +91 82912 23678
                </a>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Mail className="w-5 h-5 text-[var(--color-cta)] flex-shrink-0" />
                <a
                  href="mailto:info@crdtlincapital.com"
                  className="hover:text-white transition-colors"
                >
                  info@crdtlincapital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-blue-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Crdtlin Capital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
