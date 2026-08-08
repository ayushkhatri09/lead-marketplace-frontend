"use client";

import providerKYCFields from "./providerKYCFields";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fieldStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-surface)",
  transitionDuration: "var(--duration-fast, 150ms)",
};

export default function ProviderRegisterKYCFields({
  register,
  errors,
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3
          className="text-lg font-semibold"
          style={{
            color: "var(--color-foreground)",
          }}
        >
          KYC Documents
        </h3>

        <p
          className="text-sm mt-1"
          style={{
            color: "var(--color-foreground-secondary)",
          }}
        >
          Upload your KYC documents (Optional).
        </p>
      </div>

      {providerKYCFields.map((field) => (
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
            accept={field.accept}
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
    </div>
  );
}