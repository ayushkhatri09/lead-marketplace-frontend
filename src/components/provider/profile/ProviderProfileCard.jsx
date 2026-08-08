// "use client";

// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";

// import ProviderProfileHeader from "./ProviderProfileHeader";
// import ProviderProfileInfo from "./ProviderProfileInfo";

// export default function ProviderProfileCard({
//   provider,
// }) {
//   return (
//     <Card
//       className="max-w-3xl mx-auto"
//       style={{
//         borderColor: "var(--color-border)",
//         background: "var(--color-surface-elevated)",
//         borderRadius: "var(--radius-xl)",
//         boxShadow: "var(--shadow-md)",
//       }}
//     >
//       <CardContent className="space-y-8 p-8">
//         <ProviderProfileHeader
//           provider={provider}
//         />

//         <ProviderProfileInfo
//           provider={provider}
//         />
//       </CardContent>
//     </Card>
//   );
// }

// "use client";

// import { Card, CardContent } from "@/components/ui/card";

// import ProviderProfileHeader from "./ProviderProfileHeader";
// import ProviderProfileInfo from "./ProviderProfileInfo";

// export default function ProviderProfileCard({ provider }) {
//   return (
//     <Card
//       className="relative mx-auto max-w-3xl overflow-hidden border-0"
//       style={{
//         background: "var(--color-surface)",
//         borderRadius: "var(--radius-2xl)",
//         boxShadow: "var(--shadow-lg)",
//       }}
//     >
//       {/* Decorative background — soft beacon glow + dot texture */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0"
//         style={{
//           backgroundImage: `
//             radial-gradient(480px circle at 50% -10%, color-mix(in srgb, var(--color-primary) 14%, transparent), transparent 60%),
//             radial-gradient(360px circle at 100% 100%, color-mix(in srgb, var(--teal-500, #2F7A6B) 8%, transparent), transparent 60%),
//             radial-gradient(var(--color-border) 1px, transparent 1px)
//           `,
//           backgroundSize: "auto, auto, 22px 22px",
//           backgroundPosition: "center, center, center",
//           opacity: 1,
//         }}
//       />
//       {/* Fade the dot texture toward the edges so it reads as texture, not noise */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 30%, transparent 0%, var(--color-surface) 75%)",
//         }}
//       />

//       {/* Top beacon accent bar */}
//       <div
//         className="relative"
//         style={{
//           height: "3px",
//           background: "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
//         }}
//       />

//       <CardContent className="relative space-y-8 p-8 sm:p-10">
//         <ProviderProfileHeader provider={provider} />
//         <ProviderProfileInfo provider={provider} />
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { Card, CardContent } from "@/components/ui/card";

import ProviderProfileHeader from "./ProviderProfileHeader";
import ProviderProfileInfo from "./ProviderProfileInfo";

export default function ProviderProfileCard({ provider }) {
  return (
    <Card
      className="relative mx-auto max-w-3xl overflow-hidden border-0"
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-2xl)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Decorative background — soft beacon glow + dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(480px circle at 50% -10%, color-mix(in srgb, var(--color-primary) 14%, transparent), transparent 60%),
            radial-gradient(360px circle at 100% 100%, color-mix(in srgb, var(--teal-500, #2F7A6B) 8%, transparent), transparent 60%),
            radial-gradient(var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 22px 22px",
          backgroundPosition: "center, center, center",
          opacity: 1,
        }}
      />
      {/* Fade the dot texture toward the edges so it reads as texture, not noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, transparent 0%, var(--color-surface) 75%)",
        }}
      />

      {/* Top beacon accent bar */}
      <div
        className="relative"
        style={{
          height: "3px",
          background: "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
        }}
      />

      <CardContent className="relative grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-[280px_1fr] lg:gap-10">
        <ProviderProfileHeader provider={provider} />
        <ProviderProfileInfo provider={provider} />
      </CardContent>
    </Card>
  );
}