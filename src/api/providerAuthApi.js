// import apiClient from "./client";


// export const providerRegister = (formData) => {
//   return apiClient.post(
//     "/Provider/register/",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
// };

// export const providerLogin = (data) => {
//   return apiClient.post("/Provider/login/", data);
// };

// export const providerProfile = () => {
//   return apiClient.get("/Provider/profile/");
// };

// export const providerLogout = (refreshToken) => {
//   return apiClient.post("/Provider/logout/", {
//     refresh: refreshToken,
//   });
// };

// export const nearbyProviders = (
//   lat,
//   lng
// ) => {

//   return apiClient.get(
//     "/Provider/nearby/",
//     {
//       params: {
//         lat,
//         lng,
//       },
//     }
//   );

// };

// export const toggleProviderActive = () => {
//   return apiClient.post("/Provider/toggle-active/");
// };

import apiClient from "./client";

export const providerRegister = (formData) => {
  return apiClient.post(
    "/Provider/register/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const providerLogin = (data) => {
  return apiClient.post("/Provider/login/", data);
};

export const providerGoogleLogin = () => {
  return apiClient.get("/Provider/google/login/");
};

export const providerProfile = () => {
  return apiClient.get("/Provider/profile/");
};

export const providerLogout = (refreshToken) => {
  return apiClient.post("/Provider/logout/", {
    refresh: refreshToken,
  });
};

export const nearbyProviders = (lat, lng) => {
  return apiClient.get(
    "/Provider/nearby/",
    {
      params: {
        lat,
        lng,
      },
    }
  );
};

export const toggleProviderActive = () => {
  return apiClient.post("/Provider/toggle-active/");
};

export const providerGoogleExchange = (code) => {
  return apiClient.post(
    "/Provider/google/exchange/",
    { code }
  );
};

export const providerOnboarding = (formData) => {
  return apiClient.patch(
    "/Provider/onboarding/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};