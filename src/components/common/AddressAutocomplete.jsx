"use client";

import { useState, useEffect } from "react";
import { searchAddress } from "@/api/locationApi";

import { Input } from "@/components/ui/input";

export default function AddressAutocomplete({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (query.length < 3) {
    setResults([]);
    return;
  }

  const timer = setTimeout(async () => {
    try {
      setLoading(true);

      const data = await searchAddress(query);

      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, 500);

  return () => clearTimeout(timer);
}, [query]);
const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        );

        const data = await response.json();

        setQuery(data.display_name);
        setResults([]);

        onSelect({
          display_name: data.display_name,
          lat,
          lon,
        });
      } catch (error) {
        console.error(error);
      }
    },
    (error) => {
      console.error(error);
      alert("Unable to fetch your location.");
    }
  );
};

  return (
  <div className="relative">
    {/* Input */}
    <div className="relative ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none"
        style={{ color: "var(--color-foreground-muted)" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search address..."
        className="pl-10"
        style={{
          borderColor: "var(--color-border)",
          borderRadius: "var(--radius-md)",
          background: "var(--color-surface)",
        }}/>

         <button
  type="button"
  onClick={getCurrentLocation}
  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 hover:text-orange-700"
>
  Use Current
</button>

     
    </div>

    {/* Suggestions */}
    {results.length > 0 && (
      <div
        className="absolute left-0 right-0 z-50 mt-2 overflow-hidden"
        style={{
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          background: "var(--color-surface-elevated)",
          boxShadow: "var(--shadow-lg)",
          maxHeight: "260px",
          overflowY: "auto",
        }}
      >
        {results.map((item) => (
          <button
            key={item.place_id}
            type="button"
            className="w-full px-4 py-3 text-left transition-colors"
            style={{
              borderBottom: "1px solid var(--color-border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--color-surface)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            onClick={() => {
              setQuery(item.display_name);
              setResults([]);
              onSelect(item);
            }}
          >
            <div className="font-medium text-sm">
              {item.display_name.split(",")[0]}
            </div>

            <div
              className="text-xs mt-1"
              style={{
                color: "var(--color-foreground-muted)",
              }}
            >
              {item.display_name}
            </div>
          </button>
        ))}
      </div>
    )}
  </div>
);
}