"use client";

import providerLoginFields from "./providerLoginFields";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fieldStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-surface)",
  transitionDuration: "var(--duration-fast, 150ms)",
};

export default function ProviderLoginFields({
  register,
  errors,
}) {
  return (
    <>
      {providerLoginFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label
            htmlFor={field.name}
            style={{
              color: "var(--color-foreground-secondary)",
            }}
          >
            {field.label}
          </Label>

          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            style={fieldStyle}
            {...register(field.name)}
          />

          {errors[field.name] && (
            <p className="text-sm text-red-500">
              {errors[field.name].message}
            </p>
          )}
        </div>
      ))}
    </>
  );
}