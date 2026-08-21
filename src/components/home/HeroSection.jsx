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

// "use client";

// import { motion } from "framer-motion";
// import {
//   Rocket,
//   CheckCircle2,
//   MapPin,
//   CreditCard,
//   Star,
//   ArrowRight,
// } from "lucide-react";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const staggerContainer = (stagger = 0.12, delay = 0) => ({
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: stagger,
//       delayChildren: delay,
//     },
//   },
// });

// const cards = [
//   {
//     icon: CheckCircle2,
//     title: "Lead Created",
//     description: "Post a request in seconds — no forms, no friction.",
//     color: "var(--color-success)",
//     background: "var(--status-success-bg)",
//   },
//   {
//     icon: MapPin,
//     title: "Nearby Providers",
//     description: "Matched instantly with verified professionals near you.",
//     color: "var(--color-primary)",
//     background: "var(--state-selected-bg)",
//   },
//   {
//     icon: CreditCard,
//     title: "Secure Payment",
//     description: "Details unlock only after payment is confirmed.",
//     color: "var(--color-secondary)",
//     background: "var(--status-info-bg)",
//   },
//   {
//     icon: Star,
//     title: "Verified Pros",
//     description: "Trusted providers with verified profiles and ratings.",
//     color: "var(--color-accent)",
//     background: "var(--status-success-bg)",
//   },
// ];

// export default function HeroSection() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         border-b
//         bg-[var(--color-background)]
//         text-[var(--color-foreground)]
//       "
//       style={{
//         borderColor: "var(--color-border)",
//       }}
//     >
//       {/* ================================================================
//           BACKGROUND DECORATION
//       ================================================================= */}

//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           overflow-hidden
//         "
//       >
//         {/* Primary glow */}

//         <motion.div
//           className="
//             absolute
//             -left-32
//             -top-32
//             h-[420px]
//             w-[420px]
//             rounded-full
//             blur-3xl
//           "
//           style={{
//             background: "var(--state-selected-bg)",
//           }}
//           animate={{
//             x: [0, 30, 0],
//             y: [0, 20, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* Secondary glow */}

//         <motion.div
//           className="
//             absolute
//             -right-40
//             top-10
//             h-[420px]
//             w-[420px]
//             rounded-full
//             blur-3xl
//           "
//           style={{
//             background: "var(--status-info-bg)",
//           }}
//           animate={{
//             x: [0, -25, 0],
//             y: [0, 30, 0],
//             opacity: [0.6, 0.9, 0.6],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       {/* ================================================================
//           CONTENT
//       ================================================================= */}

//       <div
//         className="
//           relative
//           mx-auto
//           max-w-[var(--container-max-width)]
//           px-[var(--page-padding-x-mobile)]
//           py-[var(--space-16)]
//           lg:px-[var(--page-padding-x)]
//           lg:py-[var(--space-20)]
//         "
//       >
//         <div
//           className="
//             grid
//             items-center
//             gap-[var(--space-12)]
//             lg:grid-cols-2
//             lg:gap-[var(--space-16)]
//           "
//         >
//           {/* ============================================================
//               LEFT CONTENT
//           ============================================================= */}

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer(0.12)}
//             className="max-w-2xl"
//           >
//             {/* Badge */}

//             <motion.div variants={fadeUp}>
//               <span
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-[var(--radius-pill)]
//                   border
//                   px-[var(--space-4)]
//                   py-[var(--space-2)]
//                   text-[var(--font-size-sm)]
//                   font-[var(--font-weight-semibold)]
//                 "
//                 style={{
//                   color: "var(--color-primary)",
//                   background: "var(--state-selected-bg)",
//                   borderColor: "var(--state-selected-border)",
//                 }}
//               >
//                 <Rocket size={15} strokeWidth={2.2} />

//                 India's Smart Lead Marketplace
//               </span>
//             </motion.div>

//             {/* Heading */}

//             <motion.h1
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-6)]
//                 max-w-3xl
//                 font-[var(--font-family-display)]
//                 text-[var(--font-size-display-responsive)]
//                 font-[var(--font-weight-bold)]
//                 leading-[var(--line-height-tight)]
//                 tracking-[var(--letter-spacing-tight)]
//               "
//               style={{
//                 color: "var(--color-foreground)",
//               }}
//             >
//               Find Trusted
//               <br />

//               Service Providers
//               <br />

//               <span
//                 style={{
//                   color: "var(--color-primary)",
//                 }}
//               >
//                 Near You
//               </span>
//             </motion.h1>

//             {/* Description */}

//             <motion.p
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-6)]
//                 max-w-xl
//                 text-[var(--font-size-lg)]
//                 leading-[var(--line-height-relaxed)]
//               "
//               style={{
//                 color: "var(--color-foreground-muted)",
//               }}
//             >
//               Search nearby verified professionals, compare ratings, and
//               create a lead within seconds. Fast, secure and hassle-free.
//             </motion.p>

//             {/* Actions */}

//             <motion.div
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-8)]
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-[var(--space-4)]
//               "
//             >
//               {/* Primary CTA */}

//               <motion.button
//                 whileHover={{
//                   y: -2,
//                   boxShadow: "var(--shadow-hover)",
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 transition={{
//                   duration: 0.18,
//                 }}
//                 className="
//                   inline-flex
//                   min-h-[var(--a11y-min-tap-target)]
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[var(--radius-pill)]
//                   px-[var(--space-6)]
//                   py-[var(--space-3)]
//                   text-[var(--font-size-md)]
//                   font-[var(--font-weight-semibold)]
//                   text-[var(--color-primary-foreground)]
//                   transition-[background-color,box-shadow,transform]
//                 "
//                 style={{
//                   background: "var(--color-primary)",
//                 }}
//               >
//                 Get Started

//                 <ArrowRight size={17} />
//               </motion.button>

//               {/* Secondary CTA */}

//               <motion.button
//                 whileHover={{
//                   y: -2,
//                   backgroundColor: "var(--state-hover-overlay)",
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 className="
//                   inline-flex
//                   min-h-[var(--a11y-min-tap-target)]
//                   items-center
//                   justify-center
//                   rounded-[var(--radius-pill)]
//                   border
//                   bg-[var(--color-surface)]
//                   px-[var(--space-6)]
//                   py-[var(--space-3)]
//                   text-[var(--font-size-md)]
//                   font-[var(--font-weight-semibold)]
//                   transition-[background-color,border-color,box-shadow]
//                 "
//                 style={{
//                   color: "var(--color-foreground)",
//                   borderColor: "var(--color-border)",
//                 }}
//               >
//                 Become a Provider
//               </motion.button>
//             </motion.div>

//             {/* Trust */}

//             <motion.div
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-8)]
//                 flex
//                 items-center
//                 gap-[var(--space-3)]
//               "
//             >
//               {/* Avatar stack */}

//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((item) => (
//                   <div
//                     key={item}
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-full
//                       border-2
//                       text-xs
//                       font-semibold
//                     "
//                     style={{
//                       background:
//                         item % 2 === 0
//                           ? "var(--status-info-bg)"
//                           : "var(--state-selected-bg)",
//                       borderColor: "var(--color-background)",
//                       color:
//                         item % 2 === 0
//                           ? "var(--status-info-fg)"
//                           : "var(--status-warning-fg)",
//                     }}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>

//               <div className="text-sm">
//                 <div
//                   className="font-semibold"
//                   style={{
//                     color: "var(--color-foreground)",
//                   }}
//                 >
//                   4,200+ providers
//                 </div>

//                 <div
//                   style={{
//                     color: "var(--color-foreground-muted)",
//                   }}
//                 >
//                   already onboard
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* ============================================================
//               RIGHT — FEATURE CARDS
//           ============================================================= */}

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer(0.1, 0.25)}
//             className="
//               grid
//               grid-cols-1
//               gap-[var(--space-3)]
//               sm:grid-cols-2
//               sm:gap-[var(--space-4)]
//             "
//           >
//             {cards.map((card, index) => {
//               const Icon = card.icon;

//               return (
//                 <motion.div
//                   key={card.title}
//                   variants={fadeUp}
//                   whileHover={{
//                     y: -5,
//                     boxShadow: "var(--shadow-hover)",
//                   }}
//                   transition={{
//                     duration: 0.22,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-[var(--radius-md)]
//                     border
//                     bg-[var(--color-surface)]
//                     p-[var(--space-5)]
//                     transition-[border-color,box-shadow,transform]
//                   "
//                   style={{
//                     borderColor: "var(--color-border)",
//                   }}
//                 >
//                   {/* Soft background */}

//                   <div
//                     aria-hidden="true"
//                     className="
//                       pointer-events-none
//                       absolute
//                       -right-10
//                       -top-10
//                       h-28
//                       w-28
//                       rounded-full
//                       opacity-70
//                       blur-2xl
//                     "
//                     style={{
//                       background: card.background,
//                     }}
//                   />

//                   {/* Icon */}

//                   <div
//                     className="
//                       relative
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-[var(--radius-sm)]
//                     "
//                     style={{
//                       background: card.background,
//                       color: card.color,
//                     }}
//                   >
//                     <Icon size={19} strokeWidth={2} />
//                   </div>

//                   {/* Content */}

//                   <h3
//                     className="
//                       relative
//                       mt-[var(--space-4)]
//                       text-[var(--font-size-md)]
//                       font-[var(--font-weight-semibold)]
//                     "
//                     style={{
//                       color: "var(--color-foreground)",
//                     }}
//                   >
//                     {card.title}
//                   </h3>

//                   <p
//                     className="
//                       relative
//                       mt-[var(--space-2)]
//                       text-[var(--font-size-sm)]
//                       leading-[var(--line-height-normal)]
//                     "
//                     style={{
//                       color: "var(--color-foreground-muted)",
//                     }}
//                   >
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

// "use client";

// import { motion } from "framer-motion";
// import {
//   Rocket,
//   CheckCircle2,
//   MapPin,
//   CreditCard,
//   Star,
//   ArrowRight,
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const staggerContainer = (stagger = 0.12, delay = 0) => ({
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: stagger,
//       delayChildren: delay,
//     },
//   },
// });

// const cards = [
//   {
//     icon: CheckCircle2,
//     title: "Lead Created",
//     description: "Post a request in seconds — no forms, no friction.",
//     color: "var(--color-success)",
//     background: "var(--status-success-bg)",
//   },
//   {
//     icon: MapPin,
//     title: "Nearby Providers",
//     description:
//       "Matched instantly with verified professionals near you.",
//     color: "var(--color-primary)",
//     background: "var(--state-selected-bg)",
//   },
//   {
//     icon: CreditCard,
//     title: "Secure Payment",
//     description:
//       "Details unlock only after payment is confirmed.",
//     color: "var(--color-secondary)",
//     background: "var(--status-info-bg)",
//   },
//   {
//     icon: Star,
//     title: "Verified Pros",
//     description:
//       "Trusted providers with verified profiles and ratings.",
//     color: "var(--color-accent)",
//     background: "var(--status-success-bg)",
//   },
// ];

// export default function HeroSection() {
//   const router = useRouter();

//   // ==============================
//   // GET STARTED
//   // ==============================

//   const handleGetStarted = () => {
//     const servicesSection = document.getElementById(
//       "services-section"
//     );

//     if (servicesSection) {
//       servicesSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   // ==============================
//   // BECOME PROVIDER
//   // ==============================

//   const handleBecomeProvider = () => {
//     router.push("/provider/register");
//   };

//   return (
//     <section
//        className="relative overflow-hidden border-b bg-[var(--color-background)] text-[var(--color-foreground)]"
//       style={{
//         borderColor: "var(--color-border)",
//       }}
//     >
//       {/* BACKGROUND */}

//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           overflow-hidden
//         "
//       >
//         <motion.div
//           className="
//             absolute
//             -left-32
//             -top-32
//             h-[420px]
//             w-[420px]
//             rounded-full
//             blur-3xl
//           "
//           style={{
//             background: "var(--state-selected-bg)",
//           }}
//           animate={{
//             x: [0, 30, 0],
//             y: [0, 20, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <motion.div
//           className="
//             absolute
//             -right-40
//             top-10
//             h-[420px]
//             w-[420px]
//             rounded-full
//             blur-3xl
//           "
//           style={{
//             background: "var(--status-info-bg)",
//           }}
//           animate={{
//             x: [0, -25, 0],
//             y: [0, 30, 0],
//             opacity: [0.6, 0.9, 0.6],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       {/* CONTENT */}

//       <div
//         className="
//           relative
//           mx-auto
//           max-w-[var(--container-max-width)]
//           px-[var(--page-padding-x-mobile)]
//           py-[var(--space-16)]
//           lg:px-[var(--page-padding-x)]
//           lg:py-[var(--space-20)]
//         "
//       >
//         <div
//           className="
//             grid
//             items-center
//             gap-[var(--space-12)]
//             lg:grid-cols-2
//             lg:gap-[var(--space-16)]
//           "
//         >
//           {/* LEFT */}

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer(0.12)}
//             className="max-w-2xl"
//           >
//             {/* Badge */}

//             <motion.div variants={fadeUp}>
//               <span
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-[var(--radius-pill)]
//                   border
//                   px-[var(--space-4)]
//                   py-[var(--space-2)]
//                   text-[var(--font-size-sm)]
//                   font-[var(--font-weight-semibold)]
//                 "
//                 style={{
//                   color: "var(--color-primary)",
//                   background: "var(--state-selected-bg)",
//                   borderColor: "var(--state-selected-border)",
//                 }}
//               >
//                 <Rocket size={15} strokeWidth={2.2} />

//                 India's Smart Lead Marketplace
//               </span>
//             </motion.div>

//             {/* Heading */}

//             <motion.h1
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-6)]
//                 max-w-3xl
//                 font-[var(--font-family-display)]
//                 text-[var(--font-size-display-responsive)]
//                 font-[var(--font-weight-bold)]
//                 leading-[var(--line-height-tight)]
//                 tracking-[var(--letter-spacing-tight)]
//               "
//               style={{
//                 color: "var(--color-foreground)",
//               }}
//             >
//               Find Trusted
//               <br />

//               Service Providers
//               <br />

//               <span
//                 style={{
//                   color: "var(--color-primary)",
//                 }}
//               >
//                 Near You
//               </span>
//             </motion.h1>

//             {/* Description */}

//             <motion.p
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-6)]
//                 max-w-xl
//                 text-[var(--font-size-lg)]
//                 leading-[var(--line-height-relaxed)]
//               "
//               style={{
//                 color: "var(--color-foreground-muted)",
//               }}
//             >
//               Search nearby verified professionals, compare
//               ratings, and create a lead within seconds. Fast,
//               secure and hassle-free.
//             </motion.p>

//             {/* ACTIONS */}

//             <motion.div
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-8)]
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-[var(--space-4)]
//               "
//             >
//               {/* GET STARTED */}

//               <motion.button
//                 type="button"
//                 onClick={handleGetStarted}
//                 whileHover={{
//                   y: -2,
//                   boxShadow: "var(--shadow-hover)",
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 transition={{
//                   duration: 0.18,
//                 }}
//                 className="
//                   inline-flex
//                   min-h-[var(--a11y-min-tap-target)]
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[var(--radius-pill)]
//                   px-[var(--space-6)]
//                   py-[var(--space-3)]
//                   text-[var(--font-size-md)]
//                   font-[var(--font-weight-semibold)]
//                   text-[var(--color-primary-foreground)]
//                   transition-[background-color,box-shadow,transform]
//                 "
//                 style={{
//                   background: "var(--color-primary)",
//                 }}
//               >
//                 Get Started

//                 <ArrowRight size={17} />
//               </motion.button>

//               {/* BECOME PROVIDER */}

//               <motion.button
//                 type="button"
//                 onClick={handleBecomeProvider}
//                 whileHover={{
//                   y: -2,
//                   backgroundColor:
//                     "var(--state-hover-overlay)",
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 className="
//                   inline-flex
//                   min-h-[var(--a11y-min-tap-target)]
//                   items-center
//                   justify-center
//                   rounded-[var(--radius-pill)]
//                   border
//                   bg-[var(--color-surface)]
//                   px-[var(--space-6)]
//                   py-[var(--space-3)]
//                   text-[var(--font-size-md)]
//                   font-[var(--font-weight-semibold)]
//                   transition-[background-color,border-color,box-shadow]
//                 "
//                 style={{
//                   color: "var(--color-foreground)",
//                   borderColor: "var(--color-border)",
//                 }}
//               >
//                 Become a Provider
//               </motion.button>
//             </motion.div>

//             {/* TRUST */}

//             <motion.div
//               variants={fadeUp}
//               className="
//                 mt-[var(--space-8)]
//                 flex
//                 items-center
//                 gap-[var(--space-3)]
//               "
//             >
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((item) => (
//                   <div
//                     key={item}
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-full
//                       border-2
//                       text-xs
//                       font-semibold
//                     "
//                     style={{
//                       background:
//                         item % 2 === 0
//                           ? "var(--status-info-bg)"
//                           : "var(--state-selected-bg)",
//                       borderColor:
//                         "var(--color-background)",
//                       color:
//                         item % 2 === 0
//                           ? "var(--status-info-fg)"
//                           : "var(--status-warning-fg)",
//                     }}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>

//               <div className="text-sm">
//                 <div
//                   className="font-semibold"
//                   style={{
//                     color: "var(--color-foreground)",
//                   }}
//                 >
//                   4,200+ providers
//                 </div>

//                 <div
//                   style={{
//                     color:
//                       "var(--color-foreground-muted)",
//                   }}
//                 >
//                   already onboard
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT — FEATURE CARDS */}

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer(0.1, 0.25)}
//             className="
//               grid
//               grid-cols-1
//               gap-[var(--space-3)]
//               sm:grid-cols-2
//               sm:gap-[var(--space-4)]
//             "
//           >
//             {cards.map((card) => {
//               const Icon = card.icon;

//               return (
//                 <motion.div
//                   key={card.title}
//                   variants={fadeUp}
//                   whileHover={{
//                     y: -5,
//                     boxShadow: "var(--shadow-hover)",
//                   }}
//                   transition={{
//                     duration: 0.22,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-[var(--radius-md)]
//                     border
//                     bg-[var(--color-surface)]
//                     p-[var(--space-5)]
//                     transition-[border-color,box-shadow,transform]
//                   "
//                   style={{
//                     borderColor:
//                       "var(--color-border)",
//                   }}
//                 >
//                   <div
//                     aria-hidden="true"
//                     className="
//                       pointer-events-none
//                       absolute
//                       -right-10
//                       -top-10
//                       h-28
//                       w-28
//                       rounded-full
//                       opacity-70
//                       blur-2xl
//                     "
//                     style={{
//                       background: card.background,
//                     }}
//                   />

//                   <div
//                     className="
//                       relative
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-[var(--radius-sm)]
//                     "
//                     style={{
//                       background: card.background,
//                       color: card.color,
//                     }}
//                   >
//                     <Icon
//                       size={19}
//                       strokeWidth={2}
//                     />
//                   </div>

//                   <h3
//                     className="
//                       relative
//                       mt-[var(--space-4)]
//                       text-[var(--font-size-md)]
//                       font-[var(--font-weight-semibold)]
//                     "
//                     style={{
//                       color:
//                         "var(--color-foreground)",
//                     }}
//                   >
//                     {card.title}
//                   </h3>

//                   <p
//                     className="
//                       relative
//                       mt-[var(--space-2)]
//                       text-[var(--font-size-sm)]
//                       leading-[var(--line-height-normal)]
//                     "
//                     style={{
//                       color:
//                         "var(--color-foreground-muted)",
//                     }}
//                   >
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
import {
  Rocket,
  CheckCircle2,
  MapPin,
  CreditCard,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const cards = [
  {
    icon: CheckCircle2,
    title: "Lead Created",
    description: "Post a request in seconds — no forms, no friction.",
    color: "var(--color-success)",
    background: "var(--status-success-bg)",
  },
  {
    icon: MapPin,
    title: "Nearby Providers",
    description:
      "Matched instantly with verified professionals near you.",
    color: "var(--color-primary)",
    background: "var(--state-selected-bg)",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description:
      "Details unlock only after payment is confirmed.",
    color: "var(--color-secondary)",
    background: "var(--status-info-bg)",
  },
  {
    icon: Star,
    title: "Verified Pros",
    description:
      "Trusted providers with verified profiles and ratings.",
    color: "var(--color-accent)",
    background: "var(--status-success-bg)",
  },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        bg-[var(--color-background)]
        text-[var(--color-foreground)]
      "
      style={{
        borderColor: "var(--color-border)",
      }}
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <motion.div
          className="
            absolute
            -left-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            blur-3xl
          "
          style={{
            background: "var(--state-selected-bg)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -right-40
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            blur-3xl
          "
          style={{
            background: "var(--status-info-bg)",
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          mx-auto
          max-w-[var(--container-max-width)]
          px-[var(--page-padding-x-mobile)]
          py-[var(--space-16)]
          lg:px-[var(--page-padding-x)]
          lg:py-[var(--space-20)]
        "
      >
        <div
          className="
            grid
            items-center
            gap-[var(--space-12)]
            lg:grid-cols-2
            lg:gap-[var(--space-16)]
          "
        >
          {/* LEFT */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12)}
            className="max-w-2xl"
          >
            {/* BADGE */}

            <motion.div variants={fadeUp}>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-[var(--radius-pill)]
                  border
                  px-[var(--space-4)]
                  py-[var(--space-2)]
                  text-[var(--font-size-sm)]
                  font-[var(--font-weight-semibold)]
                "
                style={{
                  color: "var(--color-primary)",
                  background: "var(--state-selected-bg)",
                  borderColor: "var(--state-selected-border)",
                }}
              >
                <Rocket size={15} strokeWidth={2.2} />

                India's Smart Lead Marketplace
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h1
              variants={fadeUp}
              className="
                mt-[var(--space-6)]
                max-w-3xl
                font-[var(--font-family-display)]
                text-[var(--font-size-display-responsive)]
                font-[var(--font-weight-bold)]
                leading-[var(--line-height-tight)]
                tracking-[var(--letter-spacing-tight)]
              "
              style={{
                color: "var(--color-foreground)",
              }}
            >
              Find Trusted
              <br />

              Service Providers
              <br />

              <span
                style={{
                  color: "var(--color-primary)",
                }}
              >
                Near You
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}
              className="
                mt-[var(--space-6)]
                max-w-xl
                text-[var(--font-size-lg)]
                leading-[var(--line-height-relaxed)]
              "
              style={{
                color: "var(--color-foreground-muted)",
              }}
            >
              Search nearby verified professionals, compare
              ratings, and create a lead within seconds. Fast,
              secure and hassle-free.
            </motion.p>

            {/* TRUST */}

            <motion.div
              variants={fadeUp}
              className="
                mt-[var(--space-8)]
                flex
                items-center
                gap-[var(--space-3)]
              "
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      text-xs
                      font-semibold
                    "
                    style={{
                      background:
                        item % 2 === 0
                          ? "var(--status-info-bg)"
                          : "var(--state-selected-bg)",
                      borderColor:
                        "var(--color-background)",
                      color:
                        item % 2 === 0
                          ? "var(--status-info-fg)"
                          : "var(--status-warning-fg)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="text-sm">
                <div
                  className="font-semibold"
                  style={{
                    color: "var(--color-foreground)",
                  }}
                >
                  4,200+ providers
                </div>

                <div
                  style={{
                    color:
                      "var(--color-foreground-muted)",
                  }}
                >
                  already onboard
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — FEATURE CARDS */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.25)}
            className="
              grid
              grid-cols-1
              gap-[var(--space-3)]
              sm:grid-cols-2
              sm:gap-[var(--space-4)]
            "
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                    boxShadow: "var(--shadow-hover)",
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[var(--radius-md)]
                    border
                    bg-[var(--color-surface)]
                    p-[var(--space-5)]
                    transition-[border-color,box-shadow,transform]
                  "
                  style={{
                    borderColor:
                      "var(--color-border)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      opacity-70
                      blur-2xl
                    "
                    style={{
                      background: card.background,
                    }}
                  />

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[var(--radius-sm)]
                    "
                    style={{
                      background: card.background,
                      color: card.color,
                    }}
                  >
                    <Icon
                      size={19}
                      strokeWidth={2}
                    />
                  </div>

                  <h3
                    className="
                      relative
                      mt-[var(--space-4)]
                      text-[var(--font-size-md)]
                      font-[var(--font-weight-semibold)]
                    "
                    style={{
                      color:
                        "var(--color-foreground)",
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-[var(--space-2)]
                      text-[var(--font-size-sm)]
                      leading-[var(--line-height-normal)]
                    "
                    style={{
                      color:
                        "var(--color-foreground-muted)",
                    }}
                  >
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