// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { Button } from "@/components/ui/button";

// import { User, Briefcase } from "lucide-react";

// export default function LoginDropdown() {
//     const router = useRouter();
//   return (
//     <DropdownMenu>
//     <DropdownMenuTrigger>
//   <span
//     className="
//       inline-flex
//       items-center
//       justify-center
//       rounded-md
//       border
//       border-[var(--color-border)]
//       bg-[var(--color-surface)]
//       px-4
//       py-2
//       text-sm
//       font-medium
//       text-[var(--color-foreground)]
//       shadow-sm
//       transition-all
//       duration-300
//       hover:bg-[var(--state-hover-overlay)]
//       hover:border-[var(--border-hover)]
//       active:scale-95
//     "
//   >
//     Login
//   </span>
// </DropdownMenuTrigger>

//       <DropdownMenuContent
//         align="end"
//         className="
//           w-52
//           rounded-[var(--radius-lg)]
//           border
//           border-[var(--color-border)]
//           bg-[var(--color-surface-elevated)]
//           shadow-[var(--shadow-lg)]
//           p-2
//         "
//       >
//         <DropdownMenuItem
//   onClick={() => router.push("/user/login")}
//   className="flex items-center gap-2 cursor-pointer"
// >
//   <User className="h-4 w-4" />
//   User Login
// </DropdownMenuItem>

// <DropdownMenuItem
//   onClick={() => router.push("/provider/login")}
//   className="flex items-center gap-2 cursor-pointer"
// >
//   <Briefcase className="h-4 w-4" />
//   Provider Login
// </DropdownMenuItem>
        
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { User, Briefcase } from "lucide-react";


// export default function LoginDropdown() {

//   const router = useRouter();


//   return (
//     <DropdownMenu>

//       <DropdownMenuTrigger asChild>
//         <button
//           type="button"
//           className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] shadow-sm transition-all duration-300 hover:bg-[var(--state-hover-overlay)] hover:border-[var(--border-hover)] active:scale-95"
//         >
//           Login
//         </button>
//       </DropdownMenuTrigger>


//       <DropdownMenuContent
//         align="end"
//         className="w-52 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-[var(--shadow-lg)]"
//       >

//         <DropdownMenuItem
//           onClick={() => router.push("/user/login")}
//           className="flex cursor-pointer items-center gap-2"
//         >
//           <User className="h-4 w-4" />
//           User Login
//         </DropdownMenuItem>


//         <DropdownMenuItem
//           onClick={() => router.push("/provider/login")}
//           className="flex cursor-pointer items-center gap-2"
//         >
//           <Briefcase className="h-4 w-4" />
//           Provider Login
//         </DropdownMenuItem>

//       </DropdownMenuContent>

//     </DropdownMenu>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { User, Briefcase } from "lucide-react";


// export default function LoginDropdown() {

//   const router = useRouter();


//   return (
//     <DropdownMenu>

//       <DropdownMenuTrigger
//         className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] shadow-sm transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--state-hover-overlay)] active:scale-95"
//       >
//         Login
//       </DropdownMenuTrigger>


//       <DropdownMenuContent
//         align="end"
//         className="w-52 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-[var(--shadow-lg)]"
//       >

//         <DropdownMenuItem
//           onClick={() => router.push("/user/login")}
//           className="flex cursor-pointer items-center gap-2"
//         >
//           <User className="h-4 w-4" />

//           User Login
//         </DropdownMenuItem>


//         <DropdownMenuItem
//           onClick={() => router.push("/provider/login")}
//           className="flex cursor-pointer items-center gap-2"
//         >
//           <Briefcase className="h-4 w-4" />

//           Provider Login
//         </DropdownMenuItem>

//       </DropdownMenuContent>

//     </DropdownMenu>
//   );
// }

"use client";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  User,
  Briefcase,
} from "lucide-react";

export default function LoginDropdown() {
  const router = useRouter();

  return (
    <DropdownMenu>

      {/* ==============================
          LOGIN BUTTON
      ============================== */}

      <DropdownMenuTrigger
        className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--color-border)] bg-transparent px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)] focus:outline-none"
      >
        Login
      </DropdownMenuTrigger>

      {/* ==============================
          DROPDOWN
      ============================== */}

      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={28}
        collisionPadding={12}
        className="
          z-[99999]
          w-64
          rounded-2xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface-elevated)]
          p-2
          shadow-[var(--shadow-lg)]
        "
      >

        {/* USER LOGIN */}

        <DropdownMenuItem
          onClick={() => router.push("/user/login")}
          className="
            flex
            cursor-pointer
            items-center
            gap-3
            rounded-xl
            px-3
            py-3
            outline-none
            transition-colors
            hover:bg-[var(--state-hover-overlay)]
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
            "
            style={{
              background: "var(--state-selected-bg)",
              color: "var(--color-primary)",
            }}
          >
            <User
              size={17}
              strokeWidth={2}
            />
          </span>

          <div className="flex flex-col">
            <span
              className="
                text-sm
                font-semibold
              "
              style={{
                color:
                  "var(--color-foreground)",
              }}
            >
              User Login
            </span>

            <span
              className="
                text-xs
              "
              style={{
                color:
                  "var(--color-foreground-muted)",
              }}
            >
              Login as customer
            </span>
          </div>
        </DropdownMenuItem>

        {/* PROVIDER LOGIN */}

        <DropdownMenuItem
          onClick={() =>
            router.push("/provider/login")
          }
          className="
            flex
            cursor-pointer
            items-center
            gap-3
            rounded-xl
            px-3
            py-3
            outline-none
            transition-colors
            hover:bg-[var(--state-hover-overlay)]
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
            "
            style={{
              background:
                "var(--status-info-bg)",
              color:
                "var(--color-secondary)",
            }}
          >
            <Briefcase
              size={17}
              strokeWidth={2}
            />
          </span>

          <div className="flex flex-col">
            <span
              className="
                text-sm
                font-semibold
              "
              style={{
                color:
                  "var(--color-foreground)",
              }}
            >
              Provider Login
            </span>

            <span
              className="
                text-xs
              "
              style={{
                color:
                  "var(--color-foreground-muted)",
              }}
            >
              Login as professional
            </span>
          </div>
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  );
}