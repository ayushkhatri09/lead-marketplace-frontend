
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export default function ProfileHeader({
  fullName = "",
  email = "",
  phone = "",
  profileImage = "",
}) {
  const initials =
    fullName
      ?.trim()
      ?.split(" ")
      ?.map((item) => item[0])
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() || "U";

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[var(--radius-xl)]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface-elevated)]
        shadow-[var(--shadow-md)]
      "
    >
      {/* Top Accent */}
      <div
        className="
          h-28
          bg-gradient-to-r
          from-[var(--color-primary)]
          to-[var(--primary-hover)]
        "
      />

      <div className="relative px-6 pb-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
          {/* Avatar */}
          <Avatar
            className="
              -mt-14
              h-28
              w-28
              border-4
              border-[var(--color-surface-elevated)]
              shadow-[var(--shadow-lg)]
            "
          >
            <AvatarImage src={profileImage} />

            <AvatarFallback
              className="
                bg-[var(--color-primary)]
                text-[var(--color-primary-foreground)]
                text-3xl
                font-bold
              "
            >
              {initials}
            </AvatarFallback>
          </Avatar>

          {/* User Info */}
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1
                className="
                  text-3xl
                  font-bold
                  text-[var(--color-foreground)]
                "
              >
                {fullName || "User Name"}
              </h1>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[var(--status-success-bg)]
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-[var(--color-success)]
                "
              >
                <ShieldCheck size={14} />
                Verified
              </span>
            </div>

            <div
              className="
                flex
                flex-col
                gap-3
                text-sm
                text-[var(--color-foreground-muted)]
                sm:flex-row
                sm:items-center
              "
            >
              <div className="flex items-center gap-2">
                <Mail size={16} />
                {email || "example@email.com"}
              </div>

              <div className="hidden sm:block text-[var(--color-divider)]">
                •
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                {phone || "+91 XXXXXXXXXX"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}