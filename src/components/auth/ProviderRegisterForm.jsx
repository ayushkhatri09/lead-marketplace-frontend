// "use client";

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { serviceList } from "@/api/serviceApi";
// import { providerRegister } from "@/api/providerAuthApi";
// import { useRouter } from "next/navigation";

// import ProviderBasicFields from "@/components/auth/registerForm/provider/ProviderBasicFields";
// import ProviderPasswordField from "@/components/auth/registerForm/provider/ProviderPasswordField";
// import ProviderServiceField from "@/components/auth/registerForm/provider/ProviderServiceField";
// import ProviderAddressField from "@/components/auth/registerForm/provider/ProviderAddressField";
// import ProviderRegisterButton from "@/components/auth/registerForm/provider/ProviderRegisterButton";
// import ProviderRegisterKYCFields from "@/components/auth/registerForm/provider/ProviderRegisterKYCFields";
// export default function ProviderRegisterForm() {
//   const [services, setServices] = useState([]);
//   const [loadingServices, setLoadingServices] = useState(true);
//   const [loading, setLoading] = useState(false);
  
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//     reset,
//   } = useForm();

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await serviceList();
//         setServices(response.data.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoadingServices(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//   if (!navigator.geolocation) return;

//   navigator.geolocation.getCurrentPosition(
//     async (position) => {

//       const latitude = Number(
//         position.coords.latitude
//       ).toFixed(6);

//       const longitude = Number(
//         position.coords.longitude
//       ).toFixed(6);


//       setValue(
//         "latitude",
//         latitude
//       );

//       setValue(
//         "longitude",
//         longitude
//       );


//       try {

//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
//         );


//         const data = await response.json();


//         if(data.display_name){

//           setValue(
//             "address",
//             data.display_name
//           );

//         }


//       } catch(error){

//         console.log(error);

//       }

//     },

//     (error)=>{
//       console.log(error);
//     }

//   );

// }, [setValue]);

//   const onSubmit = async (data) => {
//     console.log(data); 
//     try {
//       setLoading(true);

//     //   await providerRegister(data);
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]) => {
//       if (value instanceof FileList) {
//         if (value.length > 0) {
//           formData.append(key, value[0]);
//         }
//       } else {
//         formData.append(key, value);
//       }
//     });

//     await providerRegister(formData);

//       alert("Provider Registered Successfully");

//       reset();
//       router.push("/provider/login");
//     } catch (error) {
//       //console.error(error); 
//       console.log(error.response?.data); 

//       alert("Registration Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card
//       className="w-full max-w-lg border"
//       style={{
//         borderColor: "var(--color-border)",
//         background: "var(--color-surface-elevated)",
//         borderRadius: "var(--radius-xl)",
//         boxShadow: "var(--shadow-md)",
//       }}
//     >
//       <CardHeader>
//         <CardTitle>
//           Register as Provider
//         </CardTitle>

//         <CardDescription>
//           Fill your information to create your provider account.
//         </CardDescription>
//       </CardHeader>

//       <CardContent>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-6"
//         >
//           <ProviderBasicFields
//             register={register}
//             errors={errors}
//           />

//           <ProviderPasswordField
//             register={register}
//             errors={errors}
//           />

//           <ProviderServiceField
//   services={services}
//   loadingServices={loadingServices}
//   register={register}
//   setValue={setValue}
//   errors={errors}
// />
// <ProviderAddressField
//   register={register}
//   errors={errors}
//   setValue={setValue}
// />


//           {/* Hidden Location Fields */}

//           <input
//             type="hidden"
//             {...register("latitude")}
//           />

//           <input
//             type="hidden"
//             {...register("longitude")}
//           />

//           <ProviderRegisterKYCFields
//   register={register}
//   errors={errors}
// />

//           <ProviderRegisterButton
//             loading={loading}
//           />
//         </form>
//       </CardContent>
//     </Card>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter, useSearchParams } from "next/navigation";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { serviceList } from "@/api/serviceApi";
// import {
//   providerRegister,
//   providerOnboarding,
// } from "@/api/providerAuthApi";
// import { useProviderAuth } from "@/context/ProviderAuthContext";

// import ProviderBasicFields from "@/components/auth/registerForm/provider/ProviderBasicFields";
// import ProviderPasswordField from "@/components/auth/registerForm/provider/ProviderPasswordField";
// import ProviderServiceField from "@/components/auth/registerForm/provider/ProviderServiceField";
// import ProviderAddressField from "@/components/auth/registerForm/provider/ProviderAddressField";
// import ProviderRegisterButton from "@/components/auth/registerForm/provider/ProviderRegisterButton";
// import ProviderRegisterKYCFields from "@/components/auth/registerForm/provider/ProviderRegisterKYCFields";

// export default function ProviderRegisterForm() {
//   const [services, setServices] = useState([]);
//   const [loadingServices, setLoadingServices] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { providerAuth, login } = useProviderAuth();

//   const mode =
//     searchParams.get("mode") === "complete"
//       ? "complete"
//       : "register";

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//     reset,
//   } = useForm();

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await serviceList();
//         setServices(response.data.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoadingServices(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     if (!navigator.geolocation) return;

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const latitude = Number(
//           position.coords.latitude
//         ).toFixed(6);

//         const longitude = Number(
//           position.coords.longitude
//         ).toFixed(6);

//         setValue("latitude", latitude);
//         setValue("longitude", longitude);

//         try {
//           const response = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
//           );

//           const data = await response.json();

//           if (data.display_name) {
//             setValue("address", data.display_name);
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }, [setValue]);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       Object.entries(data).forEach(([key, value]) => {
//         if (value instanceof FileList) {
//           if (value.length > 0) {
//             formData.append(key, value[0]);
//           }
//         } else {
//           formData.append(key, value);
//         }
//       });

//       if (mode === "complete") {
//         const response = await providerOnboarding(formData);

//         login({
//           access: localStorage.getItem("provider_access"),
//           refresh: localStorage.getItem("provider_refresh"),
//           provider: response.data.provider,
//         });

//         alert("Profile completed successfully");

//         reset();
//         router.push("/");
//       } else {
//         await providerRegister(formData);

//         alert("Provider Registered Successfully");

//         reset();
//         router.push("/provider/login");
//       }
//     } catch (error) {
//       console.log(error.response?.data);

//       alert(
//         mode === "complete"
//           ? "Failed to complete profile"
//           : "Registration Failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card
//       className="w-full max-w-lg border"
//       style={{
//         borderColor: "var(--color-border)",
//         background: "var(--color-surface-elevated)",
//         borderRadius: "var(--radius-xl)",
//         boxShadow: "var(--shadow-md)",
//       }}
//     >
//       <CardHeader>
//         <CardTitle>
//           {mode === "complete"
//             ? "Complete Your Provider Profile"
//             : "Register as Provider"}
//         </CardTitle>

//         <CardDescription>
//           {mode === "complete"
//             ? "Just a few more details to activate your account."
//             : "Fill your information to create your provider account."}
//         </CardDescription>
//       </CardHeader>

//       <CardContent>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-6"
//         >
//           <ProviderBasicFields
//             register={register}
//             errors={errors}
//             mode={mode}
//           />

//           {mode !== "complete" && (
//             <ProviderPasswordField
//               register={register}
//               errors={errors}
//             />
//           )}

//           <ProviderServiceField
//             services={services}
//             loadingServices={loadingServices}
//             register={register}
//             setValue={setValue}
//             errors={errors}
//           />

//           <ProviderAddressField
//             register={register}
//             errors={errors}
//             setValue={setValue}
//           />

//           {/* Hidden Location Fields */}

//           <input type="hidden" {...register("latitude")} />
//           <input type="hidden" {...register("longitude")} />

//           <ProviderRegisterKYCFields
//             register={register}
//             errors={errors}
//           />

//           <ProviderRegisterButton loading={loading} />
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { serviceList } from "@/api/serviceApi";
import {
  providerRegister,
  providerOnboarding,
} from "@/api/providerAuthApi";
import { useProviderAuth } from "@/context/ProviderAuthContext";

import ProviderBasicFields from "@/components/auth/registerForm/provider/ProviderBasicFields";
import ProviderPasswordField from "@/components/auth/registerForm/provider/ProviderPasswordField";
import ProviderServiceField from "@/components/auth/registerForm/provider/ProviderServiceField";
import ProviderAddressField from "@/components/auth/registerForm/provider/ProviderAddressField";
import ProviderRegisterButton from "@/components/auth/registerForm/provider/ProviderRegisterButton";
import ProviderRegisterKYCFields from "@/components/auth/registerForm/provider/ProviderRegisterKYCFields";

function ProviderRegisterFormInner() {
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const { providerAuth, login } = useProviderAuth();

  const mode =
    searchParams.get("mode") === "complete"
      ? "complete"
      : "register";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceList();
        setServices(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = Number(
          position.coords.latitude
        ).toFixed(6);

        const longitude = Number(
          position.coords.longitude
        ).toFixed(6);

        setValue("latitude", latitude);
        setValue("longitude", longitude);

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          if (data.display_name) {
            setValue("address", data.display_name);
          }
        } catch (error) {
          console.log(error);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof FileList) {
          if (value.length > 0) {
            formData.append(key, value[0]);
          }
        } else {
          formData.append(key, value);
        }
      });

      if (mode === "complete") {
        const response = await providerOnboarding(formData);

        login({
          access: localStorage.getItem("provider_access"),
          refresh: localStorage.getItem("provider_refresh"),
          provider: response.data.provider,
        });

        alert("Profile completed successfully");

        reset();
        router.push("/");
      } else {
        await providerRegister(formData);

        alert("Provider Registered Successfully");

        reset();
        router.push("/provider/login");
      }
    } catch (error) {
      console.log(error.response?.data);

      alert(
        mode === "complete"
          ? "Failed to complete profile"
          : "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className="w-full max-w-lg border"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface-elevated)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <CardHeader>
        <CardTitle>
          {mode === "complete"
            ? "Complete Your Provider Profile"
            : "Register as Provider"}
        </CardTitle>

        <CardDescription>
          {mode === "complete"
            ? "Just a few more details to activate your account."
            : "Fill your information to create your provider account."}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <ProviderBasicFields
            register={register}
            errors={errors}
            mode={mode}
          />

          {mode !== "complete" && (
            <ProviderPasswordField
              register={register}
              errors={errors}
            />
          )}

          <ProviderServiceField
            services={services}
            loadingServices={loadingServices}
            register={register}
            setValue={setValue}
            errors={errors}
          />

          <ProviderAddressField
            register={register}
            errors={errors}
            setValue={setValue}
          />

          {/* Hidden Location Fields */}

          <input type="hidden" {...register("latitude")} />
          <input type="hidden" {...register("longitude")} />

          <ProviderRegisterKYCFields
            register={register}
            errors={errors}
          />

          <ProviderRegisterButton loading={loading} />
        </form>
      </CardContent>
    </Card>
  );
}

export default function ProviderRegisterForm() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <ProviderRegisterFormInner />
    </Suspense>
  );
}