
// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// import HeroSection from "@/components/home/HeroSection";
// import SearchBar from "@/components/home/SearchBar";
// import ProviderList from "@/components/home/ProviderList";
// import MyLeads from "@/components/home/MyLead";
// import ServiceList from "@/components/home/ServiceList";

// import AvailableLeadList from "@/components/provider/AvailableLeadList";
// import HistoryLeadList from "@/components/provider/HistoryLeadList";

// import { nearbyProviders } from "@/api/providerAuthApi";

// import { useAuth } from "@/context/AuthContext";
// import { useProviderAuth } from "@/context/ProviderAuthContext";


// const GoogleMap = dynamic(
//   () => import("@/components/home/GoogleMap"),
//   {
//     ssr: false,
//   }
// );


// export default function Home() {


//   const [search, setSearch] = useState("");

//   const [providers, setProviders] = useState([]);

//   const [loading, setLoading] = useState(true);


//   const [location, setLocation] = useState({
//     latitude: null,
//     longitude: null,
//   });



//   const {
//     auth,
//   } = useAuth();



//   const {
//     providerAuth,
//   } = useProviderAuth();



//   const userLoggedIn =
//     auth.isAuthenticated;


//   const providerLoggedIn =
//     providerAuth.isAuthenticated;



//   // ==============================
//   // GET USER CURRENT LOCATION
//   // ==============================

//   useEffect(() => {


//     if (!userLoggedIn)
//       return;



//     if (!navigator.geolocation) {

//       console.log(
//         "Geolocation not supported"
//       );

//       return;
//     }



//     navigator.geolocation.getCurrentPosition(

//       (position)=>{


//         setLocation({

//           latitude:
//             position.coords.latitude,

//           longitude:
//             position.coords.longitude,

//         });


//       },


//       (error)=>{

//         console.log(
//           "Location Error",
//           error
//         );

//       }

//     );



//   },[
//     userLoggedIn
//   ]);





//   // ==============================
//   // FETCH NEARBY PROVIDERS
//   // ==============================


//   useEffect(()=>{


//     if(

//       userLoggedIn &&

//       location.latitude !== null &&

//       location.longitude !== null

//     ){

//       fetchProviders();

//     }



//   },[

//     userLoggedIn,

//     location.latitude,

//     location.longitude

//   ]);






//   const fetchProviders = async()=>{


//     try{


//       setLoading(true);



//       const response = await nearbyProviders(
//   location.latitude,
//   location.longitude
// );



//       console.log(
//         "NEARBY PROVIDERS:",
//         response.data.data
//       );



//       setProviders(

//         response.data.data || []

//       );



//     }

//     catch(error){


//       console.error(

//         "Nearby Provider Error",

//         error

//       );


//     }

//     finally{


//       setLoading(false);


//     }


//   };





//   // ==============================
//   // SEARCH FILTER
//   // ==============================


//   const filteredProviders =

//     providers.filter((provider)=>{


//       if(!search)
//         return true;



//       return (

//         provider.service_name

//         ?.toLowerCase()

//         .includes(

//           search.toLowerCase()

//         )

//       );


//     });






//   return (


//     <main className="
//       min-h-screen
//       bg-[var(--color-background)]
//     ">



//       <HeroSection />



//       <div className="
//         mx-auto
//         max-w-7xl
//         px-6
//         py-10
//       ">



//         ================= USER ================= */}


//         { {
//           userLoggedIn && (

//           <>


//             <SearchBar

//               value={search}

//               onChange={(e)=>
//                 setSearch(
//                   e.target.value
//                 )
//               }

//             />




//             <div className="
//               mt-8
//               grid
//               gap-8
//               lg:grid-cols-2
//             ">



//               <GoogleMap


//                 key={
//                   `${location.latitude}-${location.longitude}`
//                 }


//                 providers={providers}


//                 currentLocation={location}


//               />





//               <ProviderList


//                 providers={
//                   filteredProviders
//                 }


//                 loading={
//                   loading
//                 }


//               />



//             </div>






//             <div className="
//               mt-10
//             ">


//               <MyLeads />


//             </div>



//           </>

//           )
//         }


//  {userLoggedIn && (
//   <>
//     <HeroSection />

//     <div className="mt-8">
//       <ServiceList />
//     </div>

//     <div className="mt-10">
//       <MyLeads />
//     </div>
//   </>
// )}





//         {/* ================= PROVIDER ================= */}


//         {
//           providerLoggedIn && (


//             <div className="
//               space-y-10
//             ">


//               <AvailableLeadList />


//               <HistoryLeadList />



//             </div>


//           )
//         }







//         {/* ================= GUEST ================= */}



//         {
//           !userLoggedIn &&
//           !providerLoggedIn && (


//             <div className="
//               py-20
//               text-center
//             ">



//               <h2 className="
//                 text-3xl
//                 font-bold
//               ">


//                 Welcome to Lead Marketplace


//               </h2>





//               <p className="
//                 mt-4
//                 text-gray-500
//               ">


//                 Login as User or Provider to continue.


//               </p>



//             </div>


//           )
//         }




//       </div>



//     </main>


//   );

// }

// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// import HeroSection from "@/components/home/HeroSection";
// import ServiceList from "@/components/home/ServiceList";
// import MyLeads from "@/components/home/MyLead";

// import AvailableLeadList from "@/components/provider/AvailableLeadList";
// import HistoryLeadList from "@/components/provider/HistoryLeadList";

// import { useAuth } from "@/context/AuthContext";
// import { useProviderAuth } from "@/context/ProviderAuthContext";

// import { createLead } from "@/api/leadApi";

// const GoogleMap = dynamic(
//   () => import("@/components/home/GoogleMap"),
//   {
//     ssr: false,
//   }
// );

// export default function Home() {
//   // ==============================
//   // LOCATION
//   // ==============================

//   const [location, setLocation] = useState({
//     latitude: null,
//     longitude: null,
//   });

//   // ==============================
//   // AUTH
//   // ==============================

//   const { auth } = useAuth();

//   const { providerAuth } = useProviderAuth();

//   const userLoggedIn = auth.isAuthenticated;

//   const providerLoggedIn =
//     providerAuth.isAuthenticated;

//   // ==============================
//   // GET USER CURRENT LOCATION
//   // ==============================

//   useEffect(() => {
//     if (!userLoggedIn) {
//       return;
//     }

//     if (!navigator.geolocation) {
//       console.log(
//         "Geolocation is not supported by this browser."
//       );

//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error(
//           "Location Error:",
//           error
//         );
//       }
//     );
//   }, [userLoggedIn]);

//   // ==============================
//   // BOOK SERVICE
//   // ==============================

//   const handleBookService = async (service) => {
//     try {
//       if (!service?.id) {
//         alert("Invalid service.");
//         return;
//       }

//       if (
//         location.latitude === null ||
//         location.longitude === null
//       ) {
//         alert(
//           "Please allow your location first."
//         );

//         return;
//       }

//       const payload = {
//         service: service.id,

//         description: `I need ${service.name} service.`,

//         address: "",

//         latitude: Number(
//           location.latitude
//         ).toFixed(6),

//         longitude: Number(
//           location.longitude
//         ).toFixed(6),
//       };

//       console.log(
//         "CREATE LEAD PAYLOAD:",
//         payload
//       );

//       const response =
//         await createLead(payload);

//       console.log(
//         "LEAD CREATED:",
//         response.data
//       );

//       alert(
//         `${service.name} service request created successfully.`
//       );
//     } catch (error) {
//       console.error(
//         "CREATE LEAD ERROR:",
//         error
//       );

//       console.error(
//         "SERVER RESPONSE:",
//         error.response?.data
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to create service request."
//       );
//     }
//   };

//   return (
//     <main
//       className="
//         min-h-screen
//         bg-[var(--color-background)]
//       "
//     >
//       {/* ==============================
//           HERO
//       ============================== */}

//       <HeroSection />

//       <div
//         className="
//           mx-auto
//           max-w-7xl
//           px-6
//           py-10
//         "
//       >
//         {/* ==============================
//             USER
//         ============================== */}

//         {userLoggedIn && (
//           <>
//             {/* ==========================
//                 MAP
//             ========================== */}

//             <div className="mt-8">
//               <GoogleMap
//                 key={`${location.latitude}-${location.longitude}`}
//                 currentLocation={location}
//                 providers={[]}
//               />
//             </div>

//             {/* ==========================
//                 SERVICES
//             ========================== */}

//             <div className="mt-10">
//               <ServiceList
//                 onBook={handleBookService}
//               />
//             </div>

//             {/* ==========================
//                 MY LEADS
//             ========================== */}

//             <div className="mt-10">
//               <MyLeads />
//             </div>
//           </>
//         )}

//         {/* ==============================
//             PROVIDER
//         ============================== */}

//         {providerLoggedIn && (
//           <div
//             className="
//               space-y-10
//               mt-8
//             "
//           >
//             <AvailableLeadList />

//             <HistoryLeadList />
//           </div>
//         )}

//         {/* ==============================
//             GUEST
//         ============================== */}

//         {!userLoggedIn &&
//           !providerLoggedIn && (
//             <div
//               className="
//                 py-20
//                 text-center
//               "
//             >
//               <h2
//                 className="
//                   text-3xl
//                   font-bold
//                   text-[var(--color-foreground)]
//                 "
//               >
//                 Welcome to Lead Marketplace
//               </h2>

//               <p
//                 className="
//                   mt-4
//                   text-[var(--color-foreground-muted)]
//                 "
//               >
//                 Login as User or Provider
//                 to continue.
//               </p>
//             </div>
//           )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// import HeroSection from "@/components/home/HeroSection";
// import ServiceList from "@/components/home/ServiceList";
// import MyLeads from "@/components/home/MyLead";

// import AvailableLeadList from "@/components/provider/AvailableLeadList";
// import HistoryLeadList from "@/components/provider/HistoryLeadList";

// import { useAuth } from "@/context/AuthContext";
// import { useProviderAuth } from "@/context/ProviderAuthContext";
// import { nearbyProviders } from "@/api/providerAuthApi";

// import { createLead } from "@/api/leadApi";

// const GoogleMap = dynamic(
//   () => import("@/components/home/GoogleMap"),
//   {
//     ssr: false,
//   }
// );

// export default function Home() {
//   // ==============================
//   // LOCATION
//   // ==============================

//   const [location, setLocation] = useState({
//     latitude: null,
//     longitude: null,
//   });

//   const [providers, setProviders] = useState([]);

//   // ==============================
//   // AUTH
//   // ==============================

//   const { auth } = useAuth();
//   const { providerAuth } = useProviderAuth();

//   const userLoggedIn = auth.isAuthenticated;
//   const providerLoggedIn = providerAuth.isAuthenticated;

//   // ==============================
//   // GET LOCATION
//   // Guest + User dono ke liye
//   // ==============================

//   useEffect(() => {
//   if (!navigator.geolocation) {
//     console.log(
//       "Geolocation is not supported by this browser."
//     );

//     return;
//   }

//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       setLocation({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//       });
//     },
//     (error) => {
//       console.error(
//         "Location Error:",
//         error
//       );
//     },
//     {
//       enableHighAccuracy: true,
//       timeout: 10000,
//       maximumAge: 0,
//     }
//   );
// }, []);

// useEffect(() => {
//   if (
//     location.latitude === null ||
//     location.longitude === null
//   ) {
//     return;
//   }

//   const fetchNearbyProviders = async () => {
//     try {
//       const response = await nearbyProviders(
//         location.latitude,
//         location.longitude
//       );

//       console.log(
//         "NEARBY PROVIDERS:",
//         response.data
//       );

//       // setProviders(
//       //   Array.isArray(response.data)
//       //     ? response.data
//       //     : response.data?.results || []
//       // );
//       const fetchNearbyProviders = async () => {
//   try {
//     const response = await nearbyProviders(
//       location.latitude,
//       location.longitude
//     );

//     console.log(
//       "NEARBY PROVIDERS:",
//       response.data
//     );

//     const nearbyData = response.data?.data;

//     setProviders(
//       Array.isArray(nearbyData)
//         ? nearbyData
//         : []
//     );
//   } catch (error) {
//     console.error(
//       "NEARBY PROVIDERS ERROR:",
//       error.response?.data || error
//     );

//     setProviders([]);
//   }
// };
//     } catch (error) {
//       console.error(
//         "NEARBY PROVIDERS ERROR:",
//         error.response?.data || error
//       );

//       setProviders([]);
//     }
//   };

//   fetchNearbyProviders();
// }, [
//   location.latitude,
//   location.longitude,
// ]);
//   // ==============================
//   // BOOK SERVICE
//   // ==============================

//   const handleBookService = async (service) => {
//     try {
//       // ==================================
//       // FIRST: LOGIN CHECK
//       // ==================================

//       if (!userLoggedIn) {
//         alert("Please login to book this service.");
//         return;
//       }

//       // ==================================
//       // SERVICE VALIDATION
//       // ==================================

//       if (!service?.id) {
//         alert("Invalid service.");
//         return;
//       }

//       // ==================================
//       // LOCATION VALIDATION
//       // ==================================

//       if (
//         location.latitude === null ||
//         location.longitude === null
//       ) {
//         alert("Please allow your location first.");
//         return;
//       }

//       // ==================================
//       // CREATE LEAD
//       // ==================================

//       const payload = {
//         service: service.id,

//         description: `I need ${service.name} service.`,

//         address: "",

//         latitude: Number(location.latitude).toFixed(6),

//         longitude: Number(location.longitude).toFixed(6),
//       };

//       console.log(
//         "CREATE LEAD PAYLOAD:",
//         payload
//       );

//       const response = await createLead(payload);

//       console.log(
//         "LEAD CREATED:",
//         response.data
//       );

//       alert(
//         `${service.name} service request created successfully.`
//       );
//     } catch (error) {
//       console.error(
//         "CREATE LEAD ERROR:",
//         error
//       );

//       console.error(
//         "SERVER RESPONSE:",
//         error.response?.data
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to create service request."
//       );
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[var(--color-background)]">

//       {/* =================================
//           HERO
//       ================================= */}

//       <HeroSection />

//       <div className="mx-auto max-w-7xl px-6 py-10">

//         {/* =================================
//             MAP
//             Guest + User dono ko dikhega
//         ================================= */}

//         <div className="relative z-0 mt-8">
//   <GoogleMap
//   key={`${location.latitude}-${location.longitude}`}
//   currentLocation={location}
//   providers={providers}
// />
// </div>

//         {/* =================================
//             SERVICES
//             Guest + User dono ko dikhenge
//         ================================= */}

//         <div className="mt-10">
//           <ServiceList
//             onBook={handleBookService}
//           />
//         </div>

//         {/* =================================
//             USER LEADS
//             Sirf logged-in user
//         ================================= */}

//         {userLoggedIn && (
//           <div className="mt-10">
//             <MyLeads />
//           </div>
//         )}

//         {/* =================================
//             PROVIDER
//         ================================= */}

//         {providerLoggedIn && (
//           <div className="mt-10 space-y-10">

//             <AvailableLeadList />

//             <HistoryLeadList />

//           </div>
//         )}

//       </div>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// import HeroSection from "@/components/home/HeroSection";
// import ServiceList from "@/components/home/ServiceList";
// import MyLeads from "@/components/home/MyLead";

// import AvailableLeadList from "@/components/provider/AvailableLeadList";
// import HistoryLeadList from "@/components/provider/HistoryLeadList";

// import { useAuth } from "@/context/AuthContext";
// import { useProviderAuth } from "@/context/ProviderAuthContext";

// import { nearbyProviders } from "@/api/providerAuthApi";
// import { createLead } from "@/api/leadApi";

// const GoogleMap = dynamic(
//   () => import("@/components/home/GoogleMap"),
//   {
//     ssr: false,
//   }
// );

// export default function Home() {
//   // ==========================================
//   // LOCATION
//   // ==========================================

//   const [location, setLocation] = useState({
//     latitude: null,
//     longitude: null,
//   });

//   // ==========================================
//   // NEARBY PROVIDERS
//   // ==========================================

//   const [providers, setProviders] = useState([]);

//   // ==========================================
//   // AUTH
//   // ==========================================

//   const { auth } = useAuth();
//   const { providerAuth } = useProviderAuth();

//   const userLoggedIn = auth.isAuthenticated;
//   const providerLoggedIn =
//     providerAuth.isAuthenticated;

//   // ==========================================
//   // GET CURRENT LOCATION
//   // Guest + User dono
//   // ==========================================

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.log(
//         "Geolocation is not supported by this browser."
//       );

//       return;
//     }

//     console.log("Getting current location...");

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latitude =
//           position.coords.latitude;

//         const longitude =
//           position.coords.longitude;

//         console.log("CURRENT LOCATION:", {
//           latitude,
//           longitude,
//         });

//         setLocation({
//           latitude,
//           longitude,
//         });
//       },

//       (error) => {
//         console.error(
//           "Location Error:",
//           error
//         );
//       },

//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 0,
//       }
//     );
//   }, []);

//   // ==========================================
//   // FETCH NEARBY PROVIDERS
//   // ==========================================

//   useEffect(() => {
//     if (
//       location.latitude === null ||
//       location.longitude === null
//     ) {
//       return;
//     }

//     const fetchNearbyProviders = async () => {
//       try {
//         console.log(
//           "FETCHING NEARBY PROVIDERS:",
//           {
//             latitude: location.latitude,
//             longitude: location.longitude,
//           }
//         );

//         const response =
//           await nearbyProviders(
//             location.latitude,
//             location.longitude
//           );

//         console.log(
//           "NEARBY PROVIDERS RESPONSE:",
//           response.data
//         );

//         // Backend:
//         // {
//         //   count: 3,
//         //   data: [...]
//         // }

//         const nearbyData =
//           response.data?.data;

//         if (Array.isArray(nearbyData)) {
//           console.log(
//             "PROVIDERS TO SHOW ON MAP:",
//             nearbyData
//           );

//           setProviders(nearbyData);
//         } else {
//           console.warn(
//             "Nearby providers data is not an array"
//           );

//           setProviders([]);
//         }
//       } catch (error) {
//         console.error(
//           "NEARBY PROVIDERS ERROR:",
//           error.response?.data || error
//         );

//         setProviders([]);
//       }
//     };

//     fetchNearbyProviders();
//   }, [
//     location.latitude,
//     location.longitude,
//   ]);

//   // ==========================================
//   // BOOK SERVICE
//   // ==========================================

//   const handleBookService = async (service) => {
//     try {
//       // Guest ko map + cards dikhेंगे,
//       // lekin booking ke time login required.

//       if (!userLoggedIn) {
//         alert(
//           "Please login to book this service."
//         );

//         return;
//       }

//       if (!service?.id) {
//         alert("Invalid service.");
//         return;
//       }

//       if (
//         location.latitude === null ||
//         location.longitude === null
//       ) {
//         alert(
//           "Please allow your location first."
//         );

//         return;
//       }

//       const payload = {
//         service: service.id,

//         description:
//           `I need ${service.name} service.`,

//         address: "",

//         latitude: Number(
//           location.latitude
//         ).toFixed(6),

//         longitude: Number(
//           location.longitude
//         ).toFixed(6),
//       };

//       console.log(
//         "CREATE LEAD PAYLOAD:",
//         payload
//       );

//       const response =
//         await createLead(payload);

//       console.log(
//         "LEAD CREATED:",
//         response.data
//       );

//       alert(
//         `${service.name} service request created successfully.`
//       );
//     } catch (error) {
//       console.error(
//         "CREATE LEAD ERROR:",
//         error
//       );

//       console.error(
//         "SERVER RESPONSE:",
//         error.response?.data
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to create service request."
//       );
//     }
//   };

//   // ==========================================
//   // UI
//   // ==========================================

//   return (
//     <main className="min-h-screen bg-[var(--color-background)]">

//       {/* HERO */}

//       <HeroSection />

//       <div className="mx-auto max-w-7xl px-6 py-10">

//         {/* =====================================
//             MAP
//             Guest + User + Provider
//         ===================================== */}

//         <div className="relative z-0 mt-8">

//           <GoogleMap
//             key={`${location.latitude}-${location.longitude}`}
//             currentLocation={location}
//             providers={providers}
//           />

//         </div>

//         {/* =====================================
//             SERVICES
//             Guest + User
//         ===================================== */}

//         <div className="mt-10">
// <div
//   id="services-section"
//   className="mt-10 scroll-mt-24"
// >
//   {!providerLoggedIn && (
//   <div className="mt-10">
//     <ServiceList
//       onBook={handleBookService}
//     />
//   </div>
// )}
//         </div>

//         {/* =====================================
//             USER LEADS
//             Only logged-in user
//         ===================================== */}

//         {userLoggedIn && (
//           <div className="mt-10">
//             <MyLeads />
//           </div>
//         )}

//         {/* =====================================
//             PROVIDER
//             Only logged-in provider
//         ===================================== */}

//         {providerLoggedIn && (
//           <div className="mt-10 space-y-10">

//             <AvailableLeadList />

//             <HistoryLeadList />

//           </div>
//         )}

//       </div>

//     </main>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// import HeroSection from "@/components/home/HeroSection";
// import ServiceList from "@/components/home/ServiceList";
// import MyLeads from "@/components/home/MyLead";

// import AvailableLeadList from "@/components/provider/AvailableLeadList";
// import HistoryLeadList from "@/components/provider/HistoryLeadList";

// import { useAuth } from "@/context/AuthContext";
// import { useProviderAuth } from "@/context/ProviderAuthContext";

// import { nearbyProviders } from "@/api/providerAuthApi";
// import { createLead } from "@/api/leadApi";

// const GoogleMap = dynamic(
//   () => import("@/components/home/GoogleMap"),
//   {
//     ssr: false,
//   }
// );

// export default function Home() {
//   // ==========================================
//   // LOCATION
//   // ==========================================

//   const [location, setLocation] = useState({
//     latitude: null,
//     longitude: null,
//   });

//   const [providers, setProviders] = useState([]);

//   // ==========================================
//   // AUTH
//   // ==========================================

//   const { auth } = useAuth();
//   const { providerAuth } = useProviderAuth();

//   const userLoggedIn = auth?.isAuthenticated;
//   const providerLoggedIn = providerAuth?.isAuthenticated;

//   // ==========================================
//   // GET USER LOCATION
//   // Guest + User + Provider
//   // ==========================================

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.log(
//         "Geolocation is not supported by this browser."
//       );

//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error(
//           "Location Error:",
//           error
//         );
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 0,
//       }
//     );
//   }, []);

//   // ==========================================
//   // FETCH NEARBY PROVIDERS
//   // ==========================================

//   useEffect(() => {
//     if (
//       location.latitude === null ||
//       location.longitude === null
//     ) {
//       return;
//     }

//     const fetchNearbyProviders = async () => {
//       try {
//         const response = await nearbyProviders(
//           location.latitude,
//           location.longitude
//         );

//         console.log(
//           "NEARBY PROVIDERS:",
//           response.data
//         );

//         const nearbyData =
//           response.data?.data || [];

//         setProviders(
//           Array.isArray(nearbyData)
//             ? nearbyData
//             : []
//         );
//       } catch (error) {
//         console.error(
//           "NEARBY PROVIDERS ERROR:",
//           error.response?.data || error
//         );

//         setProviders([]);
//       }
//     };

//     fetchNearbyProviders();
//   }, [
//     location.latitude,
//     location.longitude,
//   ]);

//   // ==========================================
//   // BOOK SERVICE
//   // ==========================================

//   const handleBookService = async (service) => {
//     try {
//       // --------------------------------------
//       // LOGIN CHECK
//       // --------------------------------------

//       if (!userLoggedIn) {
//         alert(
//           "Please login to book this service."
//         );

//         return;
//       }

//       // --------------------------------------
//       // SERVICE VALIDATION
//       // --------------------------------------

//       if (!service?.id) {
//         alert("Invalid service.");

//         return;
//       }

//       // --------------------------------------
//       // LOCATION VALIDATION
//       // --------------------------------------

//       if (
//         location.latitude === null ||
//         location.longitude === null
//       ) {
//         alert(
//           "Please allow your location first."
//         );

//         return;
//       }

//       // --------------------------------------
//       // CREATE LEAD PAYLOAD
//       // --------------------------------------

//       const payload = {
//         service: service.id,

//         description: `I need ${service.name} service.`,

//         address: "",

//         latitude: Number(
//           location.latitude
//         ).toFixed(6),

//         longitude: Number(
//           location.longitude
//         ).toFixed(6),
//       };

//       console.log(
//         "CREATE LEAD PAYLOAD:",
//         payload
//       );

//       // --------------------------------------
//       // CREATE LEAD
//       // --------------------------------------

//       const response =
//         await createLead(payload);

//       console.log(
//         "LEAD CREATED:",
//         response.data
//       );

//       alert(
//         `${service.name} service request created successfully.`
//       );
//     } catch (error) {
//       console.error(
//         "CREATE LEAD ERROR:",
//         error
//       );

//       console.error(
//         "SERVER RESPONSE:",
//         error.response?.data
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to create service request."
//       );
//     }
//   };

//   // ==========================================
//   // RENDER
//   // ==========================================

//   return (
//     <main className="min-h-screen bg-[var(--color-background)]">

//       {/* =====================================
//           HERO
//       ===================================== */}

//       <HeroSection />

//       <div className="mx-auto max-w-7xl px-6 py-10">

//         {/* =====================================
//             MAP
//             Guest + User + Provider
//         ===================================== */}

//         <div className="relative z-0 mt-8">

//           <GoogleMap
//             key={`${location.latitude}-${location.longitude}`}
//             currentLocation={location}
//             providers={providers}
//           />

//         </div>

//         {/* =====================================
//             SERVICES
//             ONLY GUEST + USER

//             Provider ko ServiceList nahi dikhegi
//         ===================================== */}

//         {!providerLoggedIn && (
//           <div className="mt-10">
//             <ServiceList
//               onBook={handleBookService}
//             />
//           </div>
//         )}

//         {/* =====================================
//             USER LEADS
//             ONLY LOGGED-IN USER
//         ===================================== */}

//         {userLoggedIn && !providerLoggedIn && (
//           <div className="mt-10">
//             <MyLeads />
//           </div>
//         )}

//         {/* =====================================
//             PROVIDER DASHBOARD
//             ONLY PROVIDER
//         ===================================== */}

//         {providerLoggedIn && (
//           <div className="mt-10 space-y-10">

//             {/* Available Leads */}

//             <AvailableLeadList />

//             {/* Lead History */}

//             <HistoryLeadList />

//           </div>
//         )}

//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import HeroSection from "@/components/home/HeroSection";
import ServiceList from "@/components/home/ServiceList";
import MyLeads from "@/components/home/MyLead";

import AvailableLeadList from "@/components/provider/AvailableLeadList";
import HistoryLeadList from "@/components/provider/HistoryLeadList";

import { useAuth } from "@/context/AuthContext";
import { useProviderAuth } from "@/context/ProviderAuthContext";
import { nearbyProviders } from "@/api/providerAuthApi";
import { createLead } from "@/api/leadApi";

const GoogleMap = dynamic(
  () => import("@/components/home/GoogleMap"),
  {
    ssr: false,
  }
);

export default function Home() {
  // ==============================
  // LOCATION
  // ==============================

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [providers, setProviders] = useState([]);

  // ==============================
  // AUTH
  // ==============================

  const { auth } = useAuth();
  const { providerAuth } = useProviderAuth();

  const userLoggedIn = auth.isAuthenticated;
  const providerLoggedIn = providerAuth.isAuthenticated;

  // ==============================
  // GET LOCATION
  // Provider ko location/map nahi chahiye
  // isliye provider ke liye geolocation bhi nahi lenge
  // ==============================

  useEffect(() => {
    if (providerLoggedIn) {
      return;
    }

    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Location Error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, [providerLoggedIn]);

  // ==============================
  // GET NEARBY PROVIDERS
  // Sirf Guest/User ke liye
  // ==============================

  useEffect(() => {
    if (providerLoggedIn) {
      return;
    }

    if (
      location.latitude === null ||
      location.longitude === null
    ) {
      return;
    }

    const fetchNearbyProviders = async () => {
      try {
        const response = await nearbyProviders(
          location.latitude,
          location.longitude
        );

        console.log(
          "NEARBY PROVIDERS:",
          response.data
        );

        const nearbyData = response.data?.data;

        setProviders(
          Array.isArray(nearbyData)
            ? nearbyData
            : []
        );
      } catch (error) {
        console.error(
          "NEARBY PROVIDERS ERROR:",
          error.response?.data || error
        );

        setProviders([]);
      }
    };

    fetchNearbyProviders();
  }, [
    location.latitude,
    location.longitude,
    providerLoggedIn,
  ]);

  // ==============================
  // BOOK SERVICE
  // ==============================

  const handleBookService = async (service) => {
    try {
      if (!userLoggedIn) {
        alert("Please login to book this service.");
        return;
      }

      if (!service?.id) {
        alert("Invalid service.");
        return;
      }

      if (
        location.latitude === null ||
        location.longitude === null
      ) {
        alert("Please allow your location first.");
        return;
      }

      const payload = {
        service: service.id,

        description: `I need ${service.name} service.`,

        address: "",

        latitude: Number(location.latitude).toFixed(6),

        longitude: Number(location.longitude).toFixed(6),
      };

      console.log(
        "CREATE LEAD PAYLOAD:",
        payload
      );

      const response = await createLead(payload);

      console.log(
        "LEAD CREATED:",
        response.data
      );

      alert(
        `${service.name} service request created successfully.`
      );
    } catch (error) {
      console.error(
        "CREATE LEAD ERROR:",
        error
      );

      console.error(
        "SERVER RESPONSE:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
          "Failed to create service request."
      );
    }
  };

  // ==============================
  // PROVIDER HOME
  // ==============================

  if (providerLoggedIn) {
    return (
      <main className="min-h-screen bg-[var(--color-background)]">
        <HeroSection />

        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="space-y-10">

            {/* Available Leads */}
            <AvailableLeadList />

            {/* Lead History */}
            <HistoryLeadList />

          </div>
        </div>
      </main>
    );
  }

  // ==============================
  // USER / GUEST HOME
  // ==============================

  return (
    <main className="min-h-screen bg-[var(--color-background)]">

      <HeroSection />

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* ============================
            MAP
            Sirf Guest/User
        ============================ */}

        <div className="relative z-0 mt-8">
          <GoogleMap
            key={`${location.latitude}-${location.longitude}`}
            currentLocation={location}
            providers={providers}
          />
        </div>

        {/* ============================
            SERVICES
        ============================ */}

        <div className="mt-10">
          <ServiceList
            onBook={handleBookService}
          />
        </div>

        {/* ============================
            USER LEADS
        ============================ */}

        {userLoggedIn && (
          <div className="mt-10">
            <MyLeads />
          </div>
        )}

      </div>
    </main>
  );
}