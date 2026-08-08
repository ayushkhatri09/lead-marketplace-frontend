"use client";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserPlus, BriefcaseBusiness } from "lucide-react";

export default function RegisterDropdown() {
  const router = useRouter();

  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
  Register
</DropdownMenuTrigger>
   

      <DropdownMenuContent
        align="end"
        className="
          w-56
          rounded-[var(--radius-lg)]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface-elevated)]
          shadow-[var(--shadow-lg)]
          p-2
        "
      >
        <DropdownMenuItem
          onClick={() => router.push("/user/register")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <UserPlus className="h-4 w-4" />
          User Register
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => router.push("/provider/register")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <BriefcaseBusiness className="h-4 w-4" />
          Provider Register
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}