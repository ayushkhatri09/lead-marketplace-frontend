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

"use client";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User, Briefcase } from "lucide-react";


export default function LoginDropdown() {

  const router = useRouter();


  return (
    <DropdownMenu>

      <DropdownMenuTrigger
        className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] shadow-sm transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--state-hover-overlay)] active:scale-95"
      >
        Login
      </DropdownMenuTrigger>


      <DropdownMenuContent
        align="end"
        className="w-52 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-[var(--shadow-lg)]"
      >

        <DropdownMenuItem
          onClick={() => router.push("/user/login")}
          className="flex cursor-pointer items-center gap-2"
        >
          <User className="h-4 w-4" />

          User Login
        </DropdownMenuItem>


        <DropdownMenuItem
          onClick={() => router.push("/provider/login")}
          className="flex cursor-pointer items-center gap-2"
        >
          <Briefcase className="h-4 w-4" />

          Provider Login
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  );
}