"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, LoaderCircle, ShieldCheck } from "lucide-react";
import { getProviderLeads, purchaseLead } from "@/api/leadApi";

export default function ProviderPaymentPage() {
  const params = useParams();
  const router = useRouter();
  const leadId = Number(params.leadId);
  const isValidLeadId = Number.isInteger(leadId);
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(isValidLeadId);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLead() {
      try {
        const response = await getProviderLeads();
        const selectedLead = (response.data.data || []).find((item) => item.id === leadId);
        if (!selectedLead) {
          setError("This lead is no longer available.");
          return;
        }
        setLead(selectedLead);
      } catch (requestError) {
        setError(requestError.response?.data?.message || "Unable to load this lead.");
      } finally {
        setLoading(false);
      }
    }

    if (isValidLeadId) loadLead();
  }, [isValidLeadId, leadId]);

  async function handlePayment() {
    setPaying(true);
    setError("");
    try {
      await purchaseLead(lead.id);
      router.push("/provider");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Payment could not be completed. Please try again.");
      setPaying(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-12">
      <div className="mx-auto max-w-xl">
        <button type="button" onClick={() => router.push("/provider")} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">
          <ArrowLeft className="h-4 w-4" /> Back to leads
        </button>

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            <CreditCard className="h-6 w-6" />
          </div>
          <h1 className="mt-5 text-3xl font-bold">Complete payment</h1>
          <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
            Once payment is confirmed, this lead is assigned to you and the customer&apos;s phone number is unlocked.
          </p>

          {loading ? (
            <div className="flex h-40 items-center justify-center text-[var(--color-foreground-muted)]"><LoaderCircle className="mr-2 h-5 w-5 animate-spin" /> Loading payment details...</div>
          ) : lead ? (
            <>
              <div className="mt-6 rounded-2xl bg-[var(--color-muted)] p-5">
                <p className="text-sm text-[var(--color-foreground-muted)]">Lead summary</p>
                <h2 className="mt-1 text-lg font-semibold">{lead.service_name}</h2>
                <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">{lead.description}</p>
                <p className="mt-3 text-sm font-medium">Customer: {lead.user_name}</p>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                <ShieldCheck className="h-5 w-5 shrink-0" /> Secure lead purchase. Contact details remain hidden until payment succeeds.
              </div>

              {error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}

              <button type="button" disabled={paying} onClick={handlePayment} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                {paying && <LoaderCircle className="h-5 w-5 animate-spin" />}
                {paying ? "Processing payment..." : "Pay & accept lead"}
              </button>
            </>
          ) : (
            <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error || "Invalid lead."}</p>
          )}
        </section>
      </div>
    </main>
  );
}
