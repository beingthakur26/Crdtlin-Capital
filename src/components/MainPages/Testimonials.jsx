import React from "react";
import { Star, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Mumbai",
      rating: 5,
      comment:
        "Crdtlin Capital helped me get a personal loan when I needed it the most. The process was incredibly fast and transparent. Highly recommended!",
    },
    {
      name: "Priya Patel",
      location: "Ahmedabad",
      rating: 5,
      comment:
        "I was looking for a home loan with a decent interest rate. The team at Crdtlin not only gave me the best rate but also guided me through the entire paperwork.",
    },
    {
      name: "Amit Verma",
      location: "Delhi",
      rating: 4,
      comment:
        "Great experience! The business loan approval was quick, which helped me expand my shop without any delay. Good customer support too.",
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      comment:
        "I appcreciate the transparency. No hidden charges, everything was explained clearly. The EMI calculator on the site was also very accurate.",
    },
    {
      name: "Vikram Singh",
      location: "Bangalore",
      rating: 5,
      comment:
        "Professional and efficient. I applied online and got a call within 30 minutes. The disbursement happened within 24 hours. Fantastic service.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[var(--color-cta)] font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-[var(--color-brand)] mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 px-4 no-scrollbar snap-x snap-mandatory">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 snap-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{item.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[var(--color-brand)]">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand)]">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
