"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search services (Electrician, Plumber, AC Repair...)",
}) {
  return (
    <section className="mb-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-3">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)]">
            Find Nearby Providers
          </h2>

          <p className="mt-2 text-[var(--color-foreground-muted)]">
            Search by service and instantly discover nearby verified professionals.
          </p>
        </div>

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              pl-12
              pr-4
              text-base
              outline-none
              transition
              focus:border-[var(--color-primary)]
              focus:ring-2
              focus:ring-[var(--color-primary)]/20
            "
          />

        </div>

      </div>
    </section>
  );
}