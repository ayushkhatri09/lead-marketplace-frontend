"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function PaymentModal({
  open,
  onClose,
  onPayment,
  loading,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Purchase Lead
          </DialogTitle>

          <DialogDescription>
            Pay ₹99 to unlock this lead.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <p className="font-semibold">
              Lead Charge
            </p>

            <p className="mt-2 text-3xl font-bold">
              ₹99
            </p>
          </div>

         <Button
 onClick={onPayment}
 disabled={loading}
>
{
 loading 
 ? "Processing..."
 : "Pay ₹99"
}
</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}