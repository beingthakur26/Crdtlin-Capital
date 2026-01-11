import React, { useState, useEffect, useRef } from "react";
import { Users, Building2, Wallet } from "lucide-react";

const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(target * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Animation complete, wait and restart
        setTimeout(() => {
          setCount(0);
          startTime = null; // Reset start time
          animationFrame = requestAnimationFrame(animate);
        }, 5000); // Wait 5 seconds before restarting
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const AssuranceSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Happy Customers */}
          <div className="flex flex-col items-center p-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-blue-50 p-4 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
              <Users className="w-10 h-10 text-[var(--color-brand)]" />
            </div>
            <h3 className="text-4xl font-extrabold text-[var(--color-brand)] mb-2">
              <AnimatedCounter target={10000} suffix="+" />
            </h3>
            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
              Happy Customers
            </p>
          </div>

          {/* Affiliated Banks */}
          <div className="flex flex-col items-center p-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-orange-100 transition-colors">
              <Building2 className="w-10 h-10 text-[var(--color-cta)]" />
            </div>
            <h3 className="text-4xl font-extrabold text-[var(--color-brand)] mb-2">
              <AnimatedCounter target={150} suffix="+" />
            </h3>
            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
              Affiliated Banks and NBFCs
            </p>
          </div>

          {/* Loan Amount Given */}
          <div className="flex flex-col items-center p-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-green-50 p-4 rounded-full mb-4 group-hover:bg-green-100 transition-colors">
              <Wallet className="w-10 h-10 text-green-600" />
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <h3 className="text-4xl font-extrabold text-[var(--color-brand)]">
                ₹<AnimatedCounter target={500} />
              </h3>
              <span className="text-2xl font-bold text-[var(--color-brand)]">
                Cr+
              </span>
            </div>
            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
              Loan Amount Disbursed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;
