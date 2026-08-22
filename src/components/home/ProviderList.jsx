

// "use client";

// import { useState } from "react";
// import { SearchX, Loader2 } from "lucide-react";

// import ProviderCard from "./ProviderCard";
// import BookLeadModal from "./BookLeadModal";
// import { createLead } from "@/api/leadApi";

// export default function ProviderList({ providers = [], loading = false, search = "" }) {
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedProvider, setSelectedProvider] = useState(null);
//   console.log("Providers:", providers);

//   const filteredProviders = providers.filter((provider) =>
//     (provider.service_name || "").toLowerCase().includes(search.toLowerCase())
//   );

//   const handleBook = (provider) => {
//     setSelectedProvider(provider);
//     setOpenModal(true);
//   };

//   const handleCreateLead = async (leadData) => {
//     try {
//       const payload = {
//         service: selectedProvider.service,
//         description: leadData.description,
//         address: leadData.address,
//         latitude: Number(leadData.latitude).toFixed(6),
//         longitude: Number(leadData.longitude).toFixed(6),
//       };
//       console.log("Payload:", payload);

//       const response = await createLead(payload);

//       console.log(response.data);

//       alert("Lead Created Successfully");

//       setOpenModal(false);

//       setSelectedProvider(null);
//     } catch (error) {
//       console.log("Status:", error.response?.status);
//       console.log("Response:", error.response?.data);

//       alert(JSON.stringify(error.response?.data, null, 2));
//     }
//   };

//   return (
//     <>
//       <div
//         className="rounded-3xl border"
//         style={{
//           borderColor: "var(--color-border)",
//           background: "var(--color-surface)",
//           boxShadow: "var(--shadow-sm)",
//         }}
//       >
//         {/* Header */}
//         <div
//           className="flex items-center justify-between border-b p-6"
//           style={{ borderColor: "var(--color-border)" }}
//         >
//           <div>
//             <h2
//               className="text-2xl font-bold"
//               style={{ color: "var(--color-foreground)", letterSpacing: "var(--letter-spacing-tight, -0.02em)" }}
//             >
//               Nearby Providers
//             </h2>

//             <p className="mt-1 text-sm" style={{ color: "var(--color-foreground-muted)" }}>
//               Verified professionals near your location
//             </p>
//           </div>

//           <span
//             className="rounded-full px-4 py-2 text-sm font-semibold"
//             style={{
//               background: "var(--lead-live-bg, var(--amber-50))",
//               color: "var(--amber-700, #9C5E19)",
//             }}
//           >
//             {filteredProviders.length} Found
//           </span>
//         </div>

//         {/* Body */}
//         <div className="max-h-[650px] overflow-y-auto p-5">
//           {loading ? (
//             <div
//               className="flex h-60 flex-col items-center justify-center gap-3"
//               style={{ color: "var(--color-foreground-muted)" }}
//             >
//               <Loader2 size={26} className="animate-spin" style={{ color: "var(--color-primary)" }} />
//               <span className="text-sm font-medium">Loading providers...</span>
//             </div>
//           ) : filteredProviders.length === 0 ? (
//             <div
//               className="flex h-60 flex-col items-center justify-center gap-3 text-center"
//               style={{ color: "var(--color-foreground-muted)" }}
//             >
//               <span
//                 className="flex h-12 w-12 items-center justify-center rounded-full"
//                 style={{ background: "var(--color-surface-sunken)", color: "var(--color-foreground-muted)" }}
//               >
//                 <SearchX size={22} />
//               </span>
//               <span className="text-sm font-medium">No nearby providers found</span>
//             </div>
//           ) : (
//             <div className="space-y-5">
//               {filteredProviders.map((provider) => (
//                 <ProviderCard key={provider.id} provider={provider} onBook={handleBook} />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <BookLeadModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         provider={selectedProvider}
//         onSubmit={handleCreateLead}
//       />
//     </>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import {
  Search,
  SearchX,
  Loader2,
  X,
  SlidersHorizontal,
} from "lucide-react";

import ProviderCard from "./ProviderCard";
import BookLeadModal from "./BookLeadModal";
import { createLead } from "@/api/leadApi";

export default function ProviderList({
  providers = [],
  loading = false,
  search = "",
}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProvider, setSelectedProvider] =
    useState(null);

  // ==========================================
  // FILTER STATE
  // ==========================================

  const [searchQuery, setSearchQuery] =
    useState(search);

  const [serviceFilter, setServiceFilter] =
    useState("all");

  // ==========================================
  // UNIQUE SERVICES
  // ==========================================

  const services = useMemo(() => {
    const serviceMap = new Map();

    providers.forEach((provider) => {
      if (
        provider.service &&
        provider.service_name
      ) {
        serviceMap.set(
          provider.service,
          provider.service_name
        );
      }
    });

    return Array.from(
      serviceMap.entries()
    ).map(([id, name]) => ({
      id,
      name,
    }));
  }, [providers]);

  // ==========================================
  // FILTER PROVIDERS
  // ==========================================

  const filteredProviders = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase();

    return providers.filter((provider) => {
      const serviceName =
        provider.service_name
          ?.toLowerCase() || "";

      const providerName =
        provider.full_name
          ?.toLowerCase() || "";

      // Search
      const matchesSearch =
        !query ||
        serviceName.includes(query) ||
        providerName.includes(query);

      // Service filter
      const matchesService =
        serviceFilter === "all" ||
        String(provider.service) ===
          String(serviceFilter);

      return (
        matchesSearch &&
        matchesService
      );
    });
  }, [
    providers,
    searchQuery,
    serviceFilter,
  ]);

  // ==========================================
  // CLEAR FILTERS
  // ==========================================

  const clearFilters = () => {
    setSearchQuery("");
    setServiceFilter("all");
  };

  const hasFilters =
    searchQuery.trim() !== "" ||
    serviceFilter !== "all";

  // ==========================================
  // BOOK PROVIDER
  // ==========================================

  const handleBook = (provider) => {
    setSelectedProvider(provider);
    setOpenModal(true);
  };

  // ==========================================
  // CREATE LEAD
  // ==========================================

  const handleCreateLead = async (
    leadData
  ) => {
    try {
      if (!selectedProvider) {
        return;
      }

      const payload = {
        service: selectedProvider.service,

        description:
          leadData.description,

        address:
          leadData.address,

        latitude: Number(
          leadData.latitude
        ).toFixed(6),

        longitude: Number(
          leadData.longitude
        ).toFixed(6),
      };

      console.log(
        "CREATE LEAD PAYLOAD:",
        payload
      );

      const response =
        await createLead(payload);

      console.log(
        "LEAD CREATED:",
        response.data
      );

      alert(
        "Lead Created Successfully"
      );

      setOpenModal(false);
      setSelectedProvider(null);
    } catch (error) {
      console.log(
        "Status:",
        error.response?.status
      );

      console.log(
        "Response:",
        error.response?.data
      );

      alert(
        JSON.stringify(
          error.response?.data,
          null,
          2
        )
      );
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <>
      <div
        className="rounded-3xl border"
        style={{
          borderColor:
            "var(--color-border)",

          background:
            "var(--color-surface)",

          boxShadow:
            "var(--shadow-sm)",
        }}
      >
        {/* =====================================
            HEADER
        ===================================== */}

        <div
          className="border-b p-6"
          style={{
            borderColor:
              "var(--color-border)",
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{
                  color:
                    "var(--color-foreground)",

                  letterSpacing:
                    "var(--letter-spacing-tight, -0.02em)",
                }}
              >
                Nearby Providers
              </h2>

              <p
                className="mt-1 text-sm"
                style={{
                  color:
                    "var(--color-foreground-muted)",
                }}
              >
                Verified professionals near
                your location
              </p>
            </div>

            <span
              className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background:
                  "var(--lead-live-bg, var(--amber-50))",

                color:
                  "var(--amber-700, #9C5E19)",
              }}
            >
              {filteredProviders.length}{" "}
              Found
            </span>
          </div>

          {/* =====================================
              SEARCH + FILTER
          ===================================== */}

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            {/* SEARCH */}

            <div className="relative flex-1">
              <Search
                size={18}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                "
                style={{
                  color:
                    "var(--color-foreground-muted)",
                }}
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                placeholder="Search provider or service..."
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  bg-transparent
                  pl-11
                  pr-11
                  text-sm
                  outline-none
                  transition
                "
                style={{
                  borderColor:
                    "var(--color-border)",

                  color:
                    "var(--color-foreground)",
                }}
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchQuery("")
                  }
                  className="
                    absolute
                    right-3
                    top-1/2
                    flex
                    h-8
                    w-8
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    transition
                  "
                  style={{
                    color:
                      "var(--color-foreground-muted)",
                    background:
                      "var(--color-surface-sunken)",
                  }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* SERVICE FILTER */}
{/* 
            <div className="relative md:w-56">
              <SlidersHorizontal
                size={17}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                "
                style={{
                  color:
                    "var(--color-foreground-muted)",
                }}
              />

              <select
                value={serviceFilter}
                onChange={(e) =>
                  setServiceFilter(
                    e.target.value
                  )
                }
                className="
                  h-12
                  w-full
                  appearance-none
                  rounded-2xl
                  border
                  bg-transparent
                  pl-11
                  pr-4
                  text-sm
                  outline-none
                  cursor-pointer
                "
                style={{
                  borderColor:
                    "var(--color-border)",

                  color:
                    "var(--color-foreground)",

                  background:
                    "var(--color-surface)",
                }}
              >
                <option value="all">
                  All Services
                </option>

                {services.map((service) => (
                  <option
                    key={service.id}
                    value={service.id}
                  >
                    {service.name}
                  </option>
                ))}
              </select>
            </div> */}

            {/* CLEAR */}

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  h-12
                  rounded-2xl
                  border
                  px-5
                  text-sm
                  font-semibold
                  transition
                "
                style={{
                  borderColor:
                    "var(--color-border)",

                  color:
                    "var(--color-foreground-secondary)",

                  background:
                    "var(--color-surface)",
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* ACTIVE FILTER INFO */}

          {hasFilters && (
            <div className="mt-3 flex items-center gap-2">
              <span
                className="text-xs"
                style={{
                  color:
                    "var(--color-foreground-muted)",
                }}
              >
                Showing{" "}
                <strong
                  style={{
                    color:
                      "var(--color-foreground)",
                  }}
                >
                  {filteredProviders.length}
                </strong>{" "}
                providers
              </span>
            </div>
          )}
        </div>

        {/* =====================================
            PROVIDER LIST
        ===================================== */}

        <div className="max-h-[650px] overflow-y-auto p-5">
          {loading ? (
            <div
              className="
                flex
                h-60
                flex-col
                items-center
                justify-center
                gap-3
              "
              style={{
                color:
                  "var(--color-foreground-muted)",
              }}
            >
              <Loader2
                size={26}
                className="animate-spin"
                style={{
                  color:
                    "var(--color-primary)",
                }}
              />

              <span className="text-sm font-medium">
                Loading providers...
              </span>
            </div>
          ) : filteredProviders.length ===
            0 ? (
            <div
              className="
                flex
                h-60
                flex-col
                items-center
                justify-center
                gap-3
                text-center
              "
              style={{
                color:
                  "var(--color-foreground-muted)",
              }}
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  background:
                    "var(--color-surface-sunken)",

                  color:
                    "var(--color-foreground-muted)",
                }}
              >
                <SearchX size={22} />
              </span>

              <span className="text-sm font-medium">
                {hasFilters
                  ? "No providers match your search."
                  : "No nearby providers found"}
              </span>

              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-semibold"
                  style={{
                    color:
                      "var(--color-primary)",
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-5">
              {filteredProviders.map(
                (provider) => (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    onBook={handleBook}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* ========================================
          BOOK MODAL
      ======================================== */}

      <BookLeadModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
        provider={selectedProvider}
        onSubmit={handleCreateLead}
      />
    </>
  );
}