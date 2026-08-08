

"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProviderAuthContext = createContext();

export function ProviderAuthProvider({ children }) {
  const [providerAuth, setProviderAuth] = useState({
    isAuthenticated: false,
    provider: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("provider_access");
    const provider = localStorage.getItem("provider");

    if (token && provider) {
      setProviderAuth({
        isAuthenticated: true,
        provider: JSON.parse(provider),
      });
    }
    setLoading(false);
  }, []);

  const login = (data) => {
    localStorage.setItem("provider_access", data.access);
    localStorage.setItem("provider_refresh", data.refresh);

    if (data.provider) {
      localStorage.setItem(
        "provider",
        JSON.stringify(data.provider)
      );
    }

    setProviderAuth({
      isAuthenticated: true,
      provider: data.provider,
    });
  };

  const logout = () => {
    localStorage.removeItem("provider_access");
    localStorage.removeItem("provider_refresh");
    localStorage.removeItem("provider");

    setProviderAuth({
      isAuthenticated: false,
      provider: null,
    });
  };

  return (
    <ProviderAuthContext.Provider
       value={{
    providerAuth,
    login,
    logout,
    loading,
  }}
    >
      {children}
    </ProviderAuthContext.Provider>
  );
}

export function useProviderAuth() {
  return useContext(ProviderAuthContext);
}