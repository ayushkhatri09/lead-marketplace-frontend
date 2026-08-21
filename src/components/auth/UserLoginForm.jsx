
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";

// import { useAuth } from "@/context/AuthContext";
// import { userLogin,googleUserLogin,} from "@/api/userAuthApi";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import AppButton from "@/components/common/AppButton";


// export default function UserLoginForm() {


//   const router = useRouter();


//   const { login } = useAuth();



//   const {
//     register,
//     handleSubmit,
//   } = useForm();



//   const [showPassword, setShowPassword] = useState(false);

//   const [serverError, setServerError] = useState("");

//   const [loading, setLoading] = useState(false);





//   const onSubmit = async (data) => {


//     try {


//       setLoading(true);

//       setServerError("");



//       const payload = {

//         password: data.password,

//       };



//       if(data.identifier.includes("@")){

//         payload.email = data.identifier;

//       }
//       else{

//         payload.phone = data.identifier;

//       }






//       const response = await userLogin(payload);



//       console.log(
//         "User Login Response:",
//         response.data
//       );






//       login({

//         accessToken:
//           response.data.access,


//         refreshToken:
//           response.data.refresh,


//         role:
//           "user",


//       });






//       router.push("/");



//     }
//     catch(error){


//       console.log(
//         "User Login Error:",
//         error.response?.data || error.message
//       );



//       setServerError(

//         error.response?.data?.detail ||

//         "Login failed. Please try again."

//       );


//     }
//     finally{


//       setLoading(false);


//     }


//   };







//   return (

//     <Card

//       className="
//         w-full
//         max-w-md
//         overflow-hidden
//         border
//         p-0
//       "

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



//       <div

//         style={{

//           height:"3px",

//           background:
//           "linear-gradient(90deg,var(--color-primary),#ECB765)"

//         }}

//       />





//       <div className="p-8">



//         <CardHeader className="p-0 text-center mb-6">


//           <CardTitle>

//             Welcome Back

//           </CardTitle>


//           <CardDescription>

//             Login to continue using Lead Marketplace.

//           </CardDescription>


//         </CardHeader>






//         <CardContent className="p-0">



//           <form

//             onSubmit={
//               handleSubmit(onSubmit)
//             }

//             className="space-y-5"

//           >






//             <div className="space-y-2">


//               <label className="text-sm font-medium">

//                 Email or Phone

//               </label>



//               <Input

//                 type="text"

//                 placeholder="Enter email or phone"

//                 {...register("identifier")}

//               />



//             </div>








//             <div className="space-y-2">


//               <label className="text-sm font-medium">

//                 Password

//               </label>





//               <div className="relative">


//                 <Input


//                   type={
//                     showPassword
//                     ?
//                     "text"
//                     :
//                     "password"
//                   }


//                   placeholder="Enter password"


//                   {...register("password")}


//                 />





//                 <button

//                   type="button"

//                   onClick={() =>
//                     setShowPassword(
//                       (prev)=>!prev
//                     )
//                   }


//                   className="
//                     absolute
//                     right-3
//                     top-1/2
//                     -translate-y-1/2
//                     text-sm
//                   "

//                 >

//                   {
//                     showPassword
//                     ?
//                     "Hide"
//                     :
//                     "Show"
//                   }


//                 </button>



//               </div>



//             </div>







//             {
//               serverError && (

//                 <p className="text-sm text-red-500">

//                   {serverError}

//                 </p>

//               )
//             }







//             <AppButton

//               type="submit"

//               loading={loading}

//               className="w-full"

//             >

//               Login


//             </AppButton>

//             <AppButton
//   type="submit"
//   loading={loading}
//   className="w-full"
// >
//   Login
// </AppButton>


// <div className="relative my-5">
//   <div className="absolute inset-0 flex items-center">
//     <div className="w-full border-t" />
//   </div>

//   <div className="relative flex justify-center text-xs">
//     <span
//       className="px-3"
//       style={{
//         background: "var(--color-surface-elevated)",
//         color: "var(--color-text-muted)",
//       }}
//     >
//       OR
//     </span>
//   </div>
// </div>


// <button
//   type="button"
//   onClick={googleUserLogin}
//   className="
//     w-full
//     h-11
//     rounded-lg
//     border
//     flex
//     items-center
//     justify-center
//     gap-3
//     text-sm
//     font-medium
//     transition
//     hover:bg-muted
//   "
// >
//   Continue with Google
// </button>







//             <div className="text-center text-sm">


//               Don't have an account?{" "}


//               <Link

//                 href="/user/register"

//                 className="
//                   text-primary
//                   hover:underline
//                 "

//               >

//                 Register


//               </Link>



//             </div>





//           </form>



//         </CardContent>



//       </div>



//     </Card>

//   );

// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { useAuth } from "@/context/AuthContext";
import {
  userLogin,
  googleUserLogin,
} from "@/api/userAuthApi";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import AppButton from "@/components/common/AppButton";

export default function UserLoginForm() {
  const router = useRouter();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // ============================================================
  // NORMAL USER LOGIN
  // ============================================================

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setServerError("");

      const identifier = data.identifier?.trim();

      if (!identifier) {
        setServerError("Please enter your email or phone.");
        return;
      }

      const payload = {
        password: data.password,
      };

      // Email or Phone
      if (identifier.includes("@")) {
        payload.email = identifier;
      } else {
        payload.phone = identifier;
      }

      const response = await userLogin(payload);

      console.log(
        "User Login Response:",
        response.data
      );

      // Save authentication data
      login({
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        role: "user",
      });

      // Redirect home
      router.push("/");
    } catch (error) {
      console.log(
        "User Login Error:",
        error.response?.data || error.message
      );

      const errorData = error.response?.data;

      setServerError(
        errorData?.detail ||
          errorData?.error ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // GOOGLE LOGIN
  // ============================================================

  const handleGoogleLogin = () => {
    try {
      setGoogleLoading(true);

      googleUserLogin();
    } catch (error) {
      console.error(
        "Google Login Error:",
        error
      );

      setGoogleLoading(false);

      setServerError(
        "Unable to continue with Google."
      );
    }
  };

  // ============================================================
  // UI
  // ============================================================

  return (
    <Card
      className="
        w-full
        max-w-md
        overflow-hidden
        border
        p-0
      "
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-2xl)",
        background: "var(--color-surface-elevated)",
        boxShadow: "var(--shadow-xl)",
      }}
    >
      {/* Top accent */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, var(--color-primary), #ECB765)",
        }}
      />

      <div className="p-8">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <CardHeader className="p-0 text-center mb-6">

          <CardTitle>
            Welcome Back
          </CardTitle>

          <CardDescription>
            Login to continue using Lead Marketplace.
          </CardDescription>

        </CardHeader>

        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <CardContent className="p-0">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* ================================================== */}
            {/* EMAIL / PHONE */}
            {/* ================================================== */}

            <div className="space-y-2">

              <label
                htmlFor="identifier"
                className="text-sm font-medium"
              >
                Email or Phone
              </label>

              <Input
                id="identifier"
                type="text"
                placeholder="Enter email or phone"
                autoComplete="username"
                {...register("identifier")}
              />

            </div>

            {/* ================================================== */}
            {/* PASSWORD */}
            {/* ================================================== */}

            <div className="space-y-2">

              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>

              <div className="relative">

                <Input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="pr-16"
                  {...register("password")}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-muted-foreground
                    hover:text-foreground
                  "
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>

            {/* ================================================== */}
            {/* SERVER ERROR */}
            {/* ================================================== */}

            {serverError && (
              <p className="text-sm text-red-500">
                {serverError}
              </p>
            )}

            {/* ================================================== */}
            {/* NORMAL LOGIN */}
            {/* ================================================== */}

            <AppButton
              type="submit"
              loading={loading}
              disabled={loading || googleLoading}
              className="w-full"
            >
              Login
            </AppButton>

            {/* ================================================== */}
            {/* OR DIVIDER */}
            {/* ================================================== */}

            <div className="relative my-5">

              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>

              <div className="relative flex justify-center text-xs">

                <span
                  className="px-3"
                  style={{
                    background:
                      "var(--color-surface-elevated)",
                    color:
                      "var(--color-text-muted)",
                  }}
                >
                  OR
                </span>

              </div>

            </div>

            {/* ================================================== */}
            {/* GOOGLE LOGIN */}
            {/* ================================================== */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading || googleLoading}
              className="
                w-full
                h-11
                rounded-lg
                border
                flex
                items-center
                justify-center
                gap-3
                text-sm
                font-medium
                transition
                hover:bg-muted
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >

              {/* Google Icon */}

              {!googleLoading ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.23c0-.79-.07-1.55-.2-2.28H12v4.31h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.6c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.75 9.75 0 0 0 12 21.6Z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.53 13.69A5.86 5.86 0 0 1 6.22 12c0-.59.1-1.16.31-1.69V7.78H3.28A9.6 9.6 0 0 0 2.25 12c0 1.54.37 2.99 1.03 4.22l3.25-2.53Z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.28c1.43 0 2.72.49 3.74 1.45l2.8-2.8C16.83 3.37 14.63 2.4 12 2.4a9.75 9.75 0 0 0-8.72 5.38l3.25 2.53C7.3 8 9.46 6.28 12 6.28Z"
                  />
                </svg>
              ) : (
                <span
                  className="
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-current
                    border-t-transparent
                    animate-spin
                  "
                />
              )}

              {googleLoading
                ? "Connecting..."
                : "Continue with Google"}

            </button>

            {/* ================================================== */}
            {/* REGISTER */}
            {/* ================================================== */}

            <div className="text-center text-sm">

              <span className="text-muted-foreground">
                Don't have an account?{" "}
              </span>

              <Link
                href="/user/register"
                className="
                  text-primary
                  font-medium
                  hover:underline
                "
              >
                Register
              </Link>

            </div>

          </form>

        </CardContent>

      </div>

    </Card>
  );
}