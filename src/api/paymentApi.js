import apiClient from "./client";

// Create Razorpay Order
export const createOrder = (leadId) => {
  return apiClient.post("/Payment/create-order/", {
    lead_id: leadId,
  });
};

// Verify Payment (Next Step)
export const verifyPayment = (data) => {
  return apiClient.post("/Payment/verify-payment/", data);
};