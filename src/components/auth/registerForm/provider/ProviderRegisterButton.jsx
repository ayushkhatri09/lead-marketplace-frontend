"use client";

import AppButton from "@/components/common/AppButton";

export default function ProviderRegisterButton({
  loading = false,
}) {
  return (
    <AppButton
      type="submit"
      loading={loading}
      className="w-full"
      style={{
        background: "var(--color-primary)",
        color: "var(--color-primary-foreground)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        transitionDuration: "var(--duration-fast, 150ms)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--primary-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--color-primary)";
      }}
    >
      Register as Provider
    </AppButton>
  );
}