"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import ProviderList from "@/components/home/ProviderList";
import { useAuth } from "@/context/AuthContext";
import { nearbyProviders } from "@/api/providerAuthApi";

function ServiceProvidersInner() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { auth } = useAuth();
  const userLoggedIn = auth.isAuthenticated;

  const serviceId = params.id;
  const serviceName = searchParams.get("name") || "Service";

  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  // ==============================
  // LOGIN CHECK
  // ==============================

  useEffect(() => {
    if (!userLoggedIn) {
      alert("Please login to view providers for this service.");
      router.push("/user/login");
    }
  }, [userLoggedIn, router]);

  // ==============================
  // GET LOCATION
  // ==============================

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Location Error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  // ==============================
  // FETCH NEARBY PROVIDERS
  // ==============================

  useEffect(() => {
    if (
      location.latitude === null ||
      location.longitude === null
    ) {
      return;
    }

    const fetchProviders = async () => {
      try {
        setLoading(true);

        const response = await nearbyProviders(
          location.latitude,
          location.longitude
        );

        const nearbyData = response.data?.data;

        const allProviders = Array.isArray(nearbyData)
          ? nearbyData
          : [];

        // ==========================================
        // FILTER: SIRF ISI SERVICE KE PROVIDERS
        // ==========================================

        const filtered = allProviders.filter(
          (provider) =>
            String(provider.service) === String(serviceId)
        );

        setProviders(filtered);
      } catch (error) {
        console.error(
          "NEARBY PROVIDERS ERROR:",
          error.response?.data || error
        );

        setProviders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [location.latitude, location.longitude, serviceId]);

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <button
          type="button"
          onClick={() => router.push("/")}
          className="
            mb-6
            flex
            items-center
            gap-2
            text-sm
            font-semibold
          "
          style={{
            color: "var(--color-primary)",
          }}
        >
          <ArrowLeft size={16} />
          Back to services
        </button>

        <h1
          className="mb-8 text-2xl font-bold capitalize"
          style={{
            color: "var(--color-foreground)",
          }}
        >
          {serviceName} Providers
        </h1>

        <ProviderList
          providers={providers}
          loading={loading}
        />

      </div>
    </main>
  );
}

export default function ServiceProvidersPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <ServiceProvidersInner />
    </Suspense>
  );
}