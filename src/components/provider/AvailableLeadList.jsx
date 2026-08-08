"use client";

import { useEffect, useState } from "react";

import AvailableLeadCard from "./AvailableLeadCard";
import { getProviderLeads } from "@/api/leadApi";

export default function AvailableLeadList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const response = await getProviderLeads();

      console.log("Provider Leads:", response.data);

      setLeads(response.data.data);
    } catch (error) {
      console.error("Provider Leads Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleAccept = (lead) => {
    console.log("Selected Lead:", lead);

    // Next Step
    // Payment Page Open Hoga
  };

  return (
    <section className="mt-12">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Available Leads
          </h2>

          <p className="mt-2 text-gray-500">
            New customer requests matching your service.
          </p>

        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {leads.length} Leads
        </span>

      </div>

      {/* Loading */}

      {loading && (
        <div className="flex h-48 items-center justify-center rounded-3xl border bg-white">
          <p className="text-lg font-medium">
            Loading Leads...
          </p>
        </div>
      )}

      {/* Empty */}

      {!loading && leads.length === 0 && (
        <div className="flex h-48 items-center justify-center rounded-3xl border bg-white">
          <p className="text-lg text-gray-500">
            No Available Leads
          </p>
        </div>
      )}

      {/* List */}

      {!loading && leads.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {leads.map((lead) => (
            <AvailableLeadCard
              key={lead.id}
              lead={lead}
              onAccept={handleAccept}
            />
          ))}

        </div>
      )}

    </section>
  );
}