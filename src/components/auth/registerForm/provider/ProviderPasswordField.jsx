"use client";

import { useState } from "react";

import { Eye, EyeOff, Lock } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fieldStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-surface)",
  transitionDuration: "var(--duration-fast, 150ms)",
};

export default function ProviderPasswordField({
  register,
  errors,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <Label
        htmlFor="password"
        style={{
          color: "var(--color-foreground-secondary)",
        }}
      >
        Password
      </Label>

      <div className="relative">

        <Lock
          className="
            absolute
            left-3
            top-1/2
            h-4
            w-4
            -translate-y-1/2
          "
          style={{
            color: "var(--color-foreground-muted)",
          }}
        />

        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="pl-10 pr-10"
          style={fieldStyle}
          {...register("password")}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
          "
          style={{
            color: "var(--color-foreground-muted)",
          }}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>

      </div>

      {errors?.password && (
        <p
          className="text-sm"
          style={{
            color: "var(--color-danger)",
          }}
        >
          {errors.password.message}
        </p>
      )}
    </div>
  );
}