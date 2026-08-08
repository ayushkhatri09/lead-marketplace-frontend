import apiClient from "./client";

export const createLead = (data) => {
  return apiClient.post("/Lead/create/", data);
};

export const getMyLeads = () => {
  return apiClient.get(
    "/Lead/my-leads/"
  );
};

export const getProviderLeads = () => {
  return apiClient.get("/Lead/provider-leads/");
};

export const getProviderHistory = () => {
  return apiClient.get("/Lead/provider-history/");
};

export const purchaseLead = (leadId) => {
  return apiClient.post(`/Lead/purchase/${leadId}/`);
};
