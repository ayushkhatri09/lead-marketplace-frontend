// "use client";

// import { useEffect, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { userGoogleExchange } from "@/api/userAuthApi";
// import { useAuth } from "@/context/AuthContext";

// export default function GoogleCallbackPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const hasRun = useRef(false);

//   useEffect(() => {
//     if (hasRun.current) return;
//     hasRun.current = true;

//     const exchangeCode = async () => {
//       const code = searchParams.get("code");

//       if (!code) {
//         console.error("No code found in callback URL.");
//         router.push("/user/login");
//         return;
//       }

//       try {
//         const response = await userGoogleExchange(code);

//         login({
//           accessToken: response.data.access,
//           refreshToken: response.data.refresh,
//           role: "user",
//         });

//         router.push("/");
//       } catch (error) {
//         console.error("Google exchange failed:", error);
//         router.push("/user/login");
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

// "use client";

// import { useEffect, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { userGoogleExchange } from "@/api/userAuthApi";
// import { useAuth } from "@/context/AuthContext";

// export default function GoogleCallbackPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const hasRun = useRef(false);

//   useEffect(() => {
//     if (hasRun.current) return;

//     hasRun.current = true;

//     const exchangeCode = async () => {
//       const code = searchParams.get("code");

//       if (!code) {
//         console.error("No code found in callback URL.");
//         router.push("/user/login");
//         return;
//       }

//       try {
//         // ==========================================
//         // GOOGLE EXCHANGE
//         // ==========================================

//         const response = await userGoogleExchange(code);

//         const {
//           access,
//           refresh,
//           user,
//         } = response.data;

//         console.log("Google User:", user);

//         // ==========================================
//         // SAVE AUTH
//         // ==========================================

//         login({
//           accessToken: access,
//           refreshToken: refresh,
//           role: "user",
//           user,
//         });

//         // ==========================================
//         // CHECK USER ONBOARDING
//         // ==========================================

//         if (!user?.phone) {
//           console.log(
//             "Google user phone missing. Starting onboarding..."
//           );

//           router.push("/user/register?mode=complete");

//           return;
//         }

//         // ==========================================
//         // USER ALREADY COMPLETE
//         // ==========================================

//         router.push("/");

//       } catch (error) {
//         console.error(
//           "Google exchange failed:",
//           error
//         );

//         router.push("/user/login");
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

// "use client";

// import { useEffect, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { userGoogleExchange } from "@/api/userAuthApi";
// import { useAuth } from "@/context/AuthContext";

// export default function GoogleCallbackPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const hasRun = useRef(false);

//   useEffect(() => {
//     if (hasRun.current) return;

//     hasRun.current = true;

//     const exchangeCode = async () => {
//       const code = searchParams.get("code");

//       if (!code) {
//         console.error("No code found in callback URL.");
//         router.push("/user/login");
//         return;
//       }

//       try {
//         // ==========================================
//         // GOOGLE EXCHANGE
//         // ==========================================

//         const response = await userGoogleExchange(code);

//         const { access, refresh, user } = response.data;

//         console.log("Google User:", user);

//         // ==========================================
//         // SAVE AUTH
//         // ==========================================

//         login({
//           accessToken: access,
//           refreshToken: refresh,
//           role: "user",
//           user,
//         });

//         // ==========================================
//         // CHECK USER ONBOARDING
//         // ==========================================

//         if (!user?.phone) {
//           console.log(
//             "Google user phone missing. Starting onboarding..."
//           );

//           router.push("/user/register?mode=complete");

//           return;
//         }

//         // ==========================================
//         // USER ALREADY COMPLETE
//         // ==========================================

//         router.push("/");
//       } catch (error) {
//         console.error("Google exchange failed:", error);

//         router.push("/user/login");
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

import { Suspense, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { userGoogleExchange } from "@/api/userAuthApi";
import { useAuth } from "@/context/AuthContext";

function GoogleCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;

    hasRun.current = true;

    const exchangeCode = async () => {
      const code = searchParams.get("code");

      if (!code) {
        console.error("No code found in callback URL.");
        router.push("/user/login");
        return;
      }

      try {
        // ==========================================
        // GOOGLE EXCHANGE
        // ==========================================

        const response = await userGoogleExchange(code);

        const { access, refresh, user } = response.data;

        console.log("Google User:", user);

        // ==========================================
        // SAVE AUTH
        // ==========================================

        login({
          accessToken: access,
          refreshToken: refresh,
          role: "user",
          user,
        });

        // ==========================================
        // CHECK USER ONBOARDING
        // ==========================================

        if (!user?.phone) {
          console.log(
            "Google user phone missing. Starting onboarding..."
          );

          router.push("/user/register?mode=complete");

          return;
        }

        // ==========================================
        // USER ALREADY COMPLETE
        // ==========================================

        router.push("/");
      } catch (error) {
        console.error("Google exchange failed:", error);

        router.push("/user/login");
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

export default function GoogleCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <GoogleCallbackInner />
    </Suspense>
  );
}