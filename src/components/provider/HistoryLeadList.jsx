"use client";

import { useEffect, useState } from "react";

import ProviderHistoryCard from "./ProviderHistoryCard";
import { getProviderHistory } from "@/api/leadApi";

export default function HistoryLeadList() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      setLoading(true);

      const response = await getProviderHistory();

      console.log("Provider History:", response.data);

      setHistory(response.data.data || []);
    } catch (error) {
      console.error("Provider History Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <section className="mt-12">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            My Accepted Leads
          </h2>

          <p className="mt-2 text-gray-500">
            Leads accepted by you.
          </p>

        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {history.length} Leads
        </span>

      </div>

      {/* Loading */}

      {loading && (
        <div className="flex h-52 items-center justify-center rounded-3xl border bg-white">
          <p className="text-lg font-medium">
            Loading History...
          </p>
        </div>
      )}

      {/* Empty */}

      {!loading && history.length === 0 && (
        <div className="flex h-52 items-center justify-center rounded-3xl border bg-white">
          <p className="text-gray-500">
            No Accepted Leads Yet
          </p>
        </div>
      )}

      {/* Cards */}

      {!loading && history.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {history.map((lead) => (
            <ProviderHistoryCard
              key={lead.id}
              lead={lead}
            />
          ))}

        </div>
      )}

    </section>
  );
}