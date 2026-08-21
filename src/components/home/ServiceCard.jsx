// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { MapPin, Loader2 } from "lucide-react";

// import { createLead } from "@/api/leadApi";

// export default function ServiceCard({
//   service,
// }) {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const getCurrentLocation = () => {
//     return new Promise((resolve, reject) => {
//       if (!navigator.geolocation) {
//         reject(
//           new Error("Geolocation is not supported by your browser.")
//         );
//         return;
//       }

//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           resolve({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("GPS ERROR:", error);

//           let message = "Unable to get your location.";

//           if (error.code === 1) {
//             message =
//               "Location permission denied. Please allow location access.";
//           }

//           if (error.code === 2) {
//             message =
//               "Your location could not be determined.";
//           }

//           if (error.code === 3) {
//             message =
//               "Location request timed out. Please try again.";
//           }

//           reject(new Error(message));
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 15000,
//           maximumAge: 0,
//         }
//       );
//     });
//   };

//   const reverseGeocode = async (latitude, longitude) => {
//     const url =
//       `https://nominatim.openstreetmap.org/reverse` +
//       `?lat=${latitude}` +
//       `&lon=${longitude}` +
//       `&format=json` +
//       `&addressdetails=1`;

//     const response = await fetch(url, {
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Unable to fetch address.");
//     }

//     const data = await response.json();

//     if (!data.display_name) {
//       throw new Error("Address could not be found.");
//     }

//     return data.display_name;
//   };

//   const handleBook = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       setSuccess(false);

//       // =====================================
//       // STEP 1: GET CURRENT GPS LOCATION
//       // =====================================

//       console.log("Getting current location...");

//       const location = await getCurrentLocation();

//       console.log("CURRENT LOCATION:", location);

//       const latitude = Number(
//         location.latitude.toFixed(6)
//       );

//       const longitude = Number(
//         location.longitude.toFixed(6)
//       );

//       // =====================================
//       // STEP 2: REVERSE GEOCODING
//       // =====================================

//       console.log(
//         "Getting address from Nominatim..."
//       );

//       const address = await reverseGeocode(
//         latitude,
//         longitude
//       );

//       console.log(
//         "CURRENT ADDRESS:",
//         address
//       );

//       // =====================================
//       // STEP 3: CREATE LEAD
//       // =====================================

//       const payload = {
//         service: service.id,

//         description:
//           `I need ${service.name} service.`,

//         address: address,

//         latitude: latitude.toFixed(6),

//         longitude: longitude.toFixed(6),
//       };

//       console.log(
//         "CREATE LEAD PAYLOAD:",
//         payload
//       );

//       const response = await createLead(
//         payload
//       );

//       console.log(
//         "LEAD CREATED:",
//         response.data
//       );

//       // =====================================
//       // STEP 4: SUCCESS
//       // =====================================

//       setSuccess(true);

//       alert(
//         "Service booked successfully!"
//       );

//     } catch (error) {
//       console.error(
//         "BOOK SERVICE ERROR:",
//         error
//       );

//       const serverMessage =
//         error.response?.data;

//       console.error(
//         "SERVER RESPONSE:",
//         serverMessage
//       );

//       setError(
//         error.message ||
//         "Unable to book service."
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="
//         rounded-2xl
//         border
//         border-[var(--color-border)]
//         bg-[var(--color-surface)]
//         p-6
//         shadow-sm
//         transition-all
//         hover:-translate-y-1
//         hover:shadow-lg
//       "
//     >

//       {/* ICON */}

//       <div
//         className="
//           flex
//           h-16
//           w-16
//           items-center
//           justify-center
//           rounded-2xl
//           bg-[var(--color-primary)]/10
//         "
//       >
//         <MapPin
//           className="
//             h-8
//             w-8
//             text-[var(--color-primary)]
//           "
//         />
//       </div>


//       {/* SERVICE NAME */}

//       <h3
//         className="
//           mt-5
//           text-xl
//           font-bold
//           capitalize
//         "
//       >
//         {service.name}
//       </h3>


//       <p
//         className="
//           mt-2
//           text-sm
//           text-[var(--color-foreground-muted)]
//         "
//       >
//         Book a verified {service.name} professional
//         near your current location.
//       </p>


//       {/* ERROR */}

//       {error && (
//         <div
//           className="
//             mt-4
//             rounded-lg
//             bg-red-50
//             p-3
//             text-sm
//             text-red-600
//           "
//         >
//           {error}
//         </div>
//       )}


//       {/* SUCCESS */}

//       {success && (
//         <div
//           className="
//             mt-4
//             rounded-lg
//             bg-green-50
//             p-3
//             text-sm
//             text-green-600
//           "
//         >
//           Service booked successfully.
//         </div>
//       )}


//       {/* BOOK BUTTON */}

//       <Button
//         type="button"
//         onClick={handleBook}
//         disabled={loading || success}
//         className="
//           mt-6
//           w-full
//         "
//       >

//         {loading ? (
//           <>
//             <Loader2
//               className="
//                 mr-2
//                 h-4
//                 w-4
//                 animate-spin
//               "
//             />

//             Booking...
//           </>
//         ) : success ? (
//           "Booked Successfully"
//         ) : (
//           "Book Service"
//         )}

//       </Button>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Loader2 } from "lucide-react";

import { createLead } from "@/api/leadApi";
import { useAuth } from "@/context/AuthContext";

export default function ServiceCard({
  service,
}) {
  const router = useRouter();

  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(
          new Error(
            "Geolocation is not supported by your browser."
          )
        );
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("GPS ERROR:", error);

          let message =
            "Unable to get your location.";

          if (error.code === 1) {
            message =
              "Location permission denied. Please allow location access.";
          }

          if (error.code === 2) {
            message =
              "Your location could not be determined.";
          }

          if (error.code === 3) {
            message =
              "Location request timed out. Please try again.";
          }

          reject(new Error(message));
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      );
    });
  };

  const reverseGeocode = async (
    latitude,
    longitude
  ) => {
    const url =
      `https://nominatim.openstreetmap.org/reverse` +
      `?lat=${latitude}` +
      `&lon=${longitude}` +
      `&format=json` +
      `&addressdetails=1`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        "Unable to fetch address."
      );
    }

    const data = await response.json();

    if (!data.display_name) {
      throw new Error(
        "Address could not be found."
      );
    }

    return data.display_name;
  };

  const handleBook = async () => {
    // =====================================
    // STEP 0: CHECK LOGIN
    // =====================================

  if (!auth.isAuthenticated) {
  alert(
    "You are not logged in. Please login first, then you can proceed with the service."
  );
  router.push("/user/login");
  return;
}

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      // =====================================
      // STEP 1: GET CURRENT GPS LOCATION
      // =====================================

      console.log(
        "Getting current location..."
      );

      const location =
        await getCurrentLocation();

      console.log(
        "CURRENT LOCATION:",
        location
      );

      const latitude = Number(
        location.latitude.toFixed(6)
      );

      const longitude = Number(
        location.longitude.toFixed(6)
      );

      // =====================================
      // STEP 2: REVERSE GEOCODING
      // =====================================

      console.log(
        "Getting address from Nominatim..."
      );

      const address =
        await reverseGeocode(
          latitude,
          longitude
        );

      console.log(
        "CURRENT ADDRESS:",
        address
      );

      // =====================================
      // STEP 3: CREATE LEAD
      // =====================================

      const payload = {
        service: service.id,

        description:
          `I need ${service.name} service.`,

        address: address,

        latitude:
          latitude.toFixed(6),

        longitude:
          longitude.toFixed(6),
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

      // =====================================
      // STEP 4: SUCCESS
      // =====================================

      setSuccess(true);

      alert(
        "Service booked successfully!"
      );

    } catch (error) {
      console.error(
        "BOOK SERVICE ERROR:",
        error
      );

      const serverMessage =
        error.response?.data;

      console.error(
        "SERVER RESPONSE:",
        serverMessage
      );

      setError(
        error.message ||
        "Unable to book service."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-6
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[var(--color-primary)]/10
        "
      >
        <MapPin
          className="
            h-8
            w-8
            text-[var(--color-primary)]
          "
        />
      </div>

      {/* SERVICE NAME */}

      <h3
        className="
          mt-5
          text-xl
          font-bold
          capitalize
        "
      >
        {service.name}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-[var(--color-foreground-muted)]
        "
      >
        Book a verified {service.name} professional
        near your current location.
      </p>

      {/* ERROR */}

      {error && (
        <div
          className="
            mt-4
            rounded-lg
            bg-red-50
            p-3
            text-sm
            text-red-600
          "
        >
          {error}
        </div>
      )}

      {/* SUCCESS */}

      {success && (
        <div
          className="
            mt-4
            rounded-lg
            bg-green-50
            p-3
            text-sm
            text-green-600
          "
        >
          Service booked successfully.
        </div>
      )}

      {/* BOOK BUTTON */}

      <Button
        type="button"
        onClick={handleBook}
        disabled={loading || success}
        className="
          mt-6
          w-full
        "
      >
        {loading ? (
          <>
            <Loader2
              className="
                mr-2
                h-4
                w-4
                animate-spin
              "
            />

            Booking...
          </>
        ) : success ? (
          "Booked Successfully"
        ) : (
          "Book Service"
        )}
      </Button>
    </div>
  );
}