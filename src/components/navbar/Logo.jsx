"use client";
import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      style={{
        color: "var(--color-foreground)",
        fontWeight: "var(--font-weight-semibold, 600)",
        letterSpacing: "var(--letter-spacing-tight, -0.02em)",
        fontSize: "1.05rem",
      }}
    >
      <span
        className="relative flex items-center justify-center"
        style={{
          width: 28,
          height: 28,
          borderRadius: "var(--radius-sm)",
          background: "var(--color-primary)",
        }}
      >
        <span
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            background: "var(--color-primary-foreground)",
            animation: "logo-beacon-pulse 2.2s ease-in-out infinite",
          }}
        />
      </span>

      <span>Lead Marketplace</span>

      <style>{`
        @keyframes logo-beacon-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(219, 139, 43, 0.45); }
          50% { box-shadow: 0 0 0 5px rgba(219, 139, 43, 0); }
        }
      `}</style>
    </Link>
  );
}