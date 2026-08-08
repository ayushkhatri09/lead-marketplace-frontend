

"use client";

import { useAuth } from "@/context/AuthContext";
import { useProviderAuth } from "@/context/ProviderAuthContext";

import UserMenu from "./UserMenu";
import ProviderMenu from "./ProviderMenu";

import NotificationBell from "./NotificationBell";

import LoginDropdown from "./LoginDropdown";
import RegisterDropdown from "./RegisterDropdown";


export default function NavActions() {

  const { auth } = useAuth();

  const { providerAuth } = useProviderAuth();



  // User Logged In
  if (auth.isAuthenticated) {

    return (

      <div className="flex items-center gap-3">

        {/* User Notifications */}
        <NotificationBell />


        {/* User Profile Menu */}
        <UserMenu />

      </div>

    );

  }




  // Provider Logged In
  if (providerAuth.isAuthenticated) {

    return <ProviderMenu />;

  }




  // Guest
  return (

    <div className="flex items-center gap-3">

      <LoginDropdown />

      <RegisterDropdown />

    </div>

  );

}