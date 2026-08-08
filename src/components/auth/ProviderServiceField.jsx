"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

export default function ProviderServiceField({
  services,
  loadingServices,
  register,
  setValue,
}) {
  return (
    <div className="space-y-2">
      <Label>Service</Label>

      {/* Hidden input for react-hook-form */}
      <input type="hidden" {...register("service")} />

      <Select
        onValueChange={(value) =>
          setValue("service", value, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Service" />
        </SelectTrigger>

        <SelectContent>
          {loadingServices ? (
            <SelectItem value="loading" disabled>
              Loading...
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
    </div>
  );
}