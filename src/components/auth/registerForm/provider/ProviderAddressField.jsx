

"use client";

import { useEffect, useState } from "react";
import { MapPin, LocateFixed } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fieldStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-surface)",
};

export default function ProviderAddressField({
  register,
  errors,
  setValue,
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loadingLocation, setLoadingLocation] =
    useState(false);

  // ==========================
  // Live Search
  // ==========================

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            query
          )}&addressdetails=1&limit=5`
        );

        const data = await response.json();

        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  // ==========================
  // Select Address
  // ==========================

 const selectAddress = (item) => {
  setQuery(item.display_name);

  setValue("address", item.display_name);

  setValue(
    "latitude",
    Number(item.lat).toFixed(6)
  );

  setValue(
    "longitude",
    Number(item.lon).toFixed(6)
  );

  setResults([]);
};
  // ==========================
  // Current Location
  // ==========================

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );

          const data = await response.json();

          setQuery(data.display_name);

          setValue("address", data.display_name);

          setValue("latitude", Number(lat).toFixed(6));

setValue("longitude", Number(lon).toFixed(6));
        } catch (error) {
          console.log(error);
        }

        setLoadingLocation(false);
      },
      (error) => {
        console.log(error);
        setLoadingLocation(false);
      }
    );
  };

  return (
    <div className="space-y-2">

      <Label htmlFor="address">
        Address
      </Label>

      <div className="relative">

        <MapPin
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />

        <Input
          id="address"
          placeholder="Search your address..."
          className="pl-10"
          style={fieldStyle}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setValue("address", e.target.value);
          }}
        />

      </div>

      {/* Suggestions */}

      {results.length > 0 && (

        <div className="max-h-60 overflow-y-auto rounded-lg border bg-white shadow">

          {results.map((item) => (

            <button
              type="button"
              key={item.place_id}
              onClick={() => selectAddress(item)}
              className="block w-full border-b px-4 py-3 text-left text-sm hover:bg-gray-100"
            >
              {item.display_name}
            </button>

          ))}

        </div>

      )}

      {/* Current Location */}

      <button
        type="button"
        onClick={useCurrentLocation}
        className="mt-2 flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
      >
        <LocateFixed size={18} />

        {loadingLocation
          ? "Getting Current Location..."
          : "Use Current Location"}
      </button>

      {/* Hidden register */}

      <input
        type="hidden"
        {...register("address")}
      />
      <input
  type="hidden"
  {...register("latitude")}
/>

<input
  type="hidden"
  {...register("longitude")}
/>

      {errors?.address && (
        <p className="text-sm text-red-500">
          {errors.address.message}
        </p>
      )}

    </div>
  );
}