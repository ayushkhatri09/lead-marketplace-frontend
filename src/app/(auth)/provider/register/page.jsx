import ProviderRegisterForm from "@/components/auth/ProviderRegisterForm";

export default function ProviderRegisterPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] py-10 px-6">
      <div className="mx-auto max-w-lg">
        <ProviderRegisterForm />
      </div>
    </main>
  );
}