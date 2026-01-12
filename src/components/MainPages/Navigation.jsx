import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useApply } from "../../context/ApplyContext";

const Navigation = () => {
  const { openModal } = useApply();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-[#0F4C81]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-md font-sans">
      <div className="flex-shrink-0 flex items-center gap-2">
        <img
          src="/crdtlin website.jpg"
          alt="Crdtlin Capital Logo"
          className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] object-cover rounded-full"
        />
        <h1 className="text-white font-bold text-xl md:text-2xl">
          Crdtlin Capital
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        <li>
          <a
            href="/#home"
            className="no-underline text-white font-medium text-base transition-colors duration-300 hover:text-[var(--color-cta)]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#services"
            className="no-underline text-white font-medium text-base transition-colors duration-300 hover:text-[var(--color-cta)]"
          >
            Loans
          </a>
        </li>
        <li>
          <Link
            to="/about"
            className="no-underline text-white font-medium text-base transition-colors duration-300 hover:text-[var(--color-cta)]"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="no-underline text-white font-medium text-base transition-colors duration-300 hover:text-[var(--color-cta)]"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop Apply Button */}
      <div className="hidden md:block">
        <button
          onClick={openModal}
          className="bg-[var(--color-cta)] text-white px-5 py-2.5 rounded-md font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110 hover:-translate-y-px"
        >
          Apply now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-[var(--color-cta)] transition-colors"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F4C81] border-t border-white/10 shadow-xl flex flex-col p-6 space-y-4 md:hidden animate-fade-in-up">
          <a
            href="/#home"
            className="text-white text-lg font-medium hover:text-[var(--color-cta)] transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/#services"
            className="text-white text-lg font-medium hover:text-[var(--color-cta)] transition-colors"
            onClick={toggleMenu}
          >
            Loans
          </a>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-[var(--color-cta)] transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium hover:text-[var(--color-cta)] transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              openModal();
              toggleMenu();
            }}
            className="bg-[var(--color-cta)] text-white px-5 py-3 rounded-md font-semibold w-full text-center hover:brightness-110 transition-all"
          >
            Apply now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
