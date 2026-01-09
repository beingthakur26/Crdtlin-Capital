import React, { useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_heq88mg",
        "template_41n3zfb",
        formRef.current,
        "ymflJ9jqcWObQUS1t"
      )
      .then(
        () => {
          alert("Message sent successfully");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      {/* Header Section */}
      <div className="bg-[#0F4C81] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-cta)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            Have questions about our loans or services? We're here to help.
            Reach out to us and let's start a conversation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#0F4C81]">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">Mon-Sat from 9am to 7pm.</p>
              <a
                href="tel:+918291223678"
                className="text-[#0F4C81] font-semibold hover:text-[var(--color-cta)]"
              >
                +91 82912 23678
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#0F4C81]">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">
                Our friendly team is here to help.
              </p>
              <a
                href="mailto:info@crdtlincapital.com"
                className="text-[#0F4C81] font-semibold hover:text-[var(--color-cta)]"
              >
                info@crdtlincapital.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#0F4C81]">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-500 mb-4">
                Come say hello at our office HQ.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=102/103/104+Shree+Apartment,+Near+Panchamrut+Restaurant,+Virar+East,+401303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F4C81] font-medium hover:text-[var(--color-cta)] block"
              >
                102/103/104 Shree Apartment,
                <br />
                Near Panchamrut Restaurant,
                <br />
                Virar East, 401303
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full">
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Send us a message
                  </h2>
                  <p className="text-gray-500">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="full_name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Other">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0F4C81] text-white font-bold py-4 rounded-lg hover:bg-[#0b3860] transition-all hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 px-2">
            Find us on map
          </h3>
          <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden relative">
            {/* Using a static map image or iframe placeholder since we don't have a real API key */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15068.784232356507!2d72.8055!3d19.4563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a99f3bd07371%3A0x6e7606e1236165e3!2sVirar%20East%2C%20Virar%2C%20Maharashtra%20401305!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
