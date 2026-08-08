// "use client";

// export default function ProviderProfileInfo({
//   provider,
// }) {
//   const profileItems = [
//     {
//       label: "Service",
//       value: provider?.service || "Not Available",
//     },
//     {
//       label: "Address",
//       value: provider?.address || "Not Available",
//     },
//     {
//       label: "Latitude",
//       value: provider?.latitude || "Not Available",
//     },
//     {
//       label: "Longitude",
//       value: provider?.longitude || "Not Available",
//     },
//     {
//       label: "Joined",
//       value: provider?.created_at
//         ? new Date(provider.created_at).toLocaleDateString()
//         : "Not Available",
//     },
//   ];

//   return (
//     <div className="grid gap-4">
//       {profileItems.map((item) => (
//         <div
//           key={item.label}
//           className="flex items-center justify-between border-b pb-3"
//           style={{
//             borderColor: "var(--color-border)",
//           }}
//         >
//           <span
//             className="font-medium"
//             style={{
//               color: "var(--color-foreground-secondary)",
//             }}
//           >
//             {item.label}
//           </span>

//           <span
//             style={{
//               color: "var(--color-foreground)",
//             }}
//           >
//             {item.value}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { Wrench, MapPin, Compass, Calendar } from "lucide-react";

const iconMap = {
  Service: Wrench,
  Address: MapPin,
  Latitude: Compass,
  Longitude: Compass,
  Joined: Calendar,
};

export default function ProviderProfileInfo({ provider }) {
  const profileItems = [
    {
      label: "Service",
      value: provider?.service || "Not Available",
    },
    {
      label: "Address",
      value: provider?.address || "Not Available",
    },
    {
      label: "Latitude",
      value: provider?.latitude || "Not Available",
    },
    {
      label: "Longitude",
      value: provider?.longitude || "Not Available",
    },
    {
      label: "Joined",
      value: provider?.created_at
        ? new Date(provider.created_at).toLocaleDateString()
        : "Not Available",
    },
  ];

  return (
    <div
      className="overflow-hidden border"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-xl)",
        background: "var(--color-surface-elevated)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div className="px-6 pt-6">
        <h3
          className="text-sm font-semibold uppercase"
          style={{
            color: "var(--color-foreground-muted)",
            letterSpacing: "0.05em",
          }}
        >
          Provider Details
        </h3>
      </div>

      <div className="grid gap-1 p-6 pt-4">
        {profileItems.map((item) => {
          const Icon = iconMap[item.label];
          return (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 border-b py-3.5 last:border-b-0 last:pb-0"
              style={{ borderColor: "var(--color-divider)" }}
            >
              <span
                className="flex items-center gap-2.5 font-medium"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
                  style={{
                    background: "var(--color-surface-sunken)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Icon size={15} strokeWidth={1.8} />
                </span>
                {item.label}
              </span>

              <span
                className="text-right text-sm font-medium"
                style={{ color: "var(--color-foreground)" }}
              >
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}