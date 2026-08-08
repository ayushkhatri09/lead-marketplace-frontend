


"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";

const statusStyles = {
  approved: {
    background: "var(--status-success-bg, var(--teal-50))",
    color: "var(--status-success-fg, var(--teal-700))",
  },
  rejected: {
    background: "var(--status-danger-bg, var(--ember-50))",
    color: "var(--status-danger-fg, var(--ember-700))",
  },
  pending: {
    background: "var(--status-warning-bg, var(--amber-50))",
    color: "var(--status-warning-fg, var(--amber-700))",
  },
};

export default function ProviderProfileHeader({ provider }) {
  const getBadgeVariant = (status) => {
    switch (status) {
      case "approved":
        return "default";

      case "rejected":
        return "destructive";

      default:
        return "secondary";
    }
  };

  const badgeStyle = statusStyles[provider?.kyc_status] || statusStyles.pending;

  return (
    <div
      className="mx-auto w-full max-w-md overflow-hidden border"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-2xl)",
        background: "var(--color-surface-elevated)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      {/* Beacon accent bar */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
        }}
      />

      <div className="flex flex-col items-center space-y-4 p-8 text-center">
        <div
          className="relative h-28 w-28 overflow-hidden rounded-full border-4"
          style={{
            borderColor: "var(--color-surface)",
            boxShadow: "0 0 0 1px var(--color-border)",
          }}
        >
          <Image
            src={provider?.profile_image || "/images/default-profile.png"}
            alt={provider?.full_name || "Provider"}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-1">
          <h2
            className="text-2xl font-bold"
            style={{
              color: "var(--color-foreground)",
              letterSpacing: "var(--letter-spacing-tight, -0.02em)",
            }}
          >
            {provider?.full_name}
          </h2>

          <p className="text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
            {provider?.email}
          </p>

          <p className="text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
            {provider?.phone}
          </p>
        </div>

        <Badge
          variant={getBadgeVariant(provider?.kyc_status)}
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            background: badgeStyle.background,
            color: badgeStyle.color,
            border: "none",
          }}
        >
          KYC: {provider?.kyc_status || "Pending"}
        </Badge>
      </div>
    </div>
  );
}