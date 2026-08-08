"use client";

import { User, Phone, Mail } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { providerRegisterFields } from "./providerRegisterFields";

const icons = {
  user: User,
  phone: Phone,
  mail: Mail,
};

const fieldStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-surface)",
  transitionDuration: "var(--duration-fast, 150ms)",
};

export default function ProviderBasicFields({
  register,
  errors,
}) {
  return (
    <>
      {providerRegisterFields.map((field) => {
        const Icon = icons[field.icon];

        return (
          <div
            key={field.name}
            className="space-y-2"
          >
            <Label
              htmlFor={field.name}
              style={{
                color: "var(--color-foreground-secondary)",
              }}
            >
              {field.label}
            </Label>

            <div className="relative">
              <Icon
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
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="pl-10"
                style={fieldStyle}
                {...register(field.name)}
              />
            </div>

            {errors?.[field.name] && (
              <p
                className="text-sm"
                style={{
                  color: "var(--color-danger)",
                }}
              >
                {errors[field.name].message}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}