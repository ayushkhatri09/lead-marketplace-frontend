// "use client";

// import { Star, MapPin, Briefcase } from "lucide-react";

// export default function ProviderCard({
//   provider,
//   onBook,
// }) {
//   return (
//     <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

//       <div className="flex items-start gap-4">

//         {/* Profile Image */}

//         <img
//           src={
//             provider?.profile_image ||
//             "https://placehold.co/80x80?text=👤"
//           }
//           alt={provider?.full_name}
//           className="h-20 w-20 rounded-2xl border object-cover"
//         />

//         {/* Provider Details */}

//         <div className="flex-1">

//           <div className="flex items-center justify-between">

//             <h3 className="text-lg font-bold">
//               {provider?.full_name}
//             </h3>

//             <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
//               Online
//             </span>

//           </div>

//           <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-[var(--color-foreground-muted)]">

//             <div className="flex items-center gap-1">
//               <Briefcase size={15} />
//               {provider?.service_name}
//             </div>

//             <div className="flex items-center gap-1">
//               <Star
//                 size={15}
//                 className="fill-yellow-400 text-yellow-400"
//               />
//               {provider?.rating ?? "New"}
//             </div>

//           </div>

//           <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-foreground-muted)]">

//             <MapPin size={15} />

//             {provider?.distance
//               ? `${provider.distance.toFixed(1)} KM Away`
//               : "Nearby"}

//           </div>

//         </div>

//       </div>

//       <div className="mt-6 flex items-center justify-end">

//         <button
//           onClick={() => onBook(provider)}
//           className="rounded-xl bg-[var(--color-primary)] px-6 py-2.5 font-semibold text-white transition hover:opacity-90"
//         >
//           Book Now
//         </button>

//       </div>

//     </div>
//   );
// }

"use client";

import { Star, MapPin, Briefcase } from "lucide-react";

export default function ProviderCard({ provider, onBook }) {
  return (
    <div
      className="rounded-2xl border p-5 transition-all hover:-translate-y-1"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
        boxShadow: "var(--shadow-sm)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-lg)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
    >
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <img
          src={provider?.profile_image || "https://placehold.co/80x80?text=👤"}
          alt={provider?.full_name}
          className="h-20 w-20 rounded-2xl border object-cover"
          style={{ borderColor: "var(--color-border)" }}
        />

        {/* Provider Details */}
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3
              className="text-lg font-bold"
              style={{ color: "var(--color-foreground)", letterSpacing: "var(--letter-spacing-tight, -0.02em)" }}
            >
              {provider?.full_name}
            </h3>

            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "var(--status-success-bg, var(--teal-50))",
                color: "var(--status-success-fg, var(--teal-700))",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--payment-success, var(--teal-500))" }}
              />
              Online
            </span>
          </div>

          <div
            className="mt-2 flex flex-wrap items-center gap-4 text-sm"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            <div className="flex items-center gap-1.5">
              <Briefcase size={15} style={{ color: "var(--color-foreground-secondary)" }} />
              {provider?.service_name}
            </div>

            <div className="flex items-center gap-1.5">
              <Star size={15} style={{ color: "var(--color-primary)", fill: "var(--color-primary)" }} />
              {provider?.rating ?? "New"}
            </div>
          </div>

          <div
            className="mt-3 flex items-center gap-1.5 text-sm"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            <MapPin size={15} />
            {provider?.distance ? `${provider.distance.toFixed(1)} km away` : "Nearby"}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <button
          onClick={() => onBook(provider)}
          className="rounded-xl px-6 py-2.5 font-semibold text-white transition-all"
          style={{
            background: "var(--color-primary)",
            boxShadow: "var(--shadow-sm)",
            transitionDuration: "var(--duration-fast, 150ms)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--primary-hover)";
            e.currentTarget.style.boxShadow = "var(--shadow-hover, var(--shadow-md))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--color-primary)";
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}