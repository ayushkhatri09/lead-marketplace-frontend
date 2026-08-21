// "use client";

// import { useEffect, useState } from "react";
// import { getMyLeads } from "@/api/leadApi";
// import {
//   MapPin,
//   Clock,
//   User,
//   Wrench
// } from "lucide-react";


// export default function MyLeads(){

//     const [leads,setLeads] = useState([]);
//     const [loading,setLoading] = useState(true);


//     useEffect(()=>{

//         fetchLeads();

//     },[]);



//     const fetchLeads = async()=>{

//         try{

//             const response = await getMyLeads();

//             setLeads(
//                 response.data.data || []
//             );

//         }
//         catch(error){

//             console.error(
//                 "My Leads Error:",
//                 error
//             );

//         }
//         finally{

//             setLoading(false);

//         }

//     };



//     if(loading){

//         return (
//             <div className="mt-10 rounded-3xl border p-10 text-center">
//                 Loading Leads...
//             </div>
//         )

//     }



//     return (

//         <div className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">


//             <div className="mb-6">

//                 <h2 className="text-2xl font-bold">
//                     My Leads
//                 </h2>

//                 <p className="text-sm text-gray-500">
//                     Your service requests
//                 </p>

//             </div>



//             {
//                 leads.length === 0 ? (

//                     <div className="flex h-40 items-center justify-center text-gray-500">

//                         No Leads Created Yet

//                     </div>

//                 ) : (


//                     <div className="space-y-5">


//                     {
//                         leads.map((lead)=>(

//                             <div
//                             key={lead.id}
//                             className="
//                             rounded-2xl
//                             border
//                             p-5
//                             transition
//                             hover:shadow-lg
//                             "
//                             >


//                                 <div className="flex justify-between">


//                                     <div>

//                                         <h3 className="text-xl font-bold flex items-center gap-2">

//                                             <Wrench size={20}/>

//                                             {lead.service_name}

//                                         </h3>


//                                     </div>



//                                     <span
//                                     className="
//                                     rounded-full
//                                     bg-yellow-100
//                                     px-4
//                                     py-1
//                                     text-sm
//                                     font-semibold
//                                     "
//                                     >

//                                         {lead.status}

//                                     </span>


//                                 </div>




//                                 <p className="mt-4 text-gray-600">

//                                     {lead.description}

//                                 </p>



//                                 <div className="mt-4 space-y-2 text-sm text-gray-500">


//                                     <p className="flex gap-2">

//                                         <MapPin size={16}/>

//                                         {lead.address}

//                                     </p>



//                                     <p className="flex gap-2">

//                                         <Clock size={16}/>

//                                         {
//                                             new Date(
//                                                 lead.created_at
//                                             ).toLocaleString()
//                                         }

//                                     </p>



//                                     {
//                                         lead.provider_name && (

//                                             <p className="flex gap-2">

//                                                 <User size={16}/>

//                                                 Provider:
//                                                 {lead.provider_name}

//                                             </p>

//                                         )
//                                     }


//                                 </div>


//                             </div>

//                         ))
//                     }


//                     </div>


//                 )
//             }


//         </div>

//     )

// }

// "use client";

// import { useEffect, useState } from "react";
// import { getMyLeads } from "@/api/leadApi";
// import { MapPin, Clock, User, Wrench, Loader2, Inbox } from "lucide-react";

// const statusStyles = {
//   live: {
//     background: "var(--lead-live-bg, var(--amber-50))",
//     color: "var(--amber-700, #9C5E19)",
//   },
//   pending: {
//     background: "var(--lead-live-bg, var(--amber-50))",
//     color: "var(--amber-700, #9C5E19)",
//   },
//   accepted: {
//     background: "var(--lead-accepted-bg, var(--teal-50))",
//     color: "var(--teal-700, #1C4F44)",
//   },
//   assigned: {
//     background: "var(--lead-assigned-bg, var(--navy-50))",
//     color: "var(--navy-600, #33396F)",
//   },
//   completed: {
//     background: "var(--lead-accepted-bg, var(--teal-50))",
//     color: "var(--teal-700, #1C4F44)",
//   },
//   cancelled: {
//     background: "var(--status-danger-bg, var(--ember-50))",
//     color: "var(--status-danger-fg, var(--ember-700))",
//   },
//   expired: {
//     background: "var(--lead-expired-bg, var(--neutral-100))",
//     color: "var(--color-foreground-muted)",
//   },
// };

// const getStatusStyle = (status) =>
//   statusStyles[(status || "").toLowerCase()] || statusStyles.live;

// export default function MyLeads() {
//   const [leads, setLeads] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const fetchLeads = async () => {
//     try {
//       const response = await getMyLeads();

//       setLeads(response.data.data || []);
//     } catch (error) {
//       console.error("My Leads Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div
//         className="mt-10 flex flex-col items-center justify-center gap-3 rounded-3xl border p-14"
//         style={{
//           borderColor: "var(--color-border)",
//           background: "var(--color-surface)",
//           color: "var(--color-foreground-muted)",
//         }}
//       >
//         <Loader2 size={26} className="animate-spin" style={{ color: "var(--color-primary)" }} />
//         <span className="text-sm font-medium">Loading leads...</span>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="mt-10 rounded-3xl border p-6 shadow-sm"
//       style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
//     >
//       <div className="mb-6">
//         <h2
//           className="text-2xl font-bold"
//           style={{ color: "var(--color-foreground)", letterSpacing: "var(--letter-spacing-tight, -0.02em)" }}
//         >
//           My Leads
//         </h2>

//         <p className="text-sm" style={{ color: "var(--color-foreground-muted)" }}>
//           Your service requests
//         </p>
//       </div>

//       {leads.length === 0 ? (
//         <div
//           className="flex h-40 flex-col items-center justify-center gap-3"
//           style={{ color: "var(--color-foreground-muted)" }}
//         >
//           <span
//             className="flex h-12 w-12 items-center justify-center rounded-full"
//             style={{ background: "var(--color-surface-sunken)", color: "var(--color-foreground-muted)" }}
//           >
//             <Inbox size={22} />
//           </span>
//           <span className="text-sm font-medium">No leads created yet</span>
//         </div>
//       ) : (
//         <div className="space-y-5">
//           {leads.map((lead) => {
//             const badge = getStatusStyle(lead.status);
//             return (
//               <div
//                 key={lead.id}
//                 className="rounded-2xl border p-5 transition-all"
//                 style={{
//                   borderColor: "var(--color-border)",
//                   background: "var(--color-surface-elevated)",
//                   boxShadow: "var(--shadow-sm)",
//                   transitionDuration: "var(--duration-fast, 150ms)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.boxShadow = "var(--shadow-lg)";
//                   e.currentTarget.style.borderColor = "var(--border-hover, var(--color-border-strong))";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.boxShadow = "var(--shadow-sm)";
//                   e.currentTarget.style.borderColor = "var(--color-border)";
//                 }}
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <h3
//                     className="flex items-center gap-2 text-xl font-bold"
//                     style={{ color: "var(--color-foreground)" }}
//                   >
//                     <span
//                       className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
//                       style={{ background: "var(--color-surface-sunken)", color: "var(--color-primary)" }}
//                     >
//                       <Wrench size={17} />
//                     </span>
//                     {lead.service_name}
//                   </h3>

//                   <span
//                     className="whitespace-nowrap rounded-full px-4 py-1 text-sm font-semibold"
//                     style={{ background: badge.background, color: badge.color }}
//                   >
//                     {lead.status}
//                   </span>
//                 </div>

//                 <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--color-foreground-secondary)" }}>
//                   {lead.description}
//                 </p>

//                 <div
//                   className="mt-4 space-y-2 border-t pt-4 text-sm"
//                   style={{ borderColor: "var(--color-divider)", color: "var(--color-foreground-muted)" }}
//                 >
//                   <p className="flex items-center gap-2">
//                     <MapPin size={15} />
//                     {lead.address}
//                   </p>

//                   <p className="flex items-center gap-2">
//                     <Clock size={15} />
//                     {new Date(lead.created_at).toLocaleString()}
//                   </p>

//                   {lead.provider_name && (
//                     <p className="flex items-center gap-2">
//                       <User size={15} />
//                       Provider: {lead.provider_name}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { getMyLeads } from "@/api/leadApi";
import {
  MapPin,
  Clock,
  User,
  Wrench,
  Loader2,
  Inbox,
} from "lucide-react";

const statusStyles = {
  live: {
    background: "var(--lead-live-bg, var(--amber-50))",
    color: "var(--amber-700, #9C5E19)",
  },

  pending: {
    background: "var(--lead-live-bg, var(--amber-50))",
    color: "var(--amber-700, #9C5E19)",
  },

  accepted: {
    background: "var(--lead-accepted-bg, var(--teal-50))",
    color: "var(--teal-700, #1C4F44)",
  },

  assigned: {
    background: "var(--lead-assigned-bg, var(--navy-50))",
    color: "var(--navy-600, #33396F)",
  },

  completed: {
    background: "var(--lead-accepted-bg, var(--teal-50))",
    color: "var(--teal-700, #1C4F44)",
  },

  cancelled: {
    background: "var(--status-danger-bg, var(--ember-50))",
    color: "var(--status-danger-fg, var(--ember-700))",
  },

  expired: {
    background: "var(--lead-expired-bg, var(--neutral-100))",
    color: "var(--color-foreground-muted)",
  },
};

const getStatusStyle = (status) =>
  statusStyles[(status || "").toLowerCase()] || statusStyles.live;

export default function MyLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await getMyLeads();

      setLeads(response.data.data || []);
    } catch (error) {
      console.error("My Leads Error:", error);
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div
        className="
          mt-10
          h-[calc(100vh-120px)]
          min-h-[500px]
          max-h-[850px]
          flex
          flex-col
          items-center
          justify-center
          gap-3
          rounded-3xl
          border
          p-14
        "
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface)",
          color: "var(--color-foreground-muted)",
        }}
      >
        <Loader2
          size={26}
          className="animate-spin"
          style={{
            color: "var(--color-primary)",
          }}
        />

        <span className="text-sm font-medium">
          Loading leads...
        </span>
      </div>
    );
  }

  return (
    <div
      className="
        mt-10
        h-[calc(100vh-120px)]
        min-h-[500px]
        max-h-[850px]
        overflow-hidden
        rounded-3xl
        border
        shadow-sm
      "
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          flex
          flex-shrink-0
          items-center
          justify-between
          border-b
          px-6
          py-5
        "
        style={{
          borderColor: "var(--color-divider)",
          background: "var(--color-surface)",
        }}
      >
        <div>
          <h2
            className="text-2xl font-bold"
            style={{
              color: "var(--color-foreground)",
              letterSpacing:
                "var(--letter-spacing-tight, -0.02em)",
            }}
          >
            My Leads
          </h2>

          <p
            className="mt-1 text-sm"
            style={{
              color: "var(--color-foreground-muted)",
            }}
          >
            Your service requests
          </p>
        </div>

        {/* Lead count */}

        <span
          className="
            rounded-full
            px-4
            py-2
            text-sm
            font-semibold
          "
          style={{
            background:
              "var(--state-selected-bg)",
            color:
              "var(--color-primary)",
          }}
        >
          {leads.length} Leads
        </span>
      </div>

      {/* =====================================================
          SCROLLABLE LEADS AREA
      ====================================================== */}

      <div
        className="
          h-[calc(100%-88px)]
          overflow-y-auto
          p-6

          scrollbar-thin
        "
        style={{
          scrollbarColor:
            "var(--color-border-strong) transparent",
        }}
      >
        {leads.length === 0 ? (
          /* =================================================
             EMPTY STATE
          ================================================= */

          <div
            className="
              flex
              h-full
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
                h-14
                w-14
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
              <Inbox size={24} />
            </span>

            <span className="text-sm font-medium">
              No leads created yet
            </span>

            <span className="text-xs">
              Your service requests will appear here.
            </span>
          </div>
        ) : (
          /* =================================================
             LEADS
          ================================================= */

          <div className="space-y-5">
            {leads.map((lead) => {
              const badge = getStatusStyle(
                lead.status
              );

              return (
                <div
                  key={lead.id}
                  className="
                    rounded-2xl
                    border
                    p-5
                    transition-all
                  "
                  style={{
                    borderColor:
                      "var(--color-border)",

                    background:
                      "var(--color-surface-elevated)",

                    boxShadow:
                      "var(--shadow-sm)",

                    transitionDuration:
                      "var(--duration-fast, 150ms)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "var(--shadow-lg)";

                    e.currentTarget.style.borderColor =
                      "var(--border-hover, var(--color-border-strong))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "var(--shadow-sm)";

                    e.currentTarget.style.borderColor =
                      "var(--color-border)";
                  }}
                >
                  {/* =========================================
                      TOP
                  ========================================== */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <h3
                      className="
                        flex
                        items-center
                        gap-2
                        text-xl
                        font-bold
                      "
                      style={{
                        color:
                          "var(--color-foreground)",
                      }}
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          flex-shrink-0
                          items-center
                          justify-center
                          rounded-lg
                        "
                        style={{
                          background:
                            "var(--color-surface-sunken)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        <Wrench size={17} />
                      </span>

                      {lead.service_name}
                    </h3>

                    {/* Status */}

                    <span
                      className="
                        whitespace-nowrap
                        rounded-full
                        px-4
                        py-1
                        text-sm
                        font-semibold
                      "
                      style={{
                        background:
                          badge.background,
                        color: badge.color,
                      }}
                    >
                      {lead.status}
                    </span>
                  </div>

                  {/* =========================================
                      DESCRIPTION
                  ========================================== */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-relaxed
                    "
                    style={{
                      color:
                        "var(--color-foreground-secondary)",
                    }}
                  >
                    {lead.description}
                  </p>

                  {/* =========================================
                      DETAILS
                  ========================================== */}

                  <div
                    className="
                      mt-4
                      space-y-2
                      border-t
                      pt-4
                      text-sm
                    "
                    style={{
                      borderColor:
                        "var(--color-divider)",

                      color:
                        "var(--color-foreground-muted)",
                    }}
                  >
                    {/* Address */}

                    {lead.address && (
                      <p className="flex items-center gap-2">
                        <MapPin size={15} />

                        {lead.address}
                      </p>
                    )}

                    {/* Created */}

                    <p className="flex items-center gap-2">
                      <Clock size={15} />

                      {new Date(
                        lead.created_at
                      ).toLocaleString()}
                    </p>

                    {/* Provider */}

                    {lead.provider_name && (
                      <p className="flex items-center gap-2">
                        <User size={15} />

                        Provider:
                        {" "}
                        {lead.provider_name}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}