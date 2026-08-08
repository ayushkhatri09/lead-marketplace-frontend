import {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Lock,
  Wallet,
  RadioTower,
  MousePointerClick,
  ArrowRight,
  ArrowDown,
  HeartHandshake,
  Award,
  Users,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Providers",
    description: "Every professional is identity-checked before they can accept a lead.",
  },
  {
    icon: Zap,
    title: "Fast Lead Matching",
    description: "Requests reach nearby providers instantly — no waiting, no delays.",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description: "Payments and personal details are protected at every step.",
  },
  {
    icon: Wallet,
    title: "Affordable Services",
    description: "Transparent pricing with no hidden charges or surprise fees.",
  },
  {
    icon: RadioTower,
    title: "Real-Time Updates",
    description: "Track your request live, from acceptance to job completion.",
  },
  {
    icon: MousePointerClick,
    title: "Easy Booking",
    description: "Book a trusted professional in just a few taps.",
  },
];

const steps = [
  { number: "1", title: "Choose Service" },
  { number: "2", title: "Create Request" },
  { number: "3", title: "Nearby Providers Receive Lead" },
  { number: "4", title: "Get Your Work Done" },
];

const stats = [
  { value: "12+", label: "Service Categories" },
  { value: "1000+", label: "Trusted Providers" },
  { value: "5000+", label: "Completed Leads" },
  { value: "24x7", label: "Support" },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Trust",
    description: "Every interaction is built on verified identities and honest ratings.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We hold every professional to a consistent standard of work.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear pricing and honest communication, always.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision starts with what's best for the people we serve.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We keep improving how people find and hire local help.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="px-6 pt-24 pb-16 text-center sm:pt-32">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          About Lead Marketplace
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          Connecting customers with trusted local service providers through a
          simple, secure and fast marketplace.
        </p>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Story</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            Lead Marketplace is a platform built to simplify hiring local
            professionals. Whether someone needs a mechanic, plumber,
            electrician or carpenter, finding trusted professionals should
            take only a few clicks. We believe local businesses deserve
            better opportunities while customers deserve faster service.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Target size={28} strokeWidth={1.8} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              To connect every customer with the right professional instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Eye size={28} strokeWidth={1.8} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              To become India&apos;s most trusted service marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Why Choose Us
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>

          <div className="mt-14 flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center lg:flex-row lg:gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
                    {step.number}
                  </div>
                  <p className="mt-3 max-w-[160px] text-sm font-semibold text-slate-900">
                    {step.title}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <>
                    <ArrowDown size={20} className="my-4 text-slate-300 lg:hidden" />
                    <ArrowRight size={20} className="hidden shrink-0 text-slate-300 lg:block" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PLATFORM STATISTICS ================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Our Values
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-900 px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-300 sm:text-base">
            Find trusted professionals near you today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
            >
              Explore Services
            </button>
            <button
              type="button"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Become a Provider
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400">
        <p>© 2026 Lead Marketplace Platform</p>
        <p className="mt-1">Built with ❤️ for local businesses.</p>
      </footer>
    </main>
  );
}