"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Headphones,
  Handshake,
  UserPlus,
  MessageCircle,
  ChevronDown,
  PhoneCall,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Lead Marketplace", "Indore, Madhya Pradesh", "India"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["support@leadmarketplace.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday - Saturday", "9:00 AM – 7:00 PM"],
  },
];

const reasons = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Need help with a booking or an ongoing request.",
  },
  {
    icon: Handshake,
    title: "Business Partnership",
    description: "Interested in partnering or collaborating with us.",
  },
  {
    icon: UserPlus,
    title: "Provider Registration",
    description: "Want to join as a verified service professional.",
  },
  {
    icon: MessageCircle,
    title: "General Inquiry",
    description: "Have a question that doesn't fit the categories above.",
  },
];

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Choose a service from our Services page, describe what you need, and nearby providers are notified instantly. The first available provider accepts your request.",
  },
  {
    question: "How can I become a provider?",
    answer:
      "Register on our platform as a provider, complete the verification process, and start receiving leads in your service area.",
  },
  {
    question: "Are providers verified?",
    answer:
      "Yes. Every provider goes through an identity verification process before they can accept leads on the platform.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are made securely through the app after a job is completed. Funds are only released once both sides confirm the work is done.",
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Page() {
  const [form, setForm] = useState(initialForm);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm(initialForm);
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen w-full bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="px-6 pt-24 pb-16 text-center sm:pt-32">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          We&apos;re here to help. Reach out to us anytime and our team will
          get back to you as soon as possible.
        </p>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <div className="mt-2 space-y-0.5">
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-slate-500">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Send Us a Message</h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Fill out the form below and we&apos;ll respond as soon as we can.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= WHY CONTACT US ================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Why Contact Us
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-900 px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need immediate assistance?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-300 sm:text-base">
            Call our support team today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
            >
              <PhoneCall size={16} />
              Call Now
            </button>
            <button
              type="button"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400">
        <p>© 2026 Lead Marketplace Platform</p>
        <p className="mt-1">Made with ❤️ in India</p>
      </footer>
    </main>
  );
}