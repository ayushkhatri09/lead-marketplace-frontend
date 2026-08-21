// "use client";

// import { useRouter } from "next/navigation";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { UserPlus, BriefcaseBusiness } from "lucide-react";

// export default function RegisterDropdown() {
//   const router = useRouter();

//   return (
//     <DropdownMenu>
//     <DropdownMenuTrigger>
//   Register
// </DropdownMenuTrigger>
   

//       <DropdownMenuContent
//         align="end"
//         className="
//           w-56
//           rounded-[var(--radius-lg)]
//           border
//           border-[var(--color-border)]
//           bg-[var(--color-surface-elevated)]
//           shadow-[var(--shadow-lg)]
//           p-2
//         "
//       >
//         <DropdownMenuItem
//           onClick={() => router.push("/user/register")}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <UserPlus className="h-4 w-4" />
//           User Register
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => router.push("/provider/register")}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <BriefcaseBusiness className="h-4 w-4" />
//           Provider Register
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

// import { UserPlus, BriefcaseBusiness } from "lucide-react";

// export default function RegisterDropdown() {
//   const router = useRouter();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger
//         className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--color-border)] bg-transparent px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)] focus:outline-none"
//       >
//         Register
//       </DropdownMenuTrigger>

//       <DropdownMenuContent
//         align="end"
//         className="w-56 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-[var(--shadow-lg)]"
//       >
//         <DropdownMenuItem
//           onClick={() => router.push("/user/register")}
//           className="flex cursor-pointer items-center gap-2"
//         >
//           <UserPlus className="h-4 w-4" />
//           User Register
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => router.push("/provider/register")}
//           className="flex cursor-pointer items-center gap-2"
//         >
//           <BriefcaseBusiness className="h-4 w-4" />
//           Provider Register
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
  UserPlus,
  BriefcaseBusiness,
} from "lucide-react";

export default function RegisterDropdown() {
  const router = useRouter();

  return (
    <DropdownMenu>

      {/* ==============================
          REGISTER BUTTON
      ============================== */}

      <DropdownMenuTrigger
        className="
          inline-flex
          h-10
          items-center
          justify-center
          rounded-md
          border
          border-[var(--color-border)]
          bg-transparent
          px-5
          text-sm
          font-semibold
          text-[var(--color-foreground)]
          transition-colors
          hover:bg-[var(--color-surface)]
          focus:outline-none
        "
      >
        Register
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

        {/* USER REGISTER */}

        <DropdownMenuItem
          onClick={() => router.push("/user/register")}
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
            <UserPlus
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
                color: "var(--color-foreground)",
              }}
            >
              User Register
            </span>

            <span
              className="
                text-xs
              "
              style={{
                color: "var(--color-foreground-muted)",
              }}
            >
              Create customer account
            </span>
          </div>
        </DropdownMenuItem>

        {/* PROVIDER REGISTER */}

        <DropdownMenuItem
          onClick={() => router.push("/provider/register")}
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
              background: "var(--status-info-bg)",
              color: "var(--color-secondary)",
            }}
          >
            <BriefcaseBusiness
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
                color: "var(--color-foreground)",
              }}
            >
              Provider Register
            </span>

            <span
              className="
                text-xs
              "
              style={{
                color: "var(--color-foreground-muted)",
              }}
            >
              Join as professional
            </span>
          </div>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}