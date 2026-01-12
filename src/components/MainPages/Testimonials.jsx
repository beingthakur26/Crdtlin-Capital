import React, { useRef } from "react";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

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
    {
      name: "Anjali Mehta",
      location: "Pune",
      rating: 5,
      comment:
        "I was skeptical about online loans, but Crdtlin changed my mind. Simple, secure, and fast. The entire process was digital.",
    },
    {
      name: "Rohit Khanna",
      location: "Chandigarh",
      rating: 4,
      comment:
        "Good rates for balance transfer. Helped me save on my monthly EMI significantly. The team was very helpful.",
    },
    {
      name: "Meera Iyer",
      location: "Chennai",
      rating: 5,
      comment:
        "Excellent customer service. They understood my business requirements and offered a tailored solution that helped me grow.",
    },
    {
      name: "Suresh Gupta",
      location: "Kolkata",
      rating: 5,
      comment:
        "The best thing about Crdtlin is their support. They explained every clause in detail. No surprises later. Very trustworthy.",
    },
    {
      name: "Kavita Rao",
      location: "Indore",
      rating: 4,
      comment:
        "Applied for a small business loan. Document collection was done at my doorstep. Very convenient and hassle-free service.",
    },
    {
      name: "Arjun Nair",
      location: "Kochi",
      rating: 5,
      comment:
        "Interest rates are lower than most banks. Plus, the online account management is very easy to use to track my loan.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-auto">
            <span className="text-[var(--color-cta)] font-semibold uppercase tracking-wider text-sm block">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-[var(--color-brand)] mt-2">
              What Our Customers Say
            </h2>
          </div>

          {/* Scroll Controls */}
          <div className="flex gap-4 justify-center md:justify-end w-full md:w-auto">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white border border-gray-200 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white transition-all shadow-md active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white border border-gray-200 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 px-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
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
