// "use client";

// import { useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { useProviderAuth } from "@/context/ProviderAuthContext";

// export default function ProviderGoogleCallbackPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { login } = useProviderAuth();

//   useEffect(() => {
//     const access = searchParams.get("access");
//     const refresh = searchParams.get("refresh");

//     if (!access || !refresh) {
//       console.error("Provider Google tokens missing");
//       router.replace("/provider/login");
//       return;
//     }

//     login({
//       access,
//       refresh,
//       provider: null,
//     });

//     router.replace("/");
//   }, [searchParams, login, router]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p>Signing you in with Google...</p>
//     </div>
//   );
// }
// "use client";

// import { useEffect, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { providerGoogleExchange } from "@/api/providerAuthApi.js";
// import { useProviderAuth } from "@/context/ProviderAuthContext";

// export default function ProviderGoogleCallbackPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useProviderAuth();

//   const hasRun = useRef(false);

//   useEffect(() => {
//     if (hasRun.current) return;
//     hasRun.current = true;

//     const exchangeCode = async () => {
//       const code = searchParams.get("code");

//       if (!code) {
//         console.error("No code found in callback URL.");
//         router.push("/provider/login");
//         return;
//       }

//       try {
//         const response = await providerGoogleExchange(code);

//         login(response.data);

//         router.push("/");
//       } catch (error) {
//         console.error("Google exchange failed:", error);
//         router.push("/provider/login");
//       }
//     };

//     exchangeCode();
//   }, [searchParams, router, login]);

//   return (
//     <div className="flex h-screen w-full items-center justify-center">
//       <p className="text-sm text-muted-foreground">
//         Signing you in with Google...
//       </p>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { providerGoogleExchange } from "@/api/providerAuthApi.js";
import { useProviderAuth } from "@/context/ProviderAuthContext";

export default function ProviderGoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useProviderAuth();

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const exchangeCode = async () => {
      const code = searchParams.get("code");

      if (!code) {
        console.error("No code found in callback URL.");
        router.push("/provider/login");
        return;
      }

      try {
        const response = await providerGoogleExchange(code);

        login(response.data);

        const provider = response.data.provider;

        const isProfileIncomplete =
          !provider?.phone || !provider?.service;

        if (isProfileIncomplete) {
          router.push("/provider/register?mode=complete");
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Google exchange failed:", error);
        router.push("/provider/login");
      }
    };

    exchangeCode();
  }, [searchParams, router, login]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p className="text-sm text-muted-foreground">
        Signing you in with Google...
      </p>
    </div>
  );
}