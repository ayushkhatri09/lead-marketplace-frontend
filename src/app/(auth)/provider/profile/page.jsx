// "use client";

// import { useEffect, useState } from "react";

// import { providerProfile } from "@/api/providerAuthApi";

// import ProviderProfileCard from "@/components/provider/profile/ProviderProfileCard";

// export default function ProviderProfilePage() {
//   const [provider, setProvider] = useState(null);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchProviderProfile();
//   }, []);

//   const fetchProviderProfile = async () => {
//     try {
//       setLoading(true);

//       const response = await providerProfile();

//       console.log("Provider Profile:", response.data);

//       setProvider(response.data.data);
//     } catch (error) {
//       console.error(error);

//       setError(
//         error.response?.data?.message ||
//         "Failed to load provider profile."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container mx-auto py-10 text-center">
//         Loading profile...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto py-10 text-center text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <ProviderProfileCard
//         provider={provider}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import { providerProfile } from "@/api/providerAuthApi";
import { toggleProviderActive } from "@/api/providerAuthApi";

import ProviderProfileCard from "@/components/provider/profile/ProviderProfileCard";


export default function ProviderProfilePage() {

  const [provider, setProvider] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [activeLoading, setActiveLoading] = useState(false);




  useEffect(() => {

    fetchProviderProfile();

  }, []);




  const fetchProviderProfile = async () => {

    try {

      setLoading(true);

      setError("");


      const response = await providerProfile();


      console.log(
        "Provider Profile:",
        response.data
      );


      setProvider(
        response.data.data
      );


    } catch (error) {

      console.error(
        "PROVIDER PROFILE ERROR:",
        error
      );


      setError(
        error.response?.data?.message ||
        "Failed to load provider profile."
      );


    } finally {

      setLoading(false);

    }

  };




  const handleToggleActive = async () => {

    if (activeLoading) {
      return;
    }


    try {

      setActiveLoading(true);


      const response =
        await toggleProviderActive();


      console.log(
        "TOGGLE ACTIVE RESPONSE:",
        response.data
      );


      const updatedIsActive =
        response.data?.is_active;


      setProvider((currentProvider) => ({

        ...currentProvider,

        is_active: updatedIsActive,

      }));


    } catch (error) {

      console.error(
        "TOGGLE ACTIVE ERROR:",
        error.response?.data || error
      );


      alert(
        error.response?.data?.message ||
        "Unable to update provider availability."
      );


    } finally {

      setActiveLoading(false);

    }

  };




  if (loading) {

    return (

      <div className="container mx-auto py-10 text-center">

        Loading profile...

      </div>

    );

  }




  if (error) {

    return (

      <div
        className="
        container
        mx-auto
        py-10
        text-center
        text-red-500
        "
      >

        {error}

      </div>

    );

  }




  return (

    <div className="container mx-auto py-10">


      {/* Profile */}

      <ProviderProfileCard
        provider={provider}
      />




      {/* Availability */}

      <div
        className="
        mx-auto
        mt-6
        w-full
        max-w-md
        rounded-2xl
        border
        p-5
        "
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface-elevated)",
          boxShadow: "var(--shadow-md)",
        }}
      >


        <div className="flex items-center justify-between">


          <div>

            <p
              className="text-sm font-semibold"
              style={{
                color: "var(--color-foreground)",
              }}
            >
              Availability
            </p>


            <p
              className="mt-1 text-xs"
              style={{
                color:
                  "var(--color-foreground-secondary)",
              }}
            >
              {provider?.is_active
                ? "You are available for new leads."
                : "You are currently offline."
              }
            </p>

          </div>




          {/* Status */}

          <div className="flex items-center gap-2">


            <span
              className="h-3 w-3 rounded-full"
              style={{
                background: provider?.is_active
                  ? "var(--teal-500, #14b8a6)"
                  : "var(--ember-500, #ef4444)",
              }}
            />


            <span
              className="text-sm font-semibold"
              style={{
                color: provider?.is_active
                  ? "var(--status-success-fg, var(--teal-700))"
                  : "var(--status-danger-fg, var(--ember-700))",
              }}
            >
              {provider?.is_active
                ? "Active"
                : "Offline"
              }
            </span>

          </div>


        </div>




        {/* Toggle */}

        <button
          type="button"
          onClick={handleToggleActive}
          disabled={activeLoading}
          className="
          mt-4
          w-full
          rounded-xl
          px-4
          py-3
          text-sm
          font-semibold
          transition-all
          duration-200
          disabled:cursor-not-allowed
          disabled:opacity-60
          "
          style={{
            background: provider?.is_active
              ? "var(--ember-500, #ef4444)"
              : "var(--color-primary)",

            color:
              "var(--color-primary-foreground, #ffffff)",

            boxShadow: "var(--shadow-sm)",
          }}
        >

          {activeLoading
            ? "Updating..."
            : provider?.is_active
              ? "Go Offline"
              : "Go Active"
          }

        </button>


      </div>


    </div>

  );

}