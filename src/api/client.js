// import axios  from "axios";

// const apiClient=axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//     headers:{
//         "Content-Type":"application/json",
//     },
// });



// apiClient.interceptors.request.use(
//   (config) => {
//     const providerToken = localStorage.getItem("provider_access");
//     const userToken = localStorage.getItem("access_token");

//     const token = providerToken || userToken;

//     if (
//       token &&
//       !config.url.includes("/login/") &&
//       !config.url.includes("/register/") &&
//       !config.url.includes("/token/refresh/")
//     ) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );


// apiClient.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry &&
//       !originalRequest.url.includes("/login/") &&
//       !originalRequest.url.includes("/register/") &&
//       !originalRequest.url.includes("/token/refresh/")
//     ) {
//       originalRequest._retry = true;

//       const isProvider = !!localStorage.getItem("provider_access");

//       const refreshToken = isProvider
//         ? localStorage.getItem("provider_refresh")
//         : localStorage.getItem("refresh_token");

//       const refreshUrl = isProvider
//         ? "/Provider/token/refresh/"
//         : "/User/token/refresh/";

//       try {
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}${refreshUrl}`,
//           {
//             refresh: refreshToken,
//           }
//         );

//         const newAccess = response.data.access;

//         if (isProvider) {
//           localStorage.setItem("provider_access", newAccess);
//         } else {
//           localStorage.setItem("access_token", newAccess);
//         }

//         originalRequest.headers.Authorization = `Bearer ${newAccess}`;

//         return apiClient(originalRequest);

//       } catch (err) {

//         if (isProvider) {
//           localStorage.removeItem("provider_access");
//           localStorage.removeItem("provider_refresh");
//           localStorage.removeItem("provider");

//           window.location.href = "/provider/login";
//         } else {
//           localStorage.removeItem("access_token");
//           localStorage.removeItem("refresh_token");
//           localStorage.removeItem("user");

//           window.location.href = "/user/login";
//         }

//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
// export default apiClient

import axios from "axios";



const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


// ============================================================
// REQUEST INTERCEPTOR
// ============================================================

apiClient.interceptors.request.use(
  (config) => {
    // Public APIs
    const publicUrls = [
      "/Service/list/",
      "/User/login/",
      "/User/register/",
      "/Provider/login/",
      "/Provider/google/login/",
      "/Provider/register/",
      "/User/token/refresh/",
      "/Provider/token/refresh/",
      "/Provider/google/exchange/",
      "/User/google/exchange/",
      "/User/google/login/",
    ];

    const isPublicRequest = publicUrls.some((url) =>
      config.url?.includes(url)
    );

    // Public request hai to Authorization mat bhejo
    if (isPublicRequest) {
      return config;
    }

    const providerToken = localStorage.getItem("provider_access");
    const userToken = localStorage.getItem("access_token");

    const token = providerToken || userToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);


// ============================================================
// RESPONSE INTERCEPTOR
// ============================================================

apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    // Public request ko refresh flow mein mat bhejo
    const publicUrls = [
      "/Service/list/",
      "/User/login/",
      "/User/register/",
      "/Provider/login/",
      "/Provider/register/",
      "/User/token/refresh/",
      "/Provider/token/refresh/",
      "/Provider/google/exchange/",
      "/User/google/exchange/",
      "/User/google/login/",
    ];

    const isPublicRequest = publicUrls.some((url) =>
      originalRequest.url?.includes(url)
    );

    if (isPublicRequest) {
      return Promise.reject(error);
    }


    // Only handle 401
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const providerRefresh =
        localStorage.getItem("provider_refresh");

      const userRefresh =
        localStorage.getItem("refresh_token");


      const isProvider = !!providerRefresh;

      const refreshToken = isProvider
        ? providerRefresh
        : userRefresh;

      const refreshUrl = isProvider
        ? "/Provider/token/refresh/"
        : "/User/token/refresh/";


      // Refresh token hi nahi hai
      if (!refreshToken) {
        return Promise.reject(error);
      }


      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}${refreshUrl}`,
          {
            refresh: refreshToken,
          }
        );


        const newAccess = response.data.access;


        if (isProvider) {

          localStorage.setItem(
            "provider_access",
            newAccess
          );

        } else {

          localStorage.setItem(
            "access_token",
            newAccess
          );

        }


        originalRequest.headers =
          originalRequest.headers || {};

        originalRequest.headers.Authorization =
          `Bearer ${newAccess}`;


        return apiClient(originalRequest);

      } catch (refreshError) {

        if (isProvider) {

          localStorage.removeItem(
            "provider_access"
          );

          localStorage.removeItem(
            "provider_refresh"
          );

          localStorage.removeItem(
            "provider"
          );

          window.location.href =
            "/provider/login";

        } else {

          localStorage.removeItem(
            "access_token"
          );

          localStorage.removeItem(
            "refresh_token"
          );

          localStorage.removeItem(
            "user"
          );

          window.location.href =
            "/user/login";

        }

        return Promise.reject(refreshError);
      }
    }


    return Promise.reject(error);
  }
);


export default apiClient;