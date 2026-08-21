

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { userRegister } from "@/api/userAuthApi";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import AppButton from "@/components/common/AppButton";

// const inputStyle = {
//   borderColor: "var(--color-border)",
//   borderRadius: "var(--radius-md)",
//   background: "var(--color-surface)",
//   transitionDuration: "var(--duration-fast, 150ms)",
// };

// export default function UserRegisterForm() {
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   // UI-only state — just controls the password fields' visibility, doesn't touch submit logic
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const onSubmit = async (data) => {
//     console.log("Form Submitted");
//     console.log(data);

//     try {

//       const response = await userRegister(data);
//       console.log("Request Data:", data);
//       console.log("Response:", response.data);

//       console.log("Register Success:", response.data);

//       reset();

//       router.push("/user/login");


//     } catch (error) {

//       console.log(
//         "Register Error:",
//         error.response?.data || error.message
//       );

//     }

//   };

//   return (
//     <Card
//       className="w-full max-w-md overflow-hidden border p-0"
//       style={{
//         borderColor: "var(--color-border)",
//         borderRadius: "var(--radius-2xl)",
//         background: "var(--color-surface-elevated)",
//         boxShadow: "var(--shadow-xl)",
//       }}
//     >
//       {/* Beacon accent bar */}
//       <div
//         style={{
//           height: "3px",
//           background:
//             "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
//         }}
//       />

//       <div className="p-8">
//         <CardHeader className="p-0 text-center mb-6">
//           <div
//             className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
//             style={{
//               background: "var(--lead-live-bg, var(--amber-50))",
//               color: "var(--amber-700, #9C5E19)",
//               letterSpacing: "0.04em",
//             }}
//           >
//             <span
//               className="inline-block rounded-full"
//               style={{
//                 width: 6,
//                 height: 6,
//                 background: "var(--color-primary)",
//                 animation: "beacon-pulse 2s ease-in-out infinite",
//               }}
//             />
//             LEAD MARKETPLACE
//           </div>

//           <CardTitle
//             style={{
//               fontSize: "1.5rem",
//               fontWeight: "var(--font-weight-bold, 700)",
//               letterSpacing: "var(--letter-spacing-tight, -0.02em)",
//               color: "var(--color-foreground)",
//             }}
//           >
//             Create account
//           </CardTitle>

//           <CardDescription
//             className="mt-1"
//             style={{ color: "var(--color-foreground-muted)" }}
//           >
//             Join Lead Marketplace today.
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="p-0">
//           <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

//             <div className="space-y-2">
//               <Label htmlFor="full_name" style={{ color: "var(--color-foreground-secondary)" }}>
//                 Full Name
//               </Label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--color-foreground-muted)" }}>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                     <circle cx="12" cy="8" r="4" />
//                     <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
//                   </svg>
//                 </span>
//                 <Input
//                   id="full_name"
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="pl-9 transition-colors"
//                   style={inputStyle}
//                   {...register("full_name")}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="phone" style={{ color: "var(--color-foreground-secondary)" }}>
//                 Phone Number
//               </Label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--color-foreground-muted)" }}>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                     <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2Z" />
//                   </svg>
//                 </span>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   className="pl-9 transition-colors"
//                   style={inputStyle}
//                   {...register("phone")}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email" style={{ color: "var(--color-foreground-secondary)" }}>
//                 Email Address
//               </Label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--color-foreground-muted)" }}>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                     <rect x="2" y="5" width="20" height="14" rx="2" />
//                     <path d="m2 7 10 6 10-6" />
//                   </svg>
//                 </span>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="pl-9 transition-colors"
//                   style={inputStyle}
//                   {...register("email")}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password" style={{ color: "var(--color-foreground-secondary)" }}>
//                 Password
//               </Label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--color-foreground-muted)" }}>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                     <rect x="4" y="10" width="16" height="10" rx="2" />
//                     <path d="M8 10V7a4 4 0 0 1 8 0v3" />
//                   </svg>
//                 </span>
//                 <Input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   className="pl-9 pr-10 transition-colors"
//                   style={inputStyle}
//                   {...register("password")}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((v) => !v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2"
//                   style={{ color: "var(--color-foreground-muted)" }}
//                   tabIndex={-1}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                 >
//                   {showPassword ? (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                       <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
//                       <circle cx="12" cy="12" r="3" />
//                     </svg>
//                   ) : (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                       <path d="M3 3l18 18" />
//                       <path d="M10.6 10.6a3 3 0 0 0 4.2 4.2" />
//                       <path d="M6.7 6.7C4.5 8.1 3 12 3 12s3.5 7 10 7c1.9 0 3.5-.5 4.8-1.2" />
//                       <path d="M17.5 17.5C19.7 16 21 12 21 12s-.9-1.8-2.5-3.4" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="confirm_password" style={{ color: "var(--color-foreground-secondary)" }}>
//                 Confirm Password
//               </Label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--color-foreground-muted)" }}>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                     <rect x="4" y="10" width="16" height="10" rx="2" />
//                     <path d="M8 10V7a4 4 0 0 1 8 0v3" />
//                   </svg>
//                 </span>
//                 <Input
//                   id="confirm_password"
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm your password"
//                   className="pl-9 pr-10 transition-colors"
//                   style={inputStyle}
//                   {...register("confirm_password")}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword((v) => !v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2"
//                   style={{ color: "var(--color-foreground-muted)" }}
//                   tabIndex={-1}
//                   aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                 >
//                   {showConfirmPassword ? (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                       <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
//                       <circle cx="12" cy="12" r="3" />
//                     </svg>
//                   ) : (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                       <path d="M3 3l18 18" />
//                       <path d="M10.6 10.6a3 3 0 0 0 4.2 4.2" />
//                       <path d="M6.7 6.7C4.5 8.1 3 12 3 12s3.5 7 10 7c1.9 0 3.5-.5 4.8-1.2" />
//                       <path d="M17.5 17.5C19.7 16 21 12 21 12s-.9-1.8-2.5-3.4" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             <AppButton
//               className="w-full transition-all"
//               type="submit"
//               style={{
//                 background: "var(--color-primary)",
//                 color: "var(--color-primary-foreground)",
//                 borderRadius: "var(--radius-md)",
//                 boxShadow: "var(--shadow-sm)",
//                 transitionDuration: "var(--duration-fast, 150ms)",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.background = "var(--primary-hover)")}
//               onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-primary)")}
//             >
//               Register
//             </AppButton>

//             <div className="text-center text-sm">
//               <span style={{ color: "var(--color-foreground-muted)" }}>
//                 Already have an account?{" "}
//               </span>

//               <Link
//                 href="/user/login"
//                 className="font-medium hover:underline"
//                 style={{ color: "var(--color-primary)" }}
//               >
//                 Go to Login
//               </Link>
//             </div>

//           </form>
//         </CardContent>
//       </div>

//       <style>{`
//         @keyframes beacon-pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(219, 139, 43, 0.45); }
//           50% { box-shadow: 0 0 0 5px rgba(219, 139, 43, 0); }
//         }
//       `}</style>
//     </Card>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useForm } from "react-hook-form";

// import {
//   userRegister,
//   userOnboarding,
// } from "@/api/userAuthApi";

// import { useAuth } from "@/context/AuthContext";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import AppButton from "@/components/common/AppButton";

// const inputStyle = {
//   borderColor: "var(--color-border)",
//   borderRadius: "var(--radius-md)",
//   background: "var(--color-surface)",
//   transitionDuration: "var(--duration-fast, 150ms)",
// };

// export default function UserRegisterForm() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { user, login } = useAuth();

//   const isCompleteMode =
//     searchParams.get("mode") === "complete";

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   const [locationLoading, setLocationLoading] =
//     useState(false);

//   const [locationError, setLocationError] =
//     useState("");

//   const [submitLoading, setSubmitLoading] =
//     useState(false);

//   // ============================================================
//   // GOOGLE USER DATA
//   // ============================================================

//   useEffect(() => {
//     if (!isCompleteMode || !user) {
//       return;
//     }

//     if (user.full_name) {
//       setValue(
//         "full_name",
//         user.full_name
//       );
//     }

//     if (user.email) {
//       setValue(
//         "email",
//         user.email
//       );
//     }
//   }, [
//     isCompleteMode,
//     user,
//     setValue,
//   ]);

//   // ============================================================
//   // CURRENT LOCATION + OPENSTREETMAP
//   // ============================================================

//   const getCurrentLocation = () => {
//     setLocationError("");

//     if (!navigator.geolocation) {
//       setLocationError(
//         "Geolocation is not supported by your browser."
//       );
//       return;
//     }

//     setLocationLoading(true);

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const latitude =
//           position.coords.latitude;

//         const longitude =
//           position.coords.longitude;

//         try {
//           // Save coordinates
//           setValue(
//             "latitude",
//             latitude
//           );

//           setValue(
//             "longitude",
//             longitude
//           );

//           // ====================================================
//           // OPENSTREETMAP REVERSE GEOCODING
//           // ====================================================

//           const response = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
//             {
//               headers: {
//                 Accept:
//                   "application/json",
//               },
//             }
//           );

//           if (!response.ok) {
//             throw new Error(
//               "Unable to fetch address."
//             );
//           }

//           const data =
//             await response.json();

//           const address =
//             data.display_name || "";

//           setValue(
//             "address",
//             address
//           );

//         } catch (error) {
//           console.error(
//             "Reverse geocoding error:",
//             error
//           );

//           setLocationError(
//             "Location found, but address could not be detected. You can enter the address manually."
//           );
//         } finally {
//           setLocationLoading(false);
//         }
//       },

//       (error) => {
//         console.error(
//           "Geolocation error:",
//           error
//         );

//         setLocationLoading(false);

//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             setLocationError(
//               "Location permission was denied. Please allow location access."
//             );
//             break;

//           case error.POSITION_UNAVAILABLE:
//             setLocationError(
//               "Your current location is unavailable."
//             );
//             break;

//           case error.TIMEOUT:
//             setLocationError(
//               "Location request timed out. Please try again."
//             );
//             break;

//           default:
//             setLocationError(
//               "Unable to detect your location."
//             );
//         }
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 0,
//       }
//     );
//   };

//   // ============================================================
//   // SUBMIT
//   // ============================================================

//   const onSubmit = async (data) => {
//     console.log(
//       "Form Submitted:",
//       data
//     );

//     setSubmitLoading(true);

//     try {
//       // ========================================================
//       // GOOGLE ONBOARDING
//       // ========================================================

//       if (isCompleteMode) {
//         const onboardingData = {
//           phone: data.phone,
//           address: data.address || "",
//           latitude:
//             data.latitude || null,
//           longitude:
//             data.longitude || null,
//         };

//         console.log(
//           "Onboarding Data:",
//           onboardingData
//         );

//         const response =
//           await userOnboarding(
//             onboardingData
//           );

//         console.log(
//           "Onboarding Success:",
//           response.data
//         );

//         // Update AuthContext user with
//         // latest profile returned by backend.
//         if (
//           response.data?.user &&
//           user
//         ) {
//           login({
//             accessToken:
//               localStorage.getItem(
//                 "access_token"
//               ),
//             refreshToken:
//               localStorage.getItem(
//                 "refresh_token"
//               ),
//             role: "user",
//             user: response.data.user,
//           });
//         }

//         router.push("/");
//         return;
//       }

//       // ========================================================
//       // NORMAL REGISTRATION
//       // ========================================================

//     //   const response =
//     //     await userRegister(data);

//     //   console.log(
//     //     "Register Success:",
//     //     response.data
//     //   );

//     //   reset();

//     //   router.push(
//     //     "/user/login"
//     //   );

//     // } catch (error) {
//     //   console.error(
//     //     isCompleteMode
//     //       ? "Onboarding Error:"
//     //       : "Register Error:",
//     //     error.response?.data ||
//     //       error.message
//     //   );

//     const { confirm_password, ...registerData } = data;

// if (data.password !== data.confirm_password) {
//   console.error("Passwords do not match.");
//   return;
// }

// const response = await userRegister(registerData);
//     } finally {
//       setSubmitLoading(false);
//     }
//   };

//   // ============================================================
//   // UI
//   // ============================================================

//   return (
//     <Card
//       className="w-full max-w-md overflow-hidden border p-0"
//       style={{
//         borderColor:
//           "var(--color-border)",
//         borderRadius:
//           "var(--radius-2xl)",
//         background:
//           "var(--color-surface-elevated)",
//         boxShadow:
//           "var(--shadow-xl)",
//       }}
//     >
//       {/* Beacon accent bar */}
//       <div
//         style={{
//           height: "3px",
//           background:
//             "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
//         }}
//       />

//       <div className="p-8">
//         <CardHeader className="mb-6 p-0 text-center">
//           <div
//             className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
//             style={{
//               background:
//                 "var(--lead-live-bg, var(--amber-50))",
//               color:
//                 "var(--amber-700, #9C5E19)",
//               letterSpacing: "0.04em",
//             }}
//           >
//             <span
//               className="inline-block rounded-full"
//               style={{
//                 width: 6,
//                 height: 6,
//                 background:
//                   "var(--color-primary)",
//                 animation:
//                   "beacon-pulse 2s ease-in-out infinite",
//               }}
//             />

//             LEAD MARKETPLACE
//           </div>

//           <CardTitle
//             style={{
//               fontSize: "1.5rem",
//               fontWeight:
//                 "var(--font-weight-bold, 700)",
//               letterSpacing:
//                 "var(--letter-spacing-tight, -0.02em)",
//               color:
//                 "var(--color-foreground)",
//             }}
//           >
//             {isCompleteMode
//               ? "Complete your profile"
//               : "Create account"}
//           </CardTitle>

//           <CardDescription
//             className="mt-1"
//             style={{
//               color:
//                 "var(--color-foreground-muted)",
//             }}
//           >
//             {isCompleteMode
//               ? "Add your phone number and location to continue."
//               : "Join Lead Marketplace today."}
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="p-0">
//           <form
//             className="space-y-5"
//             onSubmit={handleSubmit(
//               onSubmit
//             )}
//           >
//             {/* ==================================================
//                 FULL NAME
//             ================================================== */}

//             <div className="space-y-2">
//               <Label
//                 htmlFor="full_name"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Full Name
//               </Label>

//               <Input
//                 id="full_name"
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="transition-colors"
//                 style={inputStyle}
//                 readOnly={isCompleteMode}
//                 {...register(
//                   "full_name",
//                   {
//                     required:
//                       !isCompleteMode
//                         ? "Full name is required"
//                         : false,
//                   }
//                 )}
//               />

//               {errors.full_name && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.full_name
//                       .message
//                   }
//                 </p>
//               )}
//             </div>

//             {/* ==================================================
//                 PHONE
//             ================================================== */}

//             <div className="space-y-2">
//               <Label
//                 htmlFor="phone"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Phone Number
//               </Label>

//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="transition-colors"
//                 style={inputStyle}
//                 {...register(
//                   "phone",
//                   {
//                     required:
//                       "Phone number is required",
//                   }
//                 )}
//               />

//               {errors.phone && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.phone.message
//                   }
//                 </p>
//               )}
//             </div>

//             {/* ==================================================
//                 EMAIL
//             ================================================== */}

//             <div className="space-y-2">
//               <Label
//                 htmlFor="email"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Email Address
//               </Label>

//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="transition-colors"
//                 style={inputStyle}
//                 readOnly={isCompleteMode}
//                 {...register(
//                   "email",
//                   {
//                     required:
//                       !isCompleteMode
//                         ? "Email is required"
//                         : false,
//                   }
//                 )}
//               />

//               {errors.email && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.email.message
//                   }
//                 </p>
//               )}
//             </div>

//             {/* ==================================================
//                 PASSWORD
//                 NORMAL REGISTRATION ONLY
//             ================================================== */}

//             {!isCompleteMode && (
//               <>
//                 <div className="space-y-2">
//                   <Label
//                     htmlFor="password"
//                     style={{
//                       color:
//                         "var(--color-foreground-secondary)",
//                     }}
//                   >
//                     Password
//                   </Label>

//                   <div className="relative">
//                     <Input
//                       id="password"
//                       type={
//                         showPassword
//                           ? "text"
//                           : "password"
//                       }
//                       placeholder="Enter your password"
//                       className="pr-10 transition-colors"
//                       style={inputStyle}
//                       {...register(
//                         "password",
//                         {
//                           required:
//                             "Password is required",
//                         }
//                       )}
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword(
//                           (value) =>
//                             !value
//                         )
//                       }
//                       className="absolute right-3 top-1/2 -translate-y-1/2"
//                       style={{
//                         color:
//                           "var(--color-foreground-muted)",
//                       }}
//                     >
//                       {showPassword
//                         ? "Hide"
//                         : "Show"}
//                     </button>
//                   </div>

//                   {errors.password && (
//                     <p className="text-sm text-red-500">
//                       {
//                         errors.password
//                           .message
//                       }
//                     </p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label
//                     htmlFor="confirm_password"
//                     style={{
//                       color:
//                         "var(--color-foreground-secondary)",
//                     }}
//                   >
//                     Confirm Password
//                   </Label>

//                   <div className="relative">
//                     <Input
//                       id="confirm_password"
//                       type={
//                         showConfirmPassword
//                           ? "text"
//                           : "password"
//                       }
//                       placeholder="Confirm your password"
//                       className="pr-10 transition-colors"
//                       style={inputStyle}
//                       {...register(
//                         "confirm_password",
//                         {
//                           required:
//                             "Please confirm your password",
//                         }
//                       )}
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(
//                           (value) =>
//                             !value
//                         )
//                       }
//                       className="absolute right-3 top-1/2 -translate-y-1/2"
//                       style={{
//                         color:
//                           "var(--color-foreground-muted)",
//                       }}
//                     >
//                       {showConfirmPassword
//                         ? "Hide"
//                         : "Show"}
//                     </button>
//                   </div>

//                   {errors.confirm_password && (
//                     <p className="text-sm text-red-500">
//                       {
//                         errors
//                           .confirm_password
//                           .message
//                       }
//                     </p>
//                   )}
//                 </div>
//               </>
//             )}

//             {/* ==================================================
//                 ADDRESS
//             ================================================== */}

//             <div className="space-y-2">
//               <Label
//                 htmlFor="address"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Address
//               </Label>

//               <textarea
//                 id="address"
//                 placeholder="Enter your address"
//                 rows={3}
//                 className="w-full resize-none px-3 py-2 text-sm outline-none"
//                 style={inputStyle}
//                 {...register("address")}
//               />
//             </div>

//             {/* ==================================================
//                 LOCATION BUTTON
//             ================================================== */}

//             <div className="space-y-2">
//               <AppButton
//                 type="button"
//                 className="w-full"
//                 onClick={
//                   getCurrentLocation
//                 }
//                 disabled={
//                   locationLoading
//                 }
//                 style={{
//                   borderRadius:
//                     "var(--radius-md)",
//                 }}
//               >
//                 {locationLoading
//                   ? "Detecting location..."
//                   : "Use Current Location"}
//               </AppButton>

//               {locationError && (
//                 <p className="text-sm text-red-500">
//                   {locationError}
//                 </p>
//               )}
//             </div>

//             {/* ==================================================
//                 HIDDEN COORDINATES
//             ================================================== */}

//             <input
//               type="hidden"
//               {...register(
//                 "latitude"
//               )}
//             />

//             <input
//               type="hidden"
//               {...register(
//                 "longitude"
//               )}
//             />

//             {/* ==================================================
//                 SUBMIT
//             ================================================== */}

//             <AppButton
//               className="w-full transition-all"
//               type="submit"
//               disabled={
//                 submitLoading
//               }
//               style={{
//                 background:
//                   "var(--color-primary)",
//                 color:
//                   "var(--color-primary-foreground)",
//                 borderRadius:
//                   "var(--radius-md)",
//                 boxShadow:
//                   "var(--shadow-sm)",
//                 transitionDuration:
//                   "var(--duration-fast, 150ms)",
//               }}
//             >
//               {submitLoading
//                 ? isCompleteMode
//                   ? "Saving..."
//                   : "Creating account..."
//                 : isCompleteMode
//                   ? "Complete Profile"
//                   : "Register"}
//             </AppButton>

//             {/* ==================================================
//                 LOGIN LINK
//             ================================================== */}

//             {!isCompleteMode && (
//               <div className="text-center text-sm">
//                 <span
//                   style={{
//                     color:
//                       "var(--color-foreground-muted)",
//                   }}
//                 >
//                   Already have an
//                   account?{" "}
//                 </span>

//                 <Link
//                   href="/user/login"
//                   className="font-medium hover:underline"
//                   style={{
//                     color:
//                       "var(--color-primary)",
//                   }}
//                 >
//                   Go to Login
//                 </Link>
//               </div>
//             )}
//           </form>
//         </CardContent>
//       </div>

//       <style>{`
//         @keyframes beacon-pulse {
//           0%, 100% {
//             box-shadow: 0 0 0 0 rgba(219, 139, 43, 0.45);
//           }

//           50% {
//             box-shadow: 0 0 0 5px rgba(219, 139, 43, 0);
//           }
//         }
//       `}</style>
//     </Card>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useForm } from "react-hook-form";

// import {
//   userRegister,
//   userOnboarding,
// } from "@/api/userAuthApi";

// import { useAuth } from "@/context/AuthContext";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import AppButton from "@/components/common/AppButton";

// const inputStyle = {
//   borderColor: "var(--color-border)",
//   borderRadius: "var(--radius-md)",
//   background: "var(--color-surface)",
//   transitionDuration: "var(--duration-fast, 150ms)",
// };

// export default function UserRegisterForm() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // ============================================================
//   // AUTH CONTEXT
//   // ============================================================

//   const { auth, setAuth } = useAuth();

//   const user = auth.user;

//   // ============================================================
//   // GOOGLE ONBOARDING MODE
//   // ============================================================

//   const isCompleteMode =
//     searchParams.get("mode") === "complete";

//   // ============================================================
//   // REACT HOOK FORM
//   // ============================================================

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   // ============================================================
//   // STATES
//   // ============================================================

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   const [locationLoading, setLocationLoading] =
//     useState(false);

//   const [locationError, setLocationError] =
//     useState("");

//   const [submitLoading, setSubmitLoading] =
//     useState(false);

//   const [submitError, setSubmitError] =
//     useState("");

//   // ============================================================
//   // GOOGLE USER DATA
//   // ============================================================

//   useEffect(() => {
//     if (!isCompleteMode || !user) {
//       return;
//     }

//     // Google se already full name mila hua hai
//     if (user.full_name) {
//       setValue(
//         "full_name",
//         user.full_name
//       );
//     }

//     // Google se already email mila hua hai
//     if (user.email) {
//       setValue(
//         "email",
//         user.email
//       );
//     }
//   }, [
//     isCompleteMode,
//     user,
//     setValue,
//   ]);

//   // ============================================================
//   // CURRENT LOCATION + OPENSTREETMAP
//   // ============================================================

//   const getCurrentLocation = () => {
//     setLocationError("");

//     if (!navigator.geolocation) {
//       setLocationError(
//         "Geolocation is not supported by your browser."
//       );

//       return;
//     }

//     setLocationLoading(true);

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const latitude =
//           position.coords.latitude;

//         const longitude =
//           position.coords.longitude;

//         try {
//           // ======================================================
//           // SAVE LATITUDE
//           // ======================================================

//           setValue(
//             "latitude",
//             latitude
//           );

//           // ======================================================
//           // SAVE LONGITUDE
//           // ======================================================

//           setValue(
//             "longitude",
//             longitude
//           );

//           // ======================================================
//           // OPENSTREETMAP REVERSE GEOCODING
//           // ======================================================

//           const response = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
//             {
//               headers: {
//                 Accept:
//                   "application/json",
//               },
//             }
//           );

//           if (!response.ok) {
//             throw new Error(
//               "Unable to fetch address."
//             );
//           }

//           const data =
//             await response.json();

//           const address =
//             data.display_name || "";

//           // ======================================================
//           // SET ADDRESS
//           // ======================================================

//           setValue(
//             "address",
//             address
//           );

//           console.log(
//             "Detected Location:",
//             {
//               latitude,
//               longitude,
//               address,
//             }
//           );

//         } catch (error) {
//           console.error(
//             "Reverse geocoding error:",
//             error
//           );

//           setLocationError(
//             "Location found, but address could not be detected. You can enter the address manually."
//           );
//         } finally {
//           setLocationLoading(false);
//         }
//       },

//       // ========================================================
//       // GEOLOCATION ERROR
//       // ========================================================

//       (error) => {
//         console.error(
//           "Geolocation error:",
//           error
//         );

//         setLocationLoading(false);

//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             setLocationError(
//               "Location permission was denied. Please allow location access."
//             );
//             break;

//           case error.POSITION_UNAVAILABLE:
//             setLocationError(
//               "Your current location is unavailable."
//             );
//             break;

//           case error.TIMEOUT:
//             setLocationError(
//               "Location request timed out. Please try again."
//             );
//             break;

//           default:
//             setLocationError(
//               "Unable to detect your location."
//             );
//         }
//       },

//       {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 0,
//       }
//     );
//   };

//   // ============================================================
//   // SUBMIT
//   // ============================================================

//   const onSubmit = async (data) => {
//     console.log(
//       "Form Submitted:",
//       data
//     );

//     setSubmitError("");
//     setSubmitLoading(true);

//     try {
//       // ========================================================
//       // GOOGLE ONBOARDING
//       // ========================================================

//       if (isCompleteMode) {
//         const onboardingData = {
//           phone: data.phone,
//           address: data.address || "",
//           latitude:
//             data.latitude || null,
//           longitude:
//             data.longitude || null,
//         };

//         console.log(
//           "Onboarding Data:",
//           onboardingData
//         );

//         // ======================================================
//         // CALL EXISTING ONBOARDING API
//         // PATCH /User/onboarding/
//         // ======================================================

//         const response =
//           await userOnboarding(
//             onboardingData
//           );

//         console.log(
//           "Onboarding Success:",
//           response.data
//         );

//         // ======================================================
//         // UPDATE AUTH CONTEXT
//         // ======================================================

//         if (response.data?.user) {
//           setAuth((prev) => ({
//             ...prev,
//             user: response.data.user,
//           }));
//         }

//         // ======================================================
//         // GO HOME
//         // ======================================================

//         router.push("/");

//         return;
//       }

//       // ========================================================
//       // NORMAL REGISTRATION
//       // ========================================================

//       const {
//         confirm_password,
//         ...registerData
//       } = data;

//       // ========================================================
//       // PASSWORD MATCH CHECK
//       // ========================================================

//       if (
//         data.password !==
//         confirm_password
//       ) {
//         setSubmitError(
//           "Passwords do not match."
//         );

//         return;
//       }

//       console.log(
//         "Normal Register Data:",
//         registerData
//       );

//       // ========================================================
//       // CALL NORMAL REGISTER API
//       // ========================================================

//       const response =
//         await userRegister(
//           registerData
//         );

//       console.log(
//         "Register Success:",
//         response.data
//       );

//       // ========================================================
//       // RESET FORM
//       // ========================================================

//       reset();

//       // ========================================================
//       // REDIRECT LOGIN
//       // ========================================================

//       router.push(
//         "/user/login"
//       );

//     } catch (error) {
//       console.error(
//         isCompleteMode
//           ? "Onboarding Error:"
//           : "Register Error:",
//         error.response?.data ||
//           error.message
//       );

//       // ========================================================
//       // ERROR MESSAGE
//       // ========================================================

//       if (
//         error.response?.data
//       ) {
//         const backendError =
//           error.response.data;

//         if (
//           typeof backendError ===
//           "string"
//         ) {
//           setSubmitError(
//             backendError
//           );
//         } else if (
//           backendError.error
//         ) {
//           setSubmitError(
//             backendError.error
//           );
//         } else if (
//           backendError.detail
//         ) {
//           setSubmitError(
//             backendError.detail
//           );
//         } else {
//           setSubmitError(
//             "Something went wrong. Please check your information."
//           );
//         }
//       } else {
//         setSubmitError(
//           "Something went wrong. Please try again."
//         );
//       }

//     } finally {
//       setSubmitLoading(false);
//     }
//   };

//   // ============================================================
//   // UI
//   // ============================================================

//   return (
//     <Card
//       className="w-full max-w-md overflow-hidden border p-0"
//       style={{
//         borderColor:
//           "var(--color-border)",
//         borderRadius:
//           "var(--radius-2xl)",
//         background:
//           "var(--color-surface-elevated)",
//         boxShadow:
//           "var(--shadow-xl)",
//       }}
//     >
//       {/* ======================================================
//           BEACON ACCENT BAR
//       ======================================================= */}

//       <div
//         style={{
//           height: "3px",
//           background:
//             "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
//         }}
//       />

//       <div className="p-8">

//         {/* ====================================================
//             HEADER
//         ===================================================== */}

//         <CardHeader className="mb-6 p-0 text-center">

//           <div
//             className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
//             style={{
//               background:
//                 "var(--lead-live-bg, var(--amber-50))",
//               color:
//                 "var(--amber-700, #9C5E19)",
//               letterSpacing: "0.04em",
//             }}
//           >
//             <span
//               className="inline-block rounded-full"
//               style={{
//                 width: 6,
//                 height: 6,
//                 background:
//                   "var(--color-primary)",
//                 animation:
//                   "beacon-pulse 2s ease-in-out infinite",
//               }}
//             />

//             LEAD MARKETPLACE
//           </div>

//           <CardTitle
//             style={{
//               fontSize: "1.5rem",
//               fontWeight:
//                 "var(--font-weight-bold, 700)",
//               letterSpacing:
//                 "var(--letter-spacing-tight, -0.02em)",
//               color:
//                 "var(--color-foreground)",
//             }}
//           >
//             {isCompleteMode
//               ? "Complete your profile"
//               : "Create account"}
//           </CardTitle>

//           <CardDescription
//             className="mt-1"
//             style={{
//               color:
//                 "var(--color-foreground-muted)",
//             }}
//           >
//             {isCompleteMode
//               ? "Add your phone number and location to continue."
//               : "Join Lead Marketplace today."}
//           </CardDescription>

//         </CardHeader>

//         {/* ====================================================
//             FORM
//         ===================================================== */}

//         <CardContent className="p-0">

//           <form
//             className="space-y-5"
//             onSubmit={handleSubmit(
//               onSubmit
//             )}
//           >

//             {/* ==================================================
//                 FULL NAME
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="full_name"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Full Name
//               </Label>

//               <Input
//                 id="full_name"
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="transition-colors"
//                 style={inputStyle}
//                 readOnly={
//                   isCompleteMode
//                 }
//                 {...register(
//                   "full_name",
//                   {
//                     required:
//                       !isCompleteMode
//                         ? "Full name is required"
//                         : false,
//                   }
//                 )}
//               />

//               {errors.full_name && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.full_name
//                       .message
//                   }
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 PHONE
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="phone"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Phone Number
//               </Label>

//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="transition-colors"
//                 style={inputStyle}
//                 {...register(
//                   "phone",
//                   {
//                     required:
//                       "Phone number is required",
//                   }
//                 )}
//               />

//               {errors.phone && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.phone.message
//                   }
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 EMAIL
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="email"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Email Address
//               </Label>

//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="transition-colors"
//                 style={inputStyle}
//                 readOnly={
//                   isCompleteMode
//                 }
//                 {...register(
//                   "email",
//                   {
//                     required:
//                       !isCompleteMode
//                         ? "Email is required"
//                         : false,
//                   }
//                 )}
//               />

//               {errors.email && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.email.message
//                   }
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 PASSWORD
//                 NORMAL REGISTRATION ONLY
//             ================================================== */}

//             {!isCompleteMode && (
//               <>

//                 {/* ==================================================
//                     PASSWORD
//                 ================================================== */}

//                 <div className="space-y-2">

//                   <Label
//                     htmlFor="password"
//                     style={{
//                       color:
//                         "var(--color-foreground-secondary)",
//                     }}
//                   >
//                     Password
//                   </Label>

//                   <div className="relative">

//                     <Input
//                       id="password"
//                       type={
//                         showPassword
//                           ? "text"
//                           : "password"
//                       }
//                       placeholder="Enter your password"
//                       className="pr-10 transition-colors"
//                       style={inputStyle}
//                       {...register(
//                         "password",
//                         {
//                           required:
//                             "Password is required",
//                         }
//                       )}
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword(
//                           (value) =>
//                             !value
//                         )
//                       }
//                       className="absolute right-3 top-1/2 -translate-y-1/2"
//                       style={{
//                         color:
//                           "var(--color-foreground-muted)",
//                       }}
//                     >
//                       {showPassword
//                         ? "Hide"
//                         : "Show"}
//                     </button>

//                   </div>

//                   {errors.password && (
//                     <p className="text-sm text-red-500">
//                       {
//                         errors.password
//                           .message
//                       }
//                     </p>
//                   )}

//                 </div>

//                 {/* ==================================================
//                     CONFIRM PASSWORD
//                 ================================================== */}

//                 <div className="space-y-2">

//                   <Label
//                     htmlFor="confirm_password"
//                     style={{
//                       color:
//                         "var(--color-foreground-secondary)",
//                     }}
//                   >
//                     Confirm Password
//                   </Label>

//                   <div className="relative">

//                     <Input
//                       id="confirm_password"
//                       type={
//                         showConfirmPassword
//                           ? "text"
//                           : "password"
//                       }
//                       placeholder="Confirm your password"
//                       className="pr-10 transition-colors"
//                       style={inputStyle}
//                       {...register(
//                         "confirm_password",
//                         {
//                           required:
//                             "Please confirm your password",
//                         }
//                       )}
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(
//                           (value) =>
//                             !value
//                         )
//                       }
//                       className="absolute right-3 top-1/2 -translate-y-1/2"
//                       style={{
//                         color:
//                           "var(--color-foreground-muted)",
//                       }}
//                     >
//                       {showConfirmPassword
//                         ? "Hide"
//                         : "Show"}
//                     </button>

//                   </div>

//                   {errors.confirm_password && (
//                     <p className="text-sm text-red-500">
//                       {
//                         errors
//                           .confirm_password
//                           .message
//                       }
//                     </p>
//                   )}

//                 </div>

//               </>
//             )}

//             {/* ==================================================
//                 ADDRESS
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="address"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Address
//               </Label>

//               <textarea
//                 id="address"
//                 placeholder="Enter your address"
//                 rows={3}
//                 className="w-full resize-none px-3 py-2 text-sm outline-none"
//                 style={inputStyle}
//                 {...register("address")}
//               />

//             </div>

//             {/* ==================================================
//                 LOCATION BUTTON
//             ================================================== */}

//             <div className="space-y-2">

//               <AppButton
//                 type="button"
//                 className="w-full"
//                 onClick={
//                   getCurrentLocation
//                 }
//                 disabled={
//                   locationLoading
//                 }
//                 style={{
//                   borderRadius:
//                     "var(--radius-md)",
//                 }}
//               >
//                 {locationLoading
//                   ? "Detecting location..."
//                   : "Use Current Location"}
//               </AppButton>

//               {locationError && (
//                 <p className="text-sm text-red-500">
//                   {locationError}
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 HIDDEN LATITUDE
//             ================================================== */}

//             <input
//               type="hidden"
//               {...register(
//                 "latitude"
//               )}
//             />

//             {/* ==================================================
//                 HIDDEN LONGITUDE
//             ================================================== */}

//             <input
//               type="hidden"
//               {...register(
//                 "longitude"
//               )}
//             />

//             {/* ==================================================
//                 SUBMIT ERROR
//             ================================================== */}

//             {submitError && (
//               <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
//                 {submitError}
//               </div>
//             )}

//             {/* ==================================================
//                 SUBMIT BUTTON
//             ================================================== */}

//             <AppButton
//               className="w-full transition-all"
//               type="submit"
//               disabled={
//                 submitLoading
//               }
//               style={{
//                 background:
//                   "var(--color-primary)",
//                 color:
//                   "var(--color-primary-foreground)",
//                 borderRadius:
//                   "var(--radius-md)",
//                 boxShadow:
//                   "var(--shadow-sm)",
//                 transitionDuration:
//                   "var(--duration-fast, 150ms)",
//               }}
//             >
//               {submitLoading
//                 ? isCompleteMode
//                   ? "Saving..."
//                   : "Creating account..."
//                 : isCompleteMode
//                   ? "Complete Profile"
//                   : "Register"}
//             </AppButton>

//             {/* ==================================================
//                 LOGIN LINK
//             ================================================== */}

//             {!isCompleteMode && (
//               <div className="text-center text-sm">

//                 <span
//                   style={{
//                     color:
//                       "var(--color-foreground-muted)",
//                   }}
//                 >
//                   Already have an account?{" "}
//                 </span>

//                 <Link
//                   href="/user/login"
//                   className="font-medium hover:underline"
//                   style={{
//                     color:
//                       "var(--color-primary)",
//                   }}
//                 >
//                   Go to Login
//                 </Link>

//               </div>
//             )}

//           </form>

//         </CardContent>
//       </div>

//       {/* ======================================================
//           ANIMATION
//       ======================================================= */}

//       <style>{`
//         @keyframes beacon-pulse {
//           0%, 100% {
//             box-shadow: 0 0 0 0 rgba(219, 139, 43, 0.45);
//           }

//           50% {
//             box-shadow: 0 0 0 5px rgba(219, 139, 43, 0);
//           }
//         }
//       `}</style>

//     </Card>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useForm } from "react-hook-form";

// import {
//   userRegister,
//   userOnboarding,
// } from "@/api/userAuthApi";

// import { useAuth } from "@/context/AuthContext";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import AppButton from "@/components/common/AppButton";

// const inputStyle = {
//   borderColor: "var(--color-border)",
//   borderRadius: "var(--radius-md)",
//   background: "var(--color-surface)",
//   transitionDuration: "var(--duration-fast, 150ms)",
// };

// export default function UserRegisterForm() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // ============================================================
//   // AUTH CONTEXT
//   // ============================================================

//   const { auth, setAuth } = useAuth();

//   const user = auth.user;

//   // ============================================================
//   // GOOGLE ONBOARDING MODE
//   // ============================================================

//   const isCompleteMode =
//     searchParams.get("mode") === "complete";

//   // ============================================================
//   // REACT HOOK FORM
//   // ============================================================

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   // ============================================================
//   // STATES
//   // ============================================================

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   const [locationLoading, setLocationLoading] =
//     useState(false);

//   const [locationError, setLocationError] =
//     useState("");

//   const [submitLoading, setSubmitLoading] =
//     useState(false);

//   const [submitError, setSubmitError] =
//     useState("");

//   // ============================================================
//   // GOOGLE USER DATA
//   // ============================================================

//   useEffect(() => {
//     if (!isCompleteMode || !user) {
//       return;
//     }

//     // Google se already full name mila hua hai
//     if (user.full_name) {
//       setValue(
//         "full_name",
//         user.full_name
//       );
//     }

//     // Google se already email mila hua hai
//     if (user.email) {
//       setValue(
//         "email",
//         user.email
//       );
//     }
//   }, [
//     isCompleteMode,
//     user,
//     setValue,
//   ]);

//   // ============================================================
//   // CURRENT LOCATION + OPENSTREETMAP
//   // ============================================================

//   const getCurrentLocation = () => {
//     setLocationError("");

//     if (!navigator.geolocation) {
//       setLocationError(
//         "Geolocation is not supported by your browser."
//       );

//       return;
//     }

//     setLocationLoading(true);

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const latitude =
//           position.coords.latitude;

//         const longitude =
//           position.coords.longitude;

//         try {
//           // ======================================================
//           // SAVE LATITUDE
//           // ======================================================

//           setValue(
//             "latitude",
//             latitude
//           );

//           // ======================================================
//           // SAVE LONGITUDE
//           // ======================================================

//           setValue(
//             "longitude",
//             longitude
//           );

//           // ======================================================
//           // OPENSTREETMAP REVERSE GEOCODING
//           // ======================================================

//           const response = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
//             {
//               headers: {
//                 Accept:
//                   "application/json",
//               },
//             }
//           );

//           if (!response.ok) {
//             throw new Error(
//               "Unable to fetch address."
//             );
//           }

//           const data =
//             await response.json();

//           const address =
//             data.display_name || "";

//           // ======================================================
//           // SET ADDRESS
//           // ======================================================

//           setValue(
//             "address",
//             address
//           );

//           console.log(
//             "Detected Location:",
//             {
//               latitude,
//               longitude,
//               address,
//             }
//           );

//         } catch (error) {
//           console.error(
//             "Reverse geocoding error:",
//             error
//           );

//           setLocationError(
//             "Location found, but address could not be detected. You can enter the address manually."
//           );
//         } finally {
//           setLocationLoading(false);
//         }
//       },

//       // ========================================================
//       // GEOLOCATION ERROR
//       // ========================================================

//       (error) => {
//         console.error(
//           "Geolocation error:",
//           error
//         );

//         setLocationLoading(false);

//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             setLocationError(
//               "Location permission was denied. Please allow location access."
//             );
//             break;

//           case error.POSITION_UNAVAILABLE:
//             setLocationError(
//               "Your current location is unavailable."
//             );
//             break;

//           case error.TIMEOUT:
//             setLocationError(
//               "Location request timed out. Please try again."
//             );
//             break;

//           default:
//             setLocationError(
//               "Unable to detect your location."
//             );
//         }
//       },

//       {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 0,
//       }
//     );
//   };

//   // ============================================================
//   // SUBMIT
//   // ============================================================

//   const onSubmit = async (data) => {
//     console.log(
//       "Form Submitted:",
//       data
//     );

//     setSubmitError("");
//     setSubmitLoading(true);

//     try {
//       // ========================================================
//       // GOOGLE ONBOARDING
//       // ========================================================

//       if (isCompleteMode) {
//         const onboardingData = {
//           phone: data.phone,
//           address: data.address || "",
//           latitude:
//             data.latitude || null,
//           longitude:
//             data.longitude || null,
//         };

//         console.log(
//           "Onboarding Data:",
//           onboardingData
//         );

//         // ======================================================
//         // CALL EXISTING ONBOARDING API
//         // PATCH /User/onboarding/
//         // ======================================================

//         const response =
//           await userOnboarding(
//             onboardingData
//           );

//         console.log(
//           "Onboarding Success:",
//           response.data
//         );

//         // ======================================================
//         // UPDATE AUTH CONTEXT
//         // ======================================================

//         if (response.data?.user) {
//           setAuth((prev) => ({
//             ...prev,
//             user: response.data.user,
//           }));
//         }

//         // ======================================================
//         // GO HOME
//         // ======================================================

//         router.push("/");

//         return;
//       }

//       // ========================================================
//       // NORMAL REGISTRATION
//       // ========================================================

//       const {
//         confirm_password,
//         ...registerData
//       } = data;

//       // ========================================================
//       // PASSWORD MATCH CHECK
//       // ========================================================

//       if (
//         data.password !==
//         confirm_password
//       ) {
//         setSubmitError(
//           "Passwords do not match."
//         );

//         return;
//       }

//       console.log(
//         "Normal Register Data:",
//         registerData
//       );

//       // ========================================================
//       // CALL NORMAL REGISTER API
//       // ========================================================

//       const response =
//         await userRegister(
//           registerData
//         );

//       console.log(
//         "Register Success:",
//         response.data
//       );

//       // ========================================================
//       // RESET FORM
//       // ========================================================

//       reset();

//       // ========================================================
//       // REDIRECT LOGIN
//       // ========================================================

//       router.push(
//         "/user/login"
//       );

//     } catch (error) {
//       console.error(
//         isCompleteMode
//           ? "Onboarding Error:"
//           : "Register Error:",
//         error.response?.data ||
//           error.message
//       );

//       // ========================================================
//       // ERROR MESSAGE
//       // ========================================================

//       if (
//         error.response?.data
//       ) {
//         const backendError =
//           error.response.data;

//         if (
//           typeof backendError ===
//           "string"
//         ) {
//           setSubmitError(
//             backendError
//           );
//         } else if (
//           backendError.error
//         ) {
//           setSubmitError(
//             backendError.error
//           );
//         } else if (
//           backendError.detail
//         ) {
//           setSubmitError(
//             backendError.detail
//           );
//         } else {
//           setSubmitError(
//             "Something went wrong. Please check your information."
//           );
//         }
//       } else {
//         setSubmitError(
//           "Something went wrong. Please try again."
//         );
//       }

//     } finally {
//       setSubmitLoading(false);
//     }
//   };

//   // ============================================================
//   // UI
//   // ============================================================

//   return (
//     <Card
//       className="w-full max-w-md overflow-hidden border p-0"
//       style={{
//         borderColor:
//           "var(--color-border)",
//         borderRadius:
//           "var(--radius-2xl)",
//         background:
//           "var(--color-surface-elevated)",
//         boxShadow:
//           "var(--shadow-xl)",
//       }}
//     >
//       {/* ======================================================
//           BEACON ACCENT BAR
//       ======================================================= */}

//       <div
//         style={{
//           height: "3px",
//           background:
//             "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
//         }}
//       />

//       <div className="p-8">

//         {/* ====================================================
//             HEADER
//         ===================================================== */}

//         <CardHeader className="mb-6 p-0 text-center">

//           <div
//             className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
//             style={{
//               background:
//                 "var(--lead-live-bg, var(--amber-50))",
//               color:
//                 "var(--amber-700, #9C5E19)",
//               letterSpacing: "0.04em",
//             }}
//           >
//             <span
//               className="inline-block rounded-full"
//               style={{
//                 width: 6,
//                 height: 6,
//                 background:
//                   "var(--color-primary)",
//                 animation:
//                   "beacon-pulse 2s ease-in-out infinite",
//               }}
//             />

//             LEAD MARKETPLACE
//           </div>

//           <CardTitle
//             style={{
//               fontSize: "1.5rem",
//               fontWeight:
//                 "var(--font-weight-bold, 700)",
//               letterSpacing:
//                 "var(--letter-spacing-tight, -0.02em)",
//               color:
//                 "var(--color-foreground)",
//             }}
//           >
//             {isCompleteMode
//               ? "Complete your profile"
//               : "Create account"}
//           </CardTitle>

//           <CardDescription
//             className="mt-1"
//             style={{
//               color:
//                 "var(--color-foreground-muted)",
//             }}
//           >
//             {isCompleteMode
//               ? "Add your phone number and location to continue."
//               : "Join Lead Marketplace today."}
//           </CardDescription>

//         </CardHeader>

//         {/* ====================================================
//             FORM
//         ===================================================== */}

//         <CardContent className="p-0">

//           <form
//             className="space-y-5"
//             onSubmit={handleSubmit(
//               onSubmit
//             )}
//           >

//             {/* ==================================================
//                 FULL NAME
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="full_name"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Full Name
//               </Label>

//               <Input
//                 id="full_name"
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="transition-colors"
//                 style={inputStyle}
//                 readOnly={
//                   isCompleteMode
//                 }
//                 {...register(
//                   "full_name",
//                   {
//                     required:
//                       !isCompleteMode
//                         ? "Full name is required"
//                         : false,
//                   }
//                 )}
//               />

//               {errors.full_name && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.full_name
//                       .message
//                   }
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 PHONE
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="phone"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Phone Number
//               </Label>

//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="transition-colors"
//                 style={inputStyle}
//                 {...register(
//                   "phone",
//                   {
//                     required:
//                       "Phone number is required",
//                   }
//                 )}
//               />

//               {errors.phone && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.phone.message
//                   }
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 EMAIL
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="email"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Email Address
//               </Label>

//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="transition-colors"
//                 style={inputStyle}
//                 readOnly={
//                   isCompleteMode
//                 }
//                 {...register(
//                   "email",
//                   {
//                     required:
//                       !isCompleteMode
//                         ? "Email is required"
//                         : false,
//                   }
//                 )}
//               />

//               {errors.email && (
//                 <p className="text-sm text-red-500">
//                   {
//                     errors.email.message
//                   }
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 PASSWORD
//                 NORMAL REGISTRATION ONLY
//             ================================================== */}

//             {!isCompleteMode && (
//               <>

//                 {/* ==================================================
//                     PASSWORD
//                 ================================================== */}

//                 <div className="space-y-2">

//                   <Label
//                     htmlFor="password"
//                     style={{
//                       color:
//                         "var(--color-foreground-secondary)",
//                     }}
//                   >
//                     Password
//                   </Label>

//                   <div className="relative">

//                     <Input
//                       id="password"
//                       type={
//                         showPassword
//                           ? "text"
//                           : "password"
//                       }
//                       placeholder="Enter your password"
//                       className="pr-10 transition-colors"
//                       style={inputStyle}
//                       {...register(
//                         "password",
//                         {
//                           required:
//                             "Password is required",
//                         }
//                       )}
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword(
//                           (value) =>
//                             !value
//                         )
//                       }
//                       className="absolute right-3 top-1/2 -translate-y-1/2"
//                       style={{
//                         color:
//                           "var(--color-foreground-muted)",
//                       }}
//                     >
//                       {showPassword
//                         ? "Hide"
//                         : "Show"}
//                     </button>

//                   </div>

//                   {errors.password && (
//                     <p className="text-sm text-red-500">
//                       {
//                         errors.password
//                           .message
//                       }
//                     </p>
//                   )}

//                 </div>

//                 {/* ==================================================
//                     CONFIRM PASSWORD
//                 ================================================== */}

//                 <div className="space-y-2">

//                   <Label
//                     htmlFor="confirm_password"
//                     style={{
//                       color:
//                         "var(--color-foreground-secondary)",
//                     }}
//                   >
//                     Confirm Password
//                   </Label>

//                   <div className="relative">

//                     <Input
//                       id="confirm_password"
//                       type={
//                         showConfirmPassword
//                           ? "text"
//                           : "password"
//                       }
//                       placeholder="Confirm your password"
//                       className="pr-10 transition-colors"
//                       style={inputStyle}
//                       {...register(
//                         "confirm_password",
//                         {
//                           required:
//                             "Please confirm your password",
//                         }
//                       )}
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(
//                           (value) =>
//                             !value
//                         )
//                       }
//                       className="absolute right-3 top-1/2 -translate-y-1/2"
//                       style={{
//                         color:
//                           "var(--color-foreground-muted)",
//                       }}
//                     >
//                       {showConfirmPassword
//                         ? "Hide"
//                         : "Show"}
//                     </button>

//                   </div>

//                   {errors.confirm_password && (
//                     <p className="text-sm text-red-500">
//                       {
//                         errors
//                           .confirm_password
//                           .message
//                       }
//                     </p>
//                   )}

//                 </div>

//               </>
//             )}

//             {/* ==================================================
//                 ADDRESS
//             ================================================== */}

//             <div className="space-y-2">

//               <Label
//                 htmlFor="address"
//                 style={{
//                   color:
//                     "var(--color-foreground-secondary)",
//                 }}
//               >
//                 Address
//               </Label>

//               <textarea
//                 id="address"
//                 placeholder="Enter your address"
//                 rows={3}
//                 className="w-full resize-none px-3 py-2 text-sm outline-none"
//                 style={inputStyle}
//                 {...register("address")}
//               />

//             </div>

//             {/* ==================================================
//                 LOCATION BUTTON
//             ================================================== */}

//             <div className="space-y-2">

//               <AppButton
//                 type="button"
//                 className="w-full"
//                 onClick={
//                   getCurrentLocation
//                 }
//                 disabled={
//                   locationLoading
//                 }
//                 style={{
//                   borderRadius:
//                     "var(--radius-md)",
//                 }}
//               >
//                 {locationLoading
//                   ? "Detecting location..."
//                   : "Use Current Location"}
//               </AppButton>

//               {locationError && (
//                 <p className="text-sm text-red-500">
//                   {locationError}
//                 </p>
//               )}

//             </div>

//             {/* ==================================================
//                 HIDDEN LATITUDE
//             ================================================== */}

//             <input
//               type="hidden"
//               {...register(
//                 "latitude"
//               )}
//             />

//             {/* ==================================================
//                 HIDDEN LONGITUDE
//             ================================================== */}

//             <input
//               type="hidden"
//               {...register(
//                 "longitude"
//               )}
//             />

//             {/* ==================================================
//                 SUBMIT ERROR
//             ================================================== */}

//             {submitError && (
//               <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
//                 {submitError}
//               </div>
//             )}

//             {/* ==================================================
//                 SUBMIT BUTTON
//             ================================================== */}

//             <AppButton
//               className="w-full transition-all"
//               type="submit"
//               disabled={
//                 submitLoading
//               }
//               style={{
//                 background:
//                   "var(--color-primary)",
//                 color:
//                   "var(--color-primary-foreground)",
//                 borderRadius:
//                   "var(--radius-md)",
//                 boxShadow:
//                   "var(--shadow-sm)",
//                 transitionDuration:
//                   "var(--duration-fast, 150ms)",
//               }}
//             >
//               {submitLoading
//                 ? isCompleteMode
//                   ? "Saving..."
//                   : "Creating account..."
//                 : isCompleteMode
//                   ? "Complete Profile"
//                   : "Register"}
//             </AppButton>

//             {/* ==================================================
//                 LOGIN LINK
//             ================================================== */}

//             {!isCompleteMode && (
//               <div className="text-center text-sm">

//                 <span
//                   style={{
//                     color:
//                       "var(--color-foreground-muted)",
//                   }}
//                 >
//                   Already have an account?{" "}
//                 </span>

//                 <Link
//                   href="/user/login"
//                   className="font-medium hover:underline"
//                   style={{
//                     color:
//                       "var(--color-primary)",
//                   }}
//                 >
//                   Go to Login
//                 </Link>

//               </div>
//             )}

//           </form>

//         </CardContent>
//       </div>

//       {/* ======================================================
//           ANIMATION
//       ======================================================= */}

//       <style>{`
//         @keyframes beacon-pulse {
//           0%, 100% {
//             box-shadow: 0 0 0 0 rgba(219, 139, 43, 0.45);
//           }

//           50% {
//             box-shadow: 0 0 0 5px rgba(219, 139, 43, 0);
//           }
//         }
//       `}</style>

//     </Card>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import {
  userRegister,
  userOnboarding,
} from "@/api/userAuthApi";

import { useAuth } from "@/context/AuthContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppButton from "@/components/common/AppButton";

const inputStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-surface)",
  transitionDuration: "var(--duration-fast, 150ms)",
};

export default function UserRegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ============================================================
  // AUTH CONTEXT
  // ============================================================

  const { auth, setAuth } = useAuth();

  const user = auth.user;

  // ============================================================
  // GOOGLE ONBOARDING MODE
  // ============================================================

  const isCompleteMode =
    searchParams.get("mode") === "complete";

  // ============================================================
  // REACT HOOK FORM
  // ============================================================

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // ============================================================
  // STATES
  // ============================================================

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [locationLoading, setLocationLoading] =
    useState(false);

  const [locationError, setLocationError] =
    useState("");

  const [submitLoading, setSubmitLoading] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  // ============================================================
  // GOOGLE USER DATA
  // ============================================================

  useEffect(() => {
    if (!isCompleteMode || !user) {
      return;
    }

    // Google se already full name mila hua hai
    if (user.full_name) {
      setValue(
        "full_name",
        user.full_name
      );
    }

    // Google se already email mila hua hai
    if (user.email) {
      setValue(
        "email",
        user.email
      );
    }
  }, [
    isCompleteMode,
    user,
    setValue,
  ]);

  // ============================================================
  // CURRENT LOCATION + OPENSTREETMAP
  // ============================================================

  const getCurrentLocation = () => {
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError(
        "Geolocation is not supported by your browser."
      );

      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // ======================================================
        // ROUND LAT/LNG TO 6 DECIMAL PLACES
        // Backend DecimalField (max_digits=9, decimal_places=6)
        // rejects raw browser GPS precision (too many digits).
        // ======================================================

        const latitude = Number(
          position.coords.latitude.toFixed(6)
        );

        const longitude = Number(
          position.coords.longitude.toFixed(6)
        );

        try {
          // ======================================================
          // SAVE LATITUDE
          // ======================================================

          setValue(
            "latitude",
            latitude
          );

          // ======================================================
          // SAVE LONGITUDE
          // ======================================================

          setValue(
            "longitude",
            longitude
          );

          // ======================================================
          // OPENSTREETMAP REVERSE GEOCODING
          // ======================================================

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                Accept:
                  "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error(
              "Unable to fetch address."
            );
          }

          const data =
            await response.json();

          const address =
            data.display_name || "";

          // ======================================================
          // SET ADDRESS
          // ======================================================

          setValue(
            "address",
            address
          );

          console.log(
            "Detected Location:",
            {
              latitude,
              longitude,
              address,
            }
          );

        } catch (error) {
          console.error(
            "Reverse geocoding error:",
            error
          );

          setLocationError(
            "Location found, but address could not be detected. You can enter the address manually."
          );
        } finally {
          setLocationLoading(false);
        }
      },

      // ========================================================
      // GEOLOCATION ERROR
      // ========================================================

      (error) => {
        console.error(
          "Geolocation error:",
          error
        );

        setLocationLoading(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError(
              "Location permission was denied. Please allow location access."
            );
            break;

          case error.POSITION_UNAVAILABLE:
            setLocationError(
              "Your current location is unavailable."
            );
            break;

          case error.TIMEOUT:
            setLocationError(
              "Location request timed out. Please try again."
            );
            break;

          default:
            setLocationError(
              "Unable to detect your location."
            );
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  // ============================================================
  // SUBMIT
  // ============================================================

  const onSubmit = async (data) => {
    console.log(
      "Form Submitted:",
      data
    );

    setSubmitError("");
    setSubmitLoading(true);

    try {
      // ========================================================
      // GOOGLE ONBOARDING
      // ========================================================

      if (isCompleteMode) {
        const onboardingData = {
          phone: data.phone,
          address: data.address || "",
          latitude:
            data.latitude || null,
          longitude:
            data.longitude || null,
        };

        console.log(
          "Onboarding Data:",
          onboardingData
        );

        // ======================================================
        // CALL EXISTING ONBOARDING API
        // PATCH /User/onboarding/
        // ======================================================

        const response =
          await userOnboarding(
            onboardingData
          );

        console.log(
          "Onboarding Success:",
          response.data
        );

        // ======================================================
        // UPDATE AUTH CONTEXT
        // ======================================================

        if (response.data?.user) {
          setAuth((prev) => ({
            ...prev,
            user: response.data.user,
          }));
        }

        // ======================================================
        // GO HOME
        // ======================================================

        router.push("/");

        return;
      }

      // ========================================================
      // NORMAL REGISTRATION
      // ========================================================

      const {
        confirm_password,
        ...registerData
      } = data;

      // ========================================================
      // PASSWORD MATCH CHECK
      // ========================================================

      if (
        data.password !==
        confirm_password
      ) {
        setSubmitError(
          "Passwords do not match."
        );

        return;
      }

      console.log(
        "Normal Register Data:",
        registerData
      );

      // ========================================================
      // CALL NORMAL REGISTER API
      // ========================================================

      const response =
        await userRegister(
          registerData
        );

      console.log(
        "Register Success:",
        response.data
      );

      // ========================================================
      // RESET FORM
      // ========================================================

      reset();

      // ========================================================
      // REDIRECT LOGIN
      // ========================================================

      router.push(
        "/user/login"
      );

    } catch (error) {
      console.error(
        isCompleteMode
          ? "Onboarding Error:"
          : "Register Error:",
        error.response?.data ||
          error.message
      );

      // ========================================================
      // ERROR MESSAGE
      // ========================================================

      if (
        error.response?.data
      ) {
        const backendError =
          error.response.data;

        if (
          typeof backendError ===
          "string"
        ) {
          setSubmitError(
            backendError
          );
        } else if (
          backendError.error
        ) {
          setSubmitError(
            backendError.error
          );
        } else if (
          backendError.detail
        ) {
          setSubmitError(
            backendError.detail
          );
        } else {
          setSubmitError(
            "Something went wrong. Please check your information."
          );
        }
      } else {
        setSubmitError(
          "Something went wrong. Please try again."
        );
      }

    } finally {
      setSubmitLoading(false);
    }
  };

  // ============================================================
  // UI
  // ============================================================

  return (
    <Card
      className="w-full max-w-md overflow-hidden border p-0"
      style={{
        borderColor:
          "var(--color-border)",
        borderRadius:
          "var(--radius-2xl)",
        background:
          "var(--color-surface-elevated)",
        boxShadow:
          "var(--shadow-xl)",
      }}
    >
      {/* ======================================================
          BEACON ACCENT BAR
      ======================================================= */}

      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, var(--color-primary), var(--amber-300, #ECB765))",
        }}
      />

      <div className="p-8">

        {/* ====================================================
            HEADER
        ===================================================== */}

        <CardHeader className="mb-6 p-0 text-center">

          <div
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              background:
                "var(--lead-live-bg, var(--amber-50))",
              color:
                "var(--amber-700, #9C5E19)",
              letterSpacing: "0.04em",
            }}
          >
            <span
              className="inline-block rounded-full"
              style={{
                width: 6,
                height: 6,
                background:
                  "var(--color-primary)",
                animation:
                  "beacon-pulse 2s ease-in-out infinite",
              }}
            />

            LEAD MARKETPLACE
          </div>

          <CardTitle
            style={{
              fontSize: "1.5rem",
              fontWeight:
                "var(--font-weight-bold, 700)",
              letterSpacing:
                "var(--letter-spacing-tight, -0.02em)",
              color:
                "var(--color-foreground)",
            }}
          >
            {isCompleteMode
              ? "Complete your profile"
              : "Create account"}
          </CardTitle>

          <CardDescription
            className="mt-1"
            style={{
              color:
                "var(--color-foreground-muted)",
            }}
          >
            {isCompleteMode
              ? "Add your phone number and location to continue."
              : "Join Lead Marketplace today."}
          </CardDescription>

        </CardHeader>

        {/* ====================================================
            FORM
        ===================================================== */}

        <CardContent className="p-0">

          <form
            className="space-y-5"
            onSubmit={handleSubmit(
              onSubmit
            )}
          >

            {/* ==================================================
                FULL NAME
            ================================================== */}

            <div className="space-y-2">

              <Label
                htmlFor="full_name"
                style={{
                  color:
                    "var(--color-foreground-secondary)",
                }}
              >
                Full Name
              </Label>

              <Input
                id="full_name"
                type="text"
                placeholder="Enter your full name"
                className="transition-colors"
                style={inputStyle}
                readOnly={
                  isCompleteMode
                }
                {...register(
                  "full_name",
                  {
                    required:
                      !isCompleteMode
                        ? "Full name is required"
                        : false,
                  }
                )}
              />

              {errors.full_name && (
                <p className="text-sm text-red-500">
                  {
                    errors.full_name
                      .message
                  }
                </p>
              )}

            </div>

            {/* ==================================================
                PHONE
            ================================================== */}

            <div className="space-y-2">

              <Label
                htmlFor="phone"
                style={{
                  color:
                    "var(--color-foreground-secondary)",
                }}
              >
                Phone Number
              </Label>

              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="transition-colors"
                style={inputStyle}
                {...register(
                  "phone",
                  {
                    required:
                      "Phone number is required",
                  }
                )}
              />

              {errors.phone && (
                <p className="text-sm text-red-500">
                  {
                    errors.phone.message
                  }
                </p>
              )}

            </div>

            {/* ==================================================
                EMAIL
            ================================================== */}

            <div className="space-y-2">

              <Label
                htmlFor="email"
                style={{
                  color:
                    "var(--color-foreground-secondary)",
                }}
              >
                Email Address
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="transition-colors"
                style={inputStyle}
                readOnly={
                  isCompleteMode
                }
                {...register(
                  "email",
                  {
                    required:
                      !isCompleteMode
                        ? "Email is required"
                        : false,
                  }
                )}
              />

              {errors.email && (
                <p className="text-sm text-red-500">
                  {
                    errors.email.message
                  }
                </p>
              )}

            </div>

            {/* ==================================================
                PASSWORD
                NORMAL REGISTRATION ONLY
            ================================================== */}

            {!isCompleteMode && (
              <>

                {/* ==================================================
                    PASSWORD
                ================================================== */}

                <div className="space-y-2">

                  <Label
                    htmlFor="password"
                    style={{
                      color:
                        "var(--color-foreground-secondary)",
                    }}
                  >
                    Password
                  </Label>

                  <div className="relative">

                    <Input
                      id="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter your password"
                      className="pr-10 transition-colors"
                      style={inputStyle}
                      {...register(
                        "password",
                        {
                          required:
                            "Password is required",
                        }
                      )}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (value) =>
                            !value
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{
                        color:
                          "var(--color-foreground-muted)",
                      }}
                    >
                      {showPassword
                        ? "Hide"
                        : "Show"}
                    </button>

                  </div>

                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {
                        errors.password
                          .message
                      }
                    </p>
                  )}

                </div>

                {/* ==================================================
                    CONFIRM PASSWORD
                ================================================== */}

                <div className="space-y-2">

                  <Label
                    htmlFor="confirm_password"
                    style={{
                      color:
                        "var(--color-foreground-secondary)",
                    }}
                  >
                    Confirm Password
                  </Label>

                  <div className="relative">

                    <Input
                      id="confirm_password"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                      className="pr-10 transition-colors"
                      style={inputStyle}
                      {...register(
                        "confirm_password",
                        {
                          required:
                            "Please confirm your password",
                        }
                      )}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (value) =>
                            !value
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{
                        color:
                          "var(--color-foreground-muted)",
                      }}
                    >
                      {showConfirmPassword
                        ? "Hide"
                        : "Show"}
                    </button>

                  </div>

                  {errors.confirm_password && (
                    <p className="text-sm text-red-500">
                      {
                        errors
                          .confirm_password
                          .message
                      }
                    </p>
                  )}

                </div>

              </>
            )}

            {/* ==================================================
                ADDRESS
            ================================================== */}

            <div className="space-y-2">

              <Label
                htmlFor="address"
                style={{
                  color:
                    "var(--color-foreground-secondary)",
                }}
              >
                Address
              </Label>

              <textarea
                id="address"
                placeholder="Enter your address"
                rows={3}
                className="w-full resize-none px-3 py-2 text-sm outline-none"
                style={inputStyle}
                {...register("address")}
              />

            </div>

            {/* ==================================================
                LOCATION BUTTON
            ================================================== */}

            <div className="space-y-2">

              <AppButton
                type="button"
                className="w-full"
                onClick={
                  getCurrentLocation
                }
                disabled={
                  locationLoading
                }
                style={{
                  borderRadius:
                    "var(--radius-md)",
                }}
              >
                {locationLoading
                  ? "Detecting location..."
                  : "Use Current Location"}
              </AppButton>

              {locationError && (
                <p className="text-sm text-red-500">
                  {locationError}
                </p>
              )}

            </div>

            {/* ==================================================
                HIDDEN LATITUDE
            ================================================== */}

            <input
              type="hidden"
              {...register(
                "latitude"
              )}
            />

            {/* ==================================================
                HIDDEN LONGITUDE
            ================================================== */}

            <input
              type="hidden"
              {...register(
                "longitude"
              )}
            />

            {/* ==================================================
                SUBMIT ERROR
            ================================================== */}

            {submitError && (
              <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
                {submitError}
              </div>
            )}

            {/* ==================================================
                SUBMIT BUTTON
            ================================================== */}

            <AppButton
              className="w-full transition-all"
              type="submit"
              disabled={
                submitLoading
              }
              style={{
                background:
                  "var(--color-primary)",
                color:
                  "var(--color-primary-foreground)",
                borderRadius:
                  "var(--radius-md)",
                boxShadow:
                  "var(--shadow-sm)",
                transitionDuration:
                  "var(--duration-fast, 150ms)",
              }}
            >
              {submitLoading
                ? isCompleteMode
                  ? "Saving..."
                  : "Creating account..."
                : isCompleteMode
                  ? "Complete Profile"
                  : "Register"}
            </AppButton>

            {/* ==================================================
                LOGIN LINK
            ================================================== */}

            {!isCompleteMode && (
              <div className="text-center text-sm">

                <span
                  style={{
                    color:
                      "var(--color-foreground-muted)",
                  }}
                >
                  Already have an account?{" "}
                </span>

                <Link
                  href="/user/login"
                  className="font-medium hover:underline"
                  style={{
                    color:
                      "var(--color-primary)",
                  }}
                >
                  Go to Login
                </Link>

              </div>
            )}

          </form>

        </CardContent>
      </div>

      {/* ======================================================
          ANIMATION
      ======================================================= */}

      <style>{`
        @keyframes beacon-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(219, 139, 43, 0.45);
          }

          50% {
            box-shadow: 0 0 0 5px rgba(219, 139, 43, 0);
          }
        }
      `}</style>

    </Card>
  );
}