// "use client";

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
// } from "react-leaflet";

// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // ==============================
// // User Icon
// // ==============================

// const userIcon = new L.Icon({
//   iconUrl:
//     "https://cdn-icons-png.flaticon.com/512/149/149059.png",
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -35],
// });

// // ==============================
// // Provider Icon
// // ==============================

// const providerIcon = new L.Icon({
//   iconUrl:
//     "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [35, 35],
//   iconAnchor: [17, 35],
//   popupAnchor: [0, -30],
// });

// export default function GoogleMap({
//   providers = [],
//   currentLocation,
// }) {
//   const center =
//     currentLocation?.latitude && currentLocation?.longitude
//       ? [
//           Number(currentLocation.latitude),
//           Number(currentLocation.longitude),
//         ]
//       : [23.2599, 77.4126];

//   return (
//     <div className="h-[650px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">

//       <MapContainer
//         key={`${center[0]}-${center[1]}`}
//   center={center}
//   zoom={14}
//   scrollWheelZoom
//   className="h-full w-full"
//       >
//         <TileLayer
//           attribution="&copy; OpenStreetMap contributors"
//           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* User Marker */}

//         {currentLocation?.latitude && currentLocation?.longitude && (
//           <Marker
//             position={[
//               Number(currentLocation.latitude),
//               Number(currentLocation.longitude),
//             ]}
//             icon={userIcon}
//           >
//             <Popup>
//               <div className="text-center">
//                 <h3 className="font-bold">
//                   Your Location
//                 </h3>

//                 <p>📍 Current Position</p>
//               </div>
//             </Popup>
//           </Marker>
//         )}

//         {/* Provider Markers */}

//         {providers
//           .filter(
//             (provider) =>
//               provider.latitude &&
//               provider.longitude
//           )
//           .map((provider) => (
//             <Marker
//               key={provider.id}
//               position={[
//                 Number(provider.latitude),
//                 Number(provider.longitude),
//               ]}
//               icon={providerIcon}
//             >
//               <Popup>
//                 <div className="min-w-[180px]">

//                   <h3 className="text-lg font-bold">
//                     {provider.full_name}
//                   </h3>

//                   <p className="text-sm text-gray-500">
//                     {provider.service_name}
//                   </p>

//                   <p className="mt-2">
//                     ⭐ {provider.rating || 5}
//                   </p>

//                   {provider.distance && (
//                     <p>
//                       📍 {provider.distance.toFixed(1)} KM Away
//                     </p>
//                   )}

//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//       </MapContainer>
//     </div>
//   );
// }

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Star, Navigation } from "lucide-react";

// ==============================
// User Icon
// ==============================

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

// ==============================
// Provider Icon
// ==============================

const providerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -30],
});

export default function GoogleMap({ providers = [], currentLocation }) {
  const center =
    currentLocation?.latitude && currentLocation?.longitude
      ? [Number(currentLocation.latitude), Number(currentLocation.longitude)]
      : [23.2599, 77.4126];

  return (
    <div className="relative h-[650px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">
      {/* Legend */}
      <div
        className="absolute left-4 top-4 z-[1000] flex items-center gap-4 rounded-full border px-4 py-2 text-xs font-medium shadow-md"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface-elevated)",
          color: "var(--color-foreground-secondary)",
        }}
      >
        <span className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--navy-500)" }}
          />
          You
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--color-primary)" }}
          />
          Providers
        </span>
      </div>

      <MapContainer
        key={`${center[0]}-${center[1]}`}
        center={center}
        zoom={14}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User Marker */}

        {currentLocation?.latitude && currentLocation?.longitude && (
          <Marker
            position={[Number(currentLocation.latitude), Number(currentLocation.longitude)]}
            icon={userIcon}
          >
            <Popup className="dispatch-popup">
              <div className="flex items-center gap-2.5 px-1 py-0.5">
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--navy-50)", color: "var(--navy-600)" }}
                >
                  <MapPin size={15} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
                    Your Location
                  </h3>
                  <p className="text-xs" style={{ color: "var(--color-foreground-muted)" }}>
                    Current position
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Provider Markers */}

        {providers
          .filter((provider) => provider.latitude && provider.longitude)
          .map((provider) => (
            <Marker
              key={provider.id}
              position={[Number(provider.latitude), Number(provider.longitude)]}
              icon={providerIcon}
            >
              <Popup className="dispatch-popup">
                <div className="min-w-[190px] px-1 py-0.5">
                  <h3 className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
                    {provider.full_name}
                  </h3>

                  <p className="mt-0.5 text-xs" style={{ color: "var(--color-foreground-muted)" }}>
                    {provider.service_name}
                  </p>

                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <span
                      className="flex items-center gap-1 rounded-full px-2 py-1 font-semibold"
                      style={{
                        background: "var(--lead-live-bg, var(--amber-50))",
                        color: "var(--amber-700, #9C5E19)",
                      }}
                    >
                      <Star size={12} fill="currentColor" strokeWidth={0} />
                      {provider.rating || 5}
                    </span>

                    {provider.distance && (
                      <span
                        className="flex items-center gap-1"
                        style={{ color: "var(--color-foreground-secondary)" }}
                      >
                        <Navigation size={12} />
                        {provider.distance.toFixed(1)} km away
                      </span>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Token-styled Leaflet popup chrome */}
      <style>{`
        .dispatch-popup .leaflet-popup-content-wrapper {
          border-radius: var(--radius-lg);
          background: var(--color-surface-elevated);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
          padding: 4px;
        }
        .dispatch-popup .leaflet-popup-content {
          margin: 10px 12px;
        }
        .dispatch-popup .leaflet-popup-tip {
          background: var(--color-surface-elevated);
          border: 1px solid var(--color-border);
        }
        .dispatch-popup .leaflet-popup-close-button {
          color: var(--color-foreground-muted);
        }
      `}</style>
    </div>
  );
}