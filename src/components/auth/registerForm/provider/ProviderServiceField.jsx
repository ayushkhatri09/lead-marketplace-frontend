"use client";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fieldStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-surface)",
  transitionDuration: "var(--duration-fast, 150ms)",
};

export default function ProviderServiceField({
  services,
  loadingServices,
  setValue,
  errors,
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor="service"
        style={{
          color: "var(--color-foreground-secondary)",
        }}
      >
        Service
      </Label>

      <Select
        onValueChange={(value) => {
          setValue("service", value, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
      >
        <SelectTrigger
          id="service"
          className="transition-colors"
          style={fieldStyle}
        >
          <SelectValue placeholder="Select your service" />
        </SelectTrigger>

        <SelectContent
          style={{
            borderColor: "var(--color-border)",
            borderRadius: "var(--radius-md)",
            background: "var(--color-surface-elevated)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {loadingServices ? (
            <SelectItem value="loading" disabled>
              Loading services...
            </SelectItem>
          ) : (
            services.map((service) => (
              <SelectItem
                key={service.id}
                value={String(service.id)}
              >
                {service.name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>

      {errors?.service && (
        <p
          className="text-sm"
          style={{
            color: "var(--color-danger)",
          }}
        >
          {errors.service.message}
        </p>
      )}
    </div>
  );
}