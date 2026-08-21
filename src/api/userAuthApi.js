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

export const googleUserLogin = async () => {
  try {
    console.log("Starting User Google Login...");

    const response = await apiClient.get("/User/google/login/");

    console.log("User Google Login Response:", response.data);

    const authorizationUrl = response.data?.authorization_url;

    if (!authorizationUrl) {
      throw new Error("Google authorization URL not received.");
    }

    console.log("Redirecting to Google:", authorizationUrl);

    window.location.href = authorizationUrl;
  } catch (error) {
    console.error(
      "User Google Login Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

export const userGoogleExchange = (code) => {
  return apiClient.post("/User/google/exchange/", {
    code,
  });
};

export const userOnboarding = (data) => {
  return apiClient.patch(
    "/User/onboarding/",
    data
  );
};