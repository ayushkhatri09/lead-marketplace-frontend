

"use client";

import { useState } from "react";
import { SearchX, Loader2 } from "lucide-react";

import ProviderCard from "./ProviderCard";
import BookLeadModal from "./BookLeadModal";
import { createLead } from "@/api/leadApi";

export default function ProviderList({ providers = [], loading = false, search = "" }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  console.log("Providers:", providers);

  const filteredProviders = providers.filter((provider) =>
    (provider.service_name || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleBook = (provider) => {
    setSelectedProvider(provider);
    setOpenModal(true);
  };

  const handleCreateLead = async (leadData) => {
    try {
      const payload = {
        service: selectedProvider.service,
        description: leadData.description,
        address: leadData.address,
        latitude: Number(leadData.latitude).toFixed(6),
        longitude: Number(leadData.longitude).toFixed(6),
      };
      console.log("Payload:", payload);

      const response = await createLead(payload);

      console.log(response.data);

      alert("Lead Created Successfully");

      setOpenModal(false);

      setSelectedProvider(null);
    } catch (error) {
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);

      alert(JSON.stringify(error.response?.data, null, 2));
    }
  };

  return (
    <>
      <div
        className="rounded-3xl border"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between border-b p-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--color-foreground)", letterSpacing: "var(--letter-spacing-tight, -0.02em)" }}
            >
              Nearby Providers
            </h2>

            <p className="mt-1 text-sm" style={{ color: "var(--color-foreground-muted)" }}>
              Verified professionals near your location
            </p>
          </div>

          <span
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background: "var(--lead-live-bg, var(--amber-50))",
              color: "var(--amber-700, #9C5E19)",
            }}
          >
            {filteredProviders.length} Found
          </span>
        </div>

        {/* Body */}
        <div className="max-h-[650px] overflow-y-auto p-5">
          {loading ? (
            <div
              className="flex h-60 flex-col items-center justify-center gap-3"
              style={{ color: "var(--color-foreground-muted)" }}
            >
              <Loader2 size={26} className="animate-spin" style={{ color: "var(--color-primary)" }} />
              <span className="text-sm font-medium">Loading providers...</span>
            </div>
          ) : filteredProviders.length === 0 ? (
            <div
              className="flex h-60 flex-col items-center justify-center gap-3 text-center"
              style={{ color: "var(--color-foreground-muted)" }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: "var(--color-surface-sunken)", color: "var(--color-foreground-muted)" }}
              >
                <SearchX size={22} />
              </span>
              <span className="text-sm font-medium">No nearby providers found</span>
            </div>
          ) : (
            <div className="space-y-5">
              {filteredProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} onBook={handleBook} />
              ))}
            </div>
          )}
        </div>
      </div>

      <BookLeadModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        provider={selectedProvider}
        onSubmit={handleCreateLead}
      />
    </>
  );
}