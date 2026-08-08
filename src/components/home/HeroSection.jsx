// "use client";

// export default function HeroSection() {
//   return (
//     <section className="border-b border-[var(--color-border)] bg-[var(--color-background)]">
//       <div className="mx-auto max-w-7xl px-6 py-20">

//         <div className="grid items-center gap-12 lg:grid-cols-2">

//           {/* Left */}

//           <div>

//             <span className="inline-flex rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
//               🚀 India's Smart Lead Marketplace
//             </span>

//             <h1 className="mt-6 text-5xl font-extrabold leading-tight">
//               Find Trusted
//               <br />
//               Service Providers
//               <br />
//               Near You
//             </h1>

//             <p className="mt-6 max-w-xl text-lg text-[var(--color-foreground-muted)]">
//               Search nearby verified professionals, compare ratings,
//               and create a lead within seconds.
//               Fast, secure and hassle-free.
//             </p>

//             <div className="mt-10 flex flex-wrap gap-4">

//               <button
//                 className="rounded-xl bg-[var(--color-primary)] px-8 py-3 font-semibold text-white transition hover:scale-105"
//               >
//                 Create Lead
//               </button>

//               <button
//                 className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-3 font-semibold transition hover:bg-[var(--color-primary)] hover:text-white"
//               >
//                 Become Provider
//               </button>

//             </div>

//           </div>

//           {/* Right */}

//           <div className="grid gap-5">

//             <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
//               <h3 className="font-semibold text-green-700">
//                 ✅ Lead Created
//               </h3>

//               <p className="mt-2 text-sm text-green-600">
//                 Customers can create service requests in seconds.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
//               <h3 className="font-semibold text-blue-700">
//                 📍 Nearby Providers
//               </h3>

//               <p className="mt-2 text-sm text-blue-600">
//                 Instantly discover professionals around your location.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 shadow-sm">
//               <h3 className="font-semibold text-yellow-700">
//                 💳 Secure Payment
//               </h3>

//               <p className="mt-2 text-sm text-yellow-600">
//                 Providers unlock customer details only after payment.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5 shadow-sm">
//               <h3 className="font-semibold text-purple-700">
//                 ⭐ Verified Professionals
//               </h3>

//               <p className="mt-2 text-sm text-purple-600">
//                 Connect only with trusted and verified service providers.
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
// "use client";

// import { motion } from "framer-motion";
// import { Rocket, CheckCircle2, MapPin, CreditCard, Star, ArrowRight } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
// };

// const staggerContainer = (stagger = 0.12, delay = 0) => ({
//   hidden: {},
//   visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
// });

// const cards = [
//   {
//     icon: CheckCircle2,
//     title: "Lead Created",
//     description: "Post a request in seconds — no forms, no friction.",
//     gradient: "linear-gradient(135deg, var(--teal-400), var(--teal-600))",
//   },
//   {
//     icon: MapPin,
//     title: "Nearby Providers",
//     description: "Matched instantly with verified pros near you.",
//     gradient: "linear-gradient(135deg, var(--ember-400), var(--ember-600))",
//   },
//   {
//     icon: CreditCard,
//     title: "Secure Payment",
//     description: "Details unlock only after payment is confirmed.",
//     gradient: "var(--gradient-brand)",
//   },
//   {
//     icon: Star,
//     title: "Verified Pros",
//     description: "Every provider is background-checked and rated.",
//     gradient: "var(--gradient-vibrant)",
//   },
// ];

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]">
//       {/* Animated gradient mesh background */}
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 -z-10"
//         animate={{
//           background: [
//             "radial-gradient(650px circle at 10% 10%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%), radial-gradient(550px circle at 95% 30%, color-mix(in srgb, var(--teal-400) 14%, transparent), transparent 60%), radial-gradient(500px circle at 60% 90%, color-mix(in srgb, var(--ember-400) 10%, transparent), transparent 60%)",
//             "radial-gradient(650px circle at 20% 30%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%), radial-gradient(550px circle at 85% 10%, color-mix(in srgb, var(--teal-400) 14%, transparent), transparent 60%), radial-gradient(500px circle at 40% 85%, color-mix(in srgb, var(--ember-400) 10%, transparent), transparent 60%)",
//             "radial-gradient(650px circle at 10% 10%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%), radial-gradient(550px circle at 95% 30%, color-mix(in srgb, var(--teal-400) 14%, transparent), transparent 60%), radial-gradient(500px circle at 60% 90%, color-mix(in srgb, var(--ember-400) 10%, transparent), transparent 60%)",
//           ],
//         }}
//         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* Left */}
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.12)}>
//             <motion.span
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md"
//               style={{ background: "var(--gradient-vibrant)" }}
//             >
//               <Rocket size={16} />
//               India&apos;s Smart Lead Marketplace
//             </motion.span>

//             <motion.h1
//               variants={fadeUp}
//               className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight"
//               style={{ color: "var(--navy-700)" }}
//             >
//               Find Trusted
//               <br />
//               Service Providers
//               <br />
//               <span
//                 className="bg-clip-text text-transparent"
//                 style={{ backgroundImage: "var(--gradient-vibrant)" }}
//               >
//                 Near You
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-foreground-muted)]"
//             >
//               Search nearby verified professionals, compare ratings, and
//               create a lead within seconds. Fast, secure and hassle-free.
//             </motion.p>

//             <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-6">
//               <motion.button
//                 whileHover={{ scale: 1.04, boxShadow: "var(--shadow-hover)" }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 22 }}
//                 className="flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-white shadow-md"
//                 style={{ background: "linear-gradient(135deg, var(--amber-400), var(--ember-500))" }}
//               >
//                 Get Started
//                 <ArrowRight size={16} />
//               </motion.button>

//               <div className="flex items-center gap-3">
//                 <div className="flex -space-x-3">
//                   {["var(--amber-400)", "var(--teal-400)", "var(--navy-400)", "var(--ember-400)"].map((bg, i) => (
//                     <span
//                       key={i}
//                       className="h-9 w-9 rounded-full border-2"
//                       style={{ background: bg, borderColor: "var(--color-background)" }}
//                     />
//                   ))}
//                 </div>
//                 <div className="text-sm">
//                   <div className="font-semibold" style={{ color: "var(--navy-700)" }}>
//                     4,200+ providers
//                   </div>
//                   <div className="text-[var(--color-foreground-muted)]">already onboard</div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right — 2x2 gradient card grid */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer(0.1, 0.3)}
//             className="grid grid-cols-2 gap-4"
//           >
//             {cards.map((card, i) => {
//               const Icon = card.icon;
//               return (
//                 <motion.div
//                   key={card.title}
//                   variants={fadeUp}
//                   whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
//                   transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
//                   className="relative overflow-hidden rounded-2xl p-5 text-white shadow-md"
//                   style={{ background: card.gradient }}
//                 >
//                   <div
//                     aria-hidden
//                     className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15 blur-xl"
//                   />
//                   <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
//                     <Icon size={17} />
//                   </span>
//                   <h3 className="relative mt-4 text-sm font-semibold">{card.title}</h3>
//                   <p className="relative mt-1.5 text-xs leading-relaxed text-white/85">
//                     {card.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Rocket, CheckCircle2, MapPin, CreditCard, Star, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const cards = [
  {
    icon: CheckCircle2,
    title: "Lead Created",
    description: "Post a request in seconds — no forms, no friction.",
    gradient: "linear-gradient(135deg, var(--teal-400), var(--teal-600))",
  },
  {
    icon: MapPin,
    title: "Nearby Providers",
    description: "Matched instantly with verified pros near you.",
    gradient: "linear-gradient(135deg, var(--ember-400), var(--ember-600))",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Details unlock only after payment is confirmed.",
    gradient: "var(--gradient-brand)",
  },
  {
    icon: Star,
    title: "Verified Pros",
    description: "Every provider is background-checked and rated.",
    gradient: "var(--gradient-vibrant)",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]">
      {/* Animated gradient mesh background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(650px circle at 10% 10%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%), radial-gradient(550px circle at 95% 30%, color-mix(in srgb, var(--teal-400) 14%, transparent), transparent 60%), radial-gradient(500px circle at 60% 90%, color-mix(in srgb, var(--ember-400) 10%, transparent), transparent 60%)",
            "radial-gradient(650px circle at 20% 30%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%), radial-gradient(550px circle at 85% 10%, color-mix(in srgb, var(--teal-400) 14%, transparent), transparent 60%), radial-gradient(500px circle at 40% 85%, color-mix(in srgb, var(--ember-400) 10%, transparent), transparent 60%)",
            "radial-gradient(650px circle at 10% 10%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%), radial-gradient(550px circle at 95% 30%, color-mix(in srgb, var(--teal-400) 14%, transparent), transparent 60%), radial-gradient(500px circle at 60% 90%, color-mix(in srgb, var(--ember-400) 10%, transparent), transparent 60%)",
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.12)}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md"
              style={{ background: "var(--gradient-vibrant)" }}
            >
              <Rocket size={16} />
              India&apos;s Smart Lead Marketplace
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight"
              style={{ color: "var(--navy-700)" }}
            >
              Find Trusted
              <br />
              Service Providers
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-vibrant)" }}
              >
                Near You
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-foreground-muted)]"
            >
              Search nearby verified professionals, compare ratings, and
              create a lead within seconds. Fast, secure and hassle-free.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "var(--shadow-hover)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-white shadow-md"
                style={{ background: "linear-gradient(135deg, var(--amber-400), var(--ember-500))" }}
              >
                Get Started
                <ArrowRight size={16} />
              </motion.button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["var(--amber-400)", "var(--teal-400)", "var(--navy-400)", "var(--ember-400)"].map((bg, i) => (
                    <span
                      key={i}
                      className="h-9 w-9 rounded-full border-2"
                      style={{ background: bg, borderColor: "var(--color-background)" }}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold" style={{ color: "var(--navy-700)" }}>
                    4,200+ providers
                  </div>
                  <div className="text-[var(--color-foreground-muted)]">already onboard</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — 2x2 gradient card grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.3)}
            className="grid grid-cols-2 gap-4"
          >
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-2xl p-5 text-white shadow-md"
                  style={{ background: card.gradient }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15 blur-xl"
                  />
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                    <Icon size={17} />
                  </span>
                  <h3 className="relative mt-4 text-sm font-semibold">{card.title}</h3>
                  <p className="relative mt-1.5 text-xs leading-relaxed text-white/85">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}