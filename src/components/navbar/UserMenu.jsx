

"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut,PlusCircle } from "lucide-react";

export default function UserMenu() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/user/login");
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
            [transition:var(--transition-hover)]
            hover:shadow-[var(--shadow-md)]
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
            Us
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
          <p
            className="
              text-sm
              font-semibold
              text-[var(--color-foreground)]
            "
          >
            Account
          </p>

          <p
            className="
              text-xs
              text-[var(--color-foreground-muted)]
            "
          >
            Manage your profile and session
          </p>
        </div>

        <DropdownMenuSeparator
          className="
            my-2
            bg-[var(--color-divider)]
          "
        />

        <DropdownMenuItem
  onClick={() => router.push("/user/profile")}
  className="
    cursor-pointer
    rounded-[var(--radius-md)]
    px-3
    py-2
    text-[var(--color-foreground)]
    [transition:var(--transition-hover)]
    hover:bg-[var(--state-hover-overlay)]
    focus:bg-[var(--state-hover-overlay)]
  "
>
  <User className="mr-2 h-4 w-4 text-[var(--color-foreground-muted)]" />
  View Profile
</DropdownMenuItem>
{/* <DropdownMenuItem
  onClick={() => router.push("/user/create-lead")}
  className="
    cursor-pointer
    rounded-[var(--radius-md)]
    px-3
    py-2
    text-[var(--color-foreground)]
    [transition:var(--transition-hover)]
    hover:bg-[var(--state-hover-overlay)]
    focus:bg-[var(--state-hover-overlay)]
  "
>
  <PlusCircle className="mr-2 h-4 w-4 text-[var(--color-primary)]" />
  Create Lead
</DropdownMenuItem> */}
        <DropdownMenuItem
          onClick={handleLogout}
          className="
            cursor-pointer
            rounded-[var(--radius-md)]
            px-3
            py-2
            text-[var(--color-danger)]
            [transition:var(--transition-hover)]
            hover:bg-[var(--status-danger-bg)]
            focus:bg-[var(--status-danger-bg)]
          "
        >
          <LogOut className="mr-2 h-4 w-4" />

          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


