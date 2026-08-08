"use client";
import { userLogout } from "@/api/userAuthApi";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    accessToken: null,
    refreshToken: null,
    role: null,
    isAuthenticated: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    const role = localStorage.getItem("role");

    if (accessToken && refreshToken) {
      setAuth({
        user: null,
        accessToken,
        refreshToken,
        role,
        isAuthenticated: true,
      });
    }

    setLoading(false);
  }, []);

  const login = ({
    accessToken,
    refreshToken,
    role,
    user = null,
  }) => {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("role", role);

    setAuth({
      user,
      accessToken,
      refreshToken,
      role,
      isAuthenticated: true,
    });
  };

  const logout = async () => {
  try {
    await userLogout(auth.refreshToken);
  } catch (error) {
    console.log("Logout API Error:", error);
  }

  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("role");

  setAuth({
    user: null,
    accessToken: null,
    refreshToken: null,
    role: null,
    isAuthenticated: false,
  });
};

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}