
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/home/SearchBar";
import ProviderList from "@/components/home/ProviderList";
import MyLeads from "@/components/home/MyLead";

import AvailableLeadList from "@/components/provider/AvailableLeadList";
import HistoryLeadList from "@/components/provider/HistoryLeadList";

import { nearbyProviders } from "@/api/providerAuthApi";

import { useAuth } from "@/context/AuthContext";
import { useProviderAuth } from "@/context/ProviderAuthContext";


const GoogleMap = dynamic(
  () => import("@/components/home/GoogleMap"),
  {
    ssr: false,
  }
);


export default function Home() {


  const [search, setSearch] = useState("");

  const [providers, setProviders] = useState([]);

  const [loading, setLoading] = useState(true);


  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });



  const {
    auth,
  } = useAuth();



  const {
    providerAuth,
  } = useProviderAuth();



  const userLoggedIn =
    auth.isAuthenticated;


  const providerLoggedIn =
    providerAuth.isAuthenticated;



  // ==============================
  // GET USER CURRENT LOCATION
  // ==============================

  useEffect(() => {


    if (!userLoggedIn)
      return;



    if (!navigator.geolocation) {

      console.log(
        "Geolocation not supported"
      );

      return;
    }



    navigator.geolocation.getCurrentPosition(

      (position)=>{


        setLocation({

          latitude:
            position.coords.latitude,

          longitude:
            position.coords.longitude,

        });


      },


      (error)=>{

        console.log(
          "Location Error",
          error
        );

      }

    );



  },[
    userLoggedIn
  ]);





  // ==============================
  // FETCH NEARBY PROVIDERS
  // ==============================


  useEffect(()=>{


    if(

      userLoggedIn &&

      location.latitude !== null &&

      location.longitude !== null

    ){

      fetchProviders();

    }



  },[

    userLoggedIn,

    location.latitude,

    location.longitude

  ]);






  const fetchProviders = async()=>{


    try{


      setLoading(true);



      const response = await nearbyProviders(
  location.latitude,
  location.longitude
);



      console.log(
        "NEARBY PROVIDERS:",
        response.data.data
      );



      setProviders(

        response.data.data || []

      );



    }

    catch(error){


      console.error(

        "Nearby Provider Error",

        error

      );


    }

    finally{


      setLoading(false);


    }


  };





  // ==============================
  // SEARCH FILTER
  // ==============================


  const filteredProviders =

    providers.filter((provider)=>{


      if(!search)
        return true;



      return (

        provider.service_name

        ?.toLowerCase()

        .includes(

          search.toLowerCase()

        )

      );


    });






  return (


    <main className="
      min-h-screen
      bg-[var(--color-background)]
    ">



      <HeroSection />



      <div className="
        mx-auto
        max-w-7xl
        px-6
        py-10
      ">



        {/* ================= USER ================= */}


        {
          userLoggedIn && (

          <>


            <SearchBar

              value={search}

              onChange={(e)=>
                setSearch(
                  e.target.value
                )
              }

            />




            <div className="
              mt-8
              grid
              gap-8
              lg:grid-cols-2
            ">



              <GoogleMap


                key={
                  `${location.latitude}-${location.longitude}`
                }


                providers={providers}


                currentLocation={location}


              />





              <ProviderList


                providers={
                  filteredProviders
                }


                loading={
                  loading
                }


              />



            </div>






            <div className="
              mt-10
            ">


              <MyLeads />


            </div>



          </>

          )
        }






        {/* ================= PROVIDER ================= */}


        {
          providerLoggedIn && (


            <div className="
              space-y-10
            ">


              <AvailableLeadList />


              <HistoryLeadList />



            </div>


          )
        }







        {/* ================= GUEST ================= */}



        {
          !userLoggedIn &&
          !providerLoggedIn && (


            <div className="
              py-20
              text-center
            ">



              <h2 className="
                text-3xl
                font-bold
              ">


                Welcome to Lead Marketplace


              </h2>





              <p className="
                mt-4
                text-gray-500
              ">


                Login as User or Provider to continue.


              </p>



            </div>


          )
        }




      </div>



    </main>


  );

}