import apiClient from "./client";

export const userRegister=(data)=>{
    return apiClient.post("/User/register/",data);
};

export const userLogin = (data) => {
  return apiClient.post("/User/login/", data);
};

export const userProfile = () => {
  return apiClient.get("/User/profile/");
};

export const userLogout = (refreshToken) => {
  return apiClient.post("/User/logout/", {
    refresh: refreshToken,
  });
};

export const createLead = (data) => apiClient.post("/Lead/create/", data);

export const myLeads = () => apiClient.get("/Lead/my-leads/");