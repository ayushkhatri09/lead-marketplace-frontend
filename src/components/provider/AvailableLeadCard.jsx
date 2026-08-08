
"use client";

import {
  User,
  MapPin,
  Clock,
  FileText,
  Wrench,
} from "lucide-react";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import PaymentModal from "./PaymentModal";

import {
  createOrder,
  verifyPayment,
} from "@/api/paymentApi";

export default function AvailableLeadCard({
  lead,
  onAccept,
}) {
  const [openPayment, setOpenPayment] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // --------------------------------
      // 1. Create Razorpay Order
      // --------------------------------

      const { data } = await createOrder(lead.id);

      console.log("CREATE ORDER RESPONSE:", data);

      // --------------------------------
      // 2. Check Razorpay SDK
      // --------------------------------

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded.");
        return;
      }

      // --------------------------------
      // 3. Razorpay Options
      // --------------------------------

      const options = {
        key: data.key,

        amount: Number(data.amount) * 100,

        currency: "INR",

        name: "Lead Marketplace",

        description: "Purchase Customer Lead",

        order_id: data.order_id,

        handler: async function (paymentResponse) {
          console.log(
            "RAZORPAY PAYMENT RESPONSE:",
            paymentResponse
          );

          try {
            // --------------------------------
            // 4. Verify Payment Backend
            // --------------------------------

            setLoading(true);

            const verifyResponse = await verifyPayment({
              razorpay_order_id:
                paymentResponse.razorpay_order_id,

              razorpay_payment_id:
                paymentResponse.razorpay_payment_id,

              razorpay_signature:
                paymentResponse.razorpay_signature,
            });

            console.log(
              "VERIFY PAYMENT RESPONSE:",
              verifyResponse.data
            );

            // --------------------------------
            // 5. Payment + Lead Assignment Success
            // --------------------------------

            alert(
              "Payment Successful! Lead assigned to you."
            );

            setOpenPayment(false);

            // --------------------------------
            // 6. Remove lead from Available Leads
            // --------------------------------

            if (onAccept) {
              onAccept(lead.id);
            }

          } catch (error) {
            console.error(
              "PAYMENT VERIFICATION ERROR:",
              error
            );

            alert(
              "Payment successful, but lead verification failed. Please contact support."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Razorpay payment popup closed.");
          },
        },

        prefill: {
          name: "Provider",
        },

        theme: {
          color: "#2563eb",
        },
      };

      // --------------------------------
      // 7. Open Razorpay
      // --------------------------------

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error(
        "CREATE PAYMENT ERROR:",
        error
      );

      console.error(
        "BACKEND ERROR:",
        error?.response?.data
      );

      alert(
        error?.response?.data?.message ||
        "Unable to create payment order."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

            <Wrench
              className="text-blue-600"
              size={22}
            />

          </div>

          <div>

            <h3 className="text-lg font-bold">
              {lead.service_name}
            </h3>

            <p className="text-sm text-gray-500">
              New Customer Lead
            </p>

          </div>

        </div>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
          Pending
        </span>

      </div>


      {/* Customer */}

      <div className="mt-6 flex items-start gap-3">

        <User
          size={18}
          className="mt-1 text-blue-600"
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

          <p>
            {lead.address}
          </p>

        </div>

      </div>


      {/* Description */}

      <div className="mt-5 flex items-start gap-3">

        <FileText
          size={18}
          className="mt-1 text-green-600"
        />

        <div>

          <p className="text-sm text-gray-500">
            Description
          </p>

          <p>
            {lead.description}
          </p>

        </div>

      </div>


      {/* Time */}

      <div className="mt-5 flex items-center gap-3">

        <Clock
          size={18}
          className="text-gray-500"
        />

        <span className="text-sm text-gray-500">
          {new Date(
            lead.created_at
          ).toLocaleString()}
        </span>

      </div>


      {/* Accept Lead */}

      <div className="mt-6">

        <Button
          onClick={() => setOpenPayment(true)}
          disabled={loading}
          className="w-full"
        >
          {loading
            ? "Processing..."
            : "Accept Lead"}
        </Button>

      </div>


      {/* Payment Modal */}

      <PaymentModal
        open={openPayment}
        onClose={() => setOpenPayment(false)}
        onPayment={handlePayment}
        loading={loading}
        lead={lead}
      />

    </div>
  );
}
