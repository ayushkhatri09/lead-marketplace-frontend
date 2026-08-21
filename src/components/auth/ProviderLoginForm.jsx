

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";

// import { providerLogin } from "@/api/providerAuthApi.js";
// import { useProviderAuth } from "@/context/ProviderAuthContext";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import ProviderLoginFields from "./loginForm/provider/ProviderLoginFields.jsx";
// import ProviderLoginButton from "./loginForm/provider/ProviderLoginButton.jsx";

// export default function ProviderLoginForm() {
//    const router = useRouter();

//   const { login } = useProviderAuth();

//   const [loading, setLoading] = useState(false);

  

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//   try {
//     setLoading(true);

//     const response = await providerLogin(data);

//     console.log(response.data);

//     login(response.data);

//     router.push("/");
//   } catch (error) {
//     console.error(error);

//     alert(
//       error.response?.data?.message || "Provider login failed."
//     );
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <Card
//       className="w-full max-w-md border"
//       style={{
//         borderColor: "var(--color-border)",
//         background: "var(--color-surface-elevated)",
//         borderRadius: "var(--radius-xl)",
//         boxShadow: "var(--shadow-md)",
//       }}
//     >
//       <CardHeader>
//         <CardTitle>Provider Login</CardTitle>

//         <CardDescription>
//           Login to access your provider dashboard.
//         </CardDescription>
//       </CardHeader>

//       <CardContent>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-6"
//         >
//           <ProviderLoginFields
//             register={register}
//             errors={errors}
//           />

//           <ProviderLoginButton loading={loading} />
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { providerLogin } from "@/api/providerAuthApi.js";
import { useProviderAuth } from "@/context/ProviderAuthContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ProviderLoginFields from "./loginForm/provider/ProviderLoginFields.jsx";
import ProviderLoginButton from "./loginForm/provider/ProviderLoginButton.jsx";

export default function ProviderLoginForm() {
  const router = useRouter();

  const { login } = useProviderAuth();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ==========================================
  // NORMAL PROVIDER LOGIN
  // ==========================================

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await providerLogin(data);

      console.log(response.data);

      login(response.data);

      router.push("/");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Provider login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // GOOGLE LOGIN
  // ==========================================

  const handleGoogleLogin = async () => {
  try {
    setGoogleLoading(true);

    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL;

    console.log("Google OAuth Base URL:", baseURL);

    if (!baseURL) {
      throw new Error(
        "NEXT_PUBLIC_API_BASE_URL is not configured."
      );
    }

    const googleLoginURL =
      `${baseURL}/Provider/google/login/`;

    console.log(
      "Google OAuth Request URL:",
      googleLoginURL
    );

    const response = await fetch(
      googleLoginURL,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log(
      "Google OAuth Response:",
      response.status,
      response.statusText
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Google OAuth Backend Error:",
        errorText
      );

      throw new Error(
        `Google authentication request failed (${response.status}).`
      );
    }

    const data = await response.json();

    console.log(
      "Google OAuth Response Data:",
      data
    );

    if (!data.authorization_url) {
      throw new Error(
        "Google authorization URL not received."
      );
    }

    window.location.href =
      data.authorization_url;

  } catch (error) {
    console.error(
      "Google Provider Login Error:",
      error
    );

    alert(
      error.message ||
        "Unable to continue with Google."
    );

    setGoogleLoading(false);
  }
};

  return (
    <Card
      className="w-full max-w-md border"
      style={{
        borderColor: "var(--color-border)",
        background:
          "var(--color-surface-elevated)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <CardHeader>
        <CardTitle>
          Provider Login
        </CardTitle>

        <CardDescription>
          Login to access your provider dashboard.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <ProviderLoginFields
            register={register}
            errors={errors}
          />

          <ProviderLoginButton
            loading={loading}
          />

          {/* Divider */}

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />

            <span className="text-sm text-muted-foreground">
              OR
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google Login */}

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
            className="flex w-full items-center justify-center gap-3 rounded-md border px-4 py-2.5 text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
          >
            {googleLoading ? (
              "Connecting to Google..."
            ) : (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.68-.06-1.34-.17-1.97H12v3.73h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.92-4.18 2.92-7.13Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 21.99c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.74 9.74 0 0 0 12 21.99Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.54 14.09a5.86 5.86 0 0 1 0-4.18V7.39H3.3a9.75 9.75 0 0 0 0 9.22l3.24-2.52Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.88c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 2.98 14.63 2 12 2a9.74 9.74 0 0 0-8.7 5.39l3.24 2.52C7.31 7.6 9.46 5.88 12 5.88Z"
                  />
                </svg>

                Continue with Google
              </>
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}