

"use client";

import { MapPin, Clock } from "lucide-react";
import AppButton from "@/components/common/AppButton";

export default function LeadCard({ lead }) {
  const {
  service_name,
  description,
  status,
  address,
  created_at,
} = lead;

const formattedDate = new Date(created_at).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

  const getStatusStyle = () => {
    switch (status.toLowerCase()) {
      case "accepted":
        return `
          bg-[var(--status-success-bg)]
          text-[var(--color-success)]
        `;

      case "completed":
        return `
          bg-[var(--color-muted)]
          text-[var(--color-foreground-secondary)]
        `;

      case "pending":
      default:
        return `
          bg-[var(--status-warning-bg)]
          text-[var(--color-warning)]
        `;
    }
  };

return (
  <article
    className="
      rounded-[var(--radius-lg)]
      border
      border-[var(--color-border)]
      bg-[var(--color-surface-elevated)]
      p-5
      shadow-[var(--shadow-sm)]
      transition-all
      duration-300
      hover:shadow-[var(--shadow-md)]
    "
  >
    <div
      className="
        flex
        flex-col
        gap-5
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      {/* Lead Information */}
      <div className="space-y-3">

        <div className="flex items-center gap-3 flex-wrap">
          <h3
            className="
              text-lg
              font-semibold
              text-[var(--color-foreground)]
            "
          >
            {service_name}
          </h3>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-medium
              ${getStatusStyle()}
            `}
          >
            {status}
          </span>
        </div>

        <p className="text-sm text-[var(--color-foreground-muted)]">
          {description}
        </p>

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-[var(--color-foreground-muted)]
          "
        >
          <MapPin
            className="
              h-4
              w-4
              text-[var(--color-primary)]
            "
          />
          <span>{address || "Location not available"}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--color-foreground-muted)]">
          <Clock className="h-4 w-4 text-[var(--color-primary)]" />
          <span>{formattedDate}</span>
        </div>

      </div>

      {/* Action */}
      <div>
        <AppButton className="w-auto px-5">
          View Details
        </AppButton>
      </div>

    </div>
  </article>
);
  
}