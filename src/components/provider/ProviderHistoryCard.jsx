"use client";

import {
  User,
  Phone,
  MapPin,
  Clock,
  Wrench,
  CheckCircle,
} from "lucide-react";

export default function ProviderHistoryCard({ lead }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Wrench
              size={22}
              className="text-green-600"
            />
          </div>

          <div>

            <h3 className="text-lg font-bold">
              {lead.service_name}
            </h3>

            <p className="text-sm text-gray-500">
              Completed Purchase
            </p>

          </div>

        </div>

        <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

          <CheckCircle size={14} />

          Accepted

        </span>

      </div>

      {/* Customer */}

      <div className="mt-6 flex items-center gap-3">

        <User
          size={18}
          className="text-blue-600"
        />

        <div>

          <p className="text-sm text-gray-500">
            Customer
          </p>

          <p className="font-semibold">
            {lead.user_name}
          </p>

        </div>

      </div>

      {/* Phone */}

      <div className="mt-5 flex items-center gap-3">

        <Phone
          size={18}
          className="text-green-600"
        />

        <div>

          <p className="text-sm text-gray-500">
            Phone
          </p>

          <p className="font-semibold">
            {lead.user_phone || "Hidden"}
          </p>

        </div>

      </div>

      {/* Address */}

      <div className="mt-5 flex items-start gap-3">

        <MapPin
          size={18}
          className="mt-1 text-red-500"
        />

        <div>

          <p className="text-sm text-gray-500">
            Address
          </p>

          <p>{lead.address}</p>

        </div>

      </div>

      {/* Time */}

      <div className="mt-5 flex items-center gap-3">

        <Clock
          size={18}
          className="text-gray-500"
        />

        <span className="text-sm text-gray-500">
          {new Date(lead.created_at).toLocaleString()}
        </span>

      </div>

    </div>
  );
}