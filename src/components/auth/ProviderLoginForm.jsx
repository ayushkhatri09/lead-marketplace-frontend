

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { providerLogin } from "@/api/providerAuthApi.js";
import { useProviderAuth } from "@/context/ProviderAuthContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ProviderLoginFields from "./loginForm/provider/ProviderLoginFields.jsx";
import ProviderLoginButton from "./loginForm/provider/ProviderLoginButton.jsx";

export default function ProviderLoginForm() {
   const router = useRouter();

  const { login } = useProviderAuth();

  const [loading, setLoading] = useState(false);

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    setLoading(true);

    const response = await providerLogin(data);

    console.log(response.data);

    login(response.data);

    router.push("/");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message || "Provider login failed."
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <Card
      className="w-full max-w-md border"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface-elevated)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <CardHeader>
        <CardTitle>Provider Login</CardTitle>

        <CardDescription>
          Login to access your provider dashboard.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <ProviderLoginFields
            register={register}
            errors={errors}
          />

          <ProviderLoginButton loading={loading} />
        </form>
      </CardContent>
    </Card>
  );
}