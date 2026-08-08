

"use client";

import LeadCard from "./LeadCard";

export default function UserLeads({ leads = [] }) {
  return (
    <section
      className="
        rounded-[var(--radius-lg)]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface-elevated)]
        p-6
        shadow-[var(--shadow-sm)]
      "
    >

      {/* Header */}

      <div
        className="
          mb-6
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        <div>

          <h2
            className="
              text-xl
              font-semibold
              text-[var(--color-foreground)]
            "
          >
            My Leads
          </h2>


          <p
            className="
              mt-1
              text-sm
              text-[var(--color-foreground-muted)]
            "
          >
            View all the service requests you have created.
          </p>

        </div>



        {/* Count Badge */}

        <span
          className="
            w-fit
            rounded-full
            bg-[var(--color-muted)]
            px-4
            py-1.5
            text-sm
            font-medium
            text-[var(--color-foreground-secondary)]
          "
        >
          {leads.length} Leads
        </span>


      </div>



      {/* Empty State */}

      {leads.length === 0 ? (

        <div
          className="
            rounded-[var(--radius-md)]
            border
            border-dashed
            border-[var(--color-border)]
            py-12
            text-center
          "
        >

          <h3
            className="
              text-lg
              font-semibold
              text-[var(--color-foreground)]
            "
          >
            No Leads Yet
          </h3>


          <p
            className="
              mt-2
              text-sm
              text-[var(--color-foreground-muted)]
            "
          >
            Create your first service request to see your lead history here.
          </p>


        </div>


      ) : (


        <div
          className="
            grid
            gap-4
          "
        >

          {leads.map((lead) => (

            <LeadCard
              key={lead.id}
              lead={lead}
            />

          ))}


        </div>


      )}


    </section>
  );
}