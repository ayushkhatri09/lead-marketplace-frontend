"use client";

import ProfileHeader from "@/components/profile/ProfileHeader";
import UserInfoCard from "@/components/profile/UserInfoCard";
import UserLeads from "@/components/profile/UserLeads";
import { userProfile,myLeads } from "@/api/userAuthApi";
import { useEffect, useState } from "react";



export default function UserProfilePage() {
    const [user, setUser] = useState(null);
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
  const fetchData = async () => {
    try {
      const [profileRes, leadsRes] = await Promise.all([
        userProfile(),
        myLeads(),
      ]);
      
      setUser(profileRes.data);
      setLeads(leadsRes.data.data);

      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
if (loading) {
  return (
    <main className="mx-auto max-w-7xl p-6">
      Loading...
    </main>
  );
}
   

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <ProfileHeader 
    fullName={user?.full_name}
    email={user?.email}
    phone={user?.phone}
  />

        <UserInfoCard 
         fullName={user?.full_name}
    email={user?.email}
    phone={user?.phone}
    address={user?.address}
         />

         <UserLeads
  leads={leads}
/>

      </section>
    </main>
  );
}