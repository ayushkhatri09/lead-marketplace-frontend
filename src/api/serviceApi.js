import apiClient from "./client";

export const serviceList = () => {
  return apiClient.get("/Service/list/");
};