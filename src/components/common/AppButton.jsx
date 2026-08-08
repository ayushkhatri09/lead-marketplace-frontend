import { Button } from "@/components/ui/button";

export default function AppButton({
  children,
  type = "button",
  variant = "default",
  className = "",
  loading = false,
  asChild: _asChild,
  ...props
}) {
  return (
    <Button
      type={type}
      variant={variant}
      className={`w-full ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </Button>
  );
}