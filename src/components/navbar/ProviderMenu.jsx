"use client";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { User, LogOut, History } from "lucide-react";

import { useProviderAuth } from "@/context/ProviderAuthContext";

export default function ProviderMenu() {
  const router = useRouter();

  const { logout } = useProviderAuth();

  const handleLogout = () => {
    logout();
    router.push("/provider/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="
          rounded-full
          outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--focus-ring)]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[var(--color-background)]
        "
      >
        <Avatar
          className="
            h-10
            w-10
            cursor-pointer
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            shadow-[var(--shadow-sm)]
            hover:shadow-[var(--shadow-md)]
            transition-all
          "
        >
          <AvatarImage src="" />

          <AvatarFallback
            className="
              bg-[var(--color-muted)]
              text-[var(--color-foreground)]
              font-medium
            "
          >
            PR
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-56
          rounded-[var(--radius-lg)]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface-elevated)]
          text-[var(--color-foreground)]
          shadow-[var(--shadow-lg)]
          p-2
        "
      >
        <div className="px-2 py-1.5">
          <p className="text-sm font-semibold">
            Provider Account
          </p>

          <p className="text-xs text-[var(--color-foreground-muted)]">
            Manage your profile and session
          </p>
        </div>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem
          onClick={() => router.push("/provider/profile")}
          className="cursor-pointer"
        >
          <User className="mr-2 h-4 w-4" />
          View Profile
        </DropdownMenuItem>

        {/* <DropdownMenuItem
          onClick={() => router.push("/provider/lead-history")}
          className="cursor-pointer"
        >
          <History className="mr-2 h-4 w-4" />
          Lead History
        </DropdownMenuItem> */}

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem
          onClick={handleLogout}
          className="
            cursor-pointer
            text-[var(--color-danger)]
          "
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}