

"use client";

export default function UserInfoCard({
  fullName = "",
  email = "",
  phone = "",
  address = "",
}) {
  const info = [
    {
      label: "Full Name",
      value: fullName || "-",
    },
    {
      label: "Email",
      value: email || "-",
    },
    {
      label: "Phone",
      value: phone || "-",
    },
    {
      label: "Address",
      value: address || "Address not available",
    },
  ];

  return (
    <section
      className="
        rounded-[var(--radius-lg)]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface-elevated)]
        p-6 sm:p-8
        shadow-[var(--shadow-sm)]
      "
    >
      {/* Header */}

      <div className="mb-6">
        <h2
          className="
            text-xl
            font-semibold
            text-[var(--color-foreground)]
          "
        >
          Basic Information
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-[var(--color-foreground-muted)]
          "
        >
          Your personal account information.
        </p>
      </div>


      {/* Information Grid */}

      <div
        className="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
        "
      >
        {info.map((item) => (
          <div
            key={item.label}
            className="
              rounded-[var(--radius-md)]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-4
              transition-all
              duration-300
              hover:shadow-[var(--shadow-sm)]
            "
          >
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-[var(--color-foreground-muted)]
              "
            >
              {item.label}
            </p>

            <p
              className="
                mt-2
                text-base
                font-semibold
                text-[var(--color-foreground)]
                break-words
              "
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}