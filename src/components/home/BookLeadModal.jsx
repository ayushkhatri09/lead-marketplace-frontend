"use client";

import { useEffect, useState } from "react";
import { X, MapPin, User, Wrench } from "lucide-react";
import { searchAddress } from "@/api/locationApi";

export default function BookLeadModal({
  open,
  onClose,
  provider,
  onSubmit,
  loading = false,
}) {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (!open) {
      setAddress("");
      setSuggestions([]);
      setLatitude("");
      setLongitude("");
    }
  }, [open]);

  if (!open) return null;

  const handleAddressChange = async (e) => {
    const value = e.target.value;

    setAddress(value);

    setLatitude("");
    setLongitude("");

    if (value.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const data = await searchAddress(value);
      setSuggestions(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectAddress = (item) => {
    setAddress(item.display_name);
    setLatitude(item.lat);
    setLongitude(item.lon);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!latitude || !longitude) {
      alert("Please select an address from the suggestions.");
      return;
    }

    const formData = new FormData(e.target);

    onSubmit({
      provider,
      address,
      description: formData.get("description"),
      latitude,
      longitude,
    });
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-5"
    >
      <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-2xl font-bold">
              Book Service
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Create a lead for this provider.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6"
        >

          {/* Provider */}

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Provider
            </label>

            <div className="flex items-center gap-3 rounded-xl border bg-gray-50 p-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <User className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {provider?.full_name}
                </h3>

                <p className="text-sm text-gray-500">
                  ⭐ {provider?.rating || 5}
                </p>
              </div>

            </div>
          </div>

          {/* Service */}

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Service
            </label>

            <div className="flex items-center gap-3 rounded-xl border bg-gray-50 p-4">
              <Wrench
                size={20}
                className="text-blue-600"
              />

              <span>
                {provider?.service_name}
              </span>
            </div>
          </div>

          {/* Address */}

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Service Address
            </label>

            <div className="relative">

              <MapPin
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                placeholder="Search your address..."
                autoComplete="off"
                className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-blue-500"
              />

              {suggestions.length > 0 && (

                <div className="absolute left-0 right-0 top-full mt-2 max-h-60 overflow-y-auto rounded-xl border bg-white shadow-xl z-[99999]">

                  {suggestions.map((item) => (

                    <button
                      key={item.place_id}
                      type="button"
                      onClick={() => handleSelectAddress(item)}
                      className="block w-full border-b p-3 text-left text-sm hover:bg-gray-100"
                    >
                      {item.display_name}
                    </button>

                  ))}

                </div>

              )}

            </div>

          </div>

          {/* Description */}

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Problem Description
            </label>

            <textarea
              name="description"
              rows={5}
              required
              placeholder="Describe your problem..."
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
            />

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 border-t pt-5">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Lead"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}