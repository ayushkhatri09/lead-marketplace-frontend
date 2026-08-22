// "use client";

// import { useEffect, useState } from "react";

// import { serviceList } from "@/api/serviceApi";
// import ServiceCard from "./ServiceCard";

// export default function ServiceList() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await serviceList();

//       console.log(
//         "SERVICES:",
//         response.data.data
//       );

//       setServices(
//         response.data.data || []
//       );

//     } catch (error) {
//       console.error(
//         "SERVICE LIST ERROR:",
//         error
//       );

//       setError(
//         "Unable to load services."
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="py-10 text-center">
//         Loading services...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="py-10 text-center text-red-500">
//         {error}
//       </div>
//     );
//   }

//   if (services.length === 0) {
//     return (
//       <div className="py-10 text-center text-gray-500">
//         No services available.
//       </div>
//     );
//   }

//   return (
//     <section>

//       <div className="mb-6">
//         <h2 className="text-2xl font-bold">
//           What service do you need?
//         </h2>

//         <p className="mt-1 text-sm text-gray-500">
//           Choose a service and we'll find providers
//           near your location.
//         </p>
//       </div>


//       <div
//         className="
//           grid
//           gap-6
//           sm:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-4
//         "
//       >

//         {services.map((service) => (
//           <ServiceCard
//             key={service.id}
//             service={service}
//           />
//         ))}

//       </div>

//     </section>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  X,
  SlidersHorizontal,
  SearchX,
} from "lucide-react";

import { serviceList } from "@/api/serviceApi";
import ServiceCard from "./ServiceCard";

export default function ServiceList({  }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // SEARCH
  // ==========================================

  const [searchQuery, setSearchQuery] =
    useState("");

  // ==========================================
  // FETCH SERVICES
  // ==========================================

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await serviceList();

      console.log(
        "SERVICES:",
        response.data.data
      );

      setServices(
        response.data.data || []
      );
    } catch (error) {
      console.error(
        "SERVICE LIST ERROR:",
        error
      );

      setError(
        "Unable to load services."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // FILTER SERVICES
  // ==========================================

  const filteredServices = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase();

    if (!query) {
      return services;
    }

    return services.filter((service) => {
      const name =
        service.name
          ?.toLowerCase() || "";

      const description =
        service.description
          ?.toLowerCase() || "";

      return (
        name.includes(query) ||
        description.includes(query)
      );
    });
  }, [services, searchQuery]);

  // ==========================================
  // CLEAR SEARCH
  // ==========================================

  const clearSearch = () => {
    setSearchQuery("");
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <section>
        <div className="mb-6">
          <h2
            className="text-2xl font-bold"
            style={{
              color:
                "var(--color-foreground)",
            }}
          >
            What service do you need?
          </h2>

          <p
            className="mt-1 text-sm"
            style={{
              color:
                "var(--color-foreground-muted)",
            }}
          >
            Choose a service and we'll find
            providers near your location.
          </p>
        </div>

        <div
          className="
            flex
            h-40
            items-center
            justify-center
            rounded-3xl
            border
          "
          style={{
            borderColor:
              "var(--color-border)",
            background:
              "var(--color-surface)",
            color:
              "var(--color-foreground-muted)",
          }}
        >
          Loading services...
        </div>
      </section>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error) {
    return (
      <section>
        <div
          className="
            rounded-3xl
            border
            p-10
            text-center
          "
          style={{
            borderColor:
              "var(--color-border)",
            background:
              "var(--color-surface)",
            color:
              "var(--color-danger)",
          }}
        >
          {error}
        </div>
      </section>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <section>
      {/* =====================================
          HEADER
      ===================================== */}

      <div
        className="
          mb-6
          flex
          flex-col
          gap-5
          lg:flex-row
          lg:items-end
          lg:justify-between
        "
      >
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
            What service do you need?
          </h2>

          <p
            className="mt-1 text-sm"
            style={{
              color:
                "var(--color-foreground-muted)",
            }}
          >
            Choose a service and we'll find
            providers near your location.
          </p>
        </div>

        {/* RESULT COUNT */}

        <div
          className="
            w-fit
            rounded-full
            px-4
            py-2
            text-sm
            font-semibold
          "
          style={{
            background:
              "var(--lead-live-bg)",
            color:
              "var(--amber-700)",
          }}
        >
          {filteredServices.length} Services
        </div>
      </div>

      {/* =====================================
          SEARCH + FILTER BAR
      ===================================== */}

      <div
        className="
          mb-8
          flex
          flex-col
          gap-3
          sm:flex-row
        "
      >
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
            placeholder="Search services..."
            className="
              h-12
              w-full
              rounded-2xl
              border
              bg-[var(--color-surface)]
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
              onClick={clearSearch}
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
              "
              style={{
                background:
                  "var(--color-surface-sunken)",
                color:
                  "var(--color-foreground-muted)",
              }}
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* FILTER BUTTON */}

        {/* <button
          type="button"
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            px-5
            text-sm
            font-semibold
          "
          style={{
            borderColor:
              "var(--color-border)",
            background:
              "var(--color-surface)",
            color:
              "var(--color-foreground-secondary)",
          }}
        >
          <SlidersHorizontal size={17} />

          Filter
        </button> */}
      </div>

      {/* =====================================
          SERVICES
      ===================================== */}

      {services.length === 0 ? (
        <div
          className="
            rounded-3xl
            border
            py-16
            text-center
          "
          style={{
            borderColor:
              "var(--color-border)",
            background:
              "var(--color-surface)",
            color:
              "var(--color-foreground-muted)",
          }}
        >
          No services available.
        </div>
      ) : filteredServices.length === 0 ? (
        <div
          className="
            flex
            min-h-60
            flex-col
            items-center
            justify-center
            rounded-3xl
            border
            text-center
          "
          style={{
            borderColor:
              "var(--color-border)",
            background:
              "var(--color-surface)",
          }}
        >
          <div
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
          </div>

          <p
            className="mt-4 text-sm font-semibold"
            style={{
              color:
                "var(--color-foreground)",
            }}
          >
            No services found
          </p>

          <p
            className="mt-1 text-sm"
            style={{
              color:
                "var(--color-foreground-muted)",
            }}
          >
            Try searching for another service.
          </p>

          <button
            type="button"
            onClick={clearSearch}
            className="mt-4 text-sm font-semibold"
            style={{
              color:
                "var(--color-primary)",
            }}
          >
            Clear search
          </button>
        </div>
      ) : (
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {filteredServices.map(
            (service) => (
             <ServiceCard
  key={service.id}
  service={service}
/>
            )
          )}
        </div>
      )}
    </section>
  );
}