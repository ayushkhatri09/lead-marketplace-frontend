
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { useAuth } from "@/context/AuthContext";
import { userLogin } from "@/api/userAuthApi";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import AppButton from "@/components/common/AppButton";


export default function UserLoginForm() {


  const router = useRouter();


  const { login } = useAuth();



  const {
    register,
    handleSubmit,
  } = useForm();



  const [showPassword, setShowPassword] = useState(false);

  const [serverError, setServerError] = useState("");

  const [loading, setLoading] = useState(false);





  const onSubmit = async (data) => {


    try {


      setLoading(true);

      setServerError("");



      const payload = {

        password: data.password,

      };



      if(data.identifier.includes("@")){

        payload.email = data.identifier;

      }
      else{

        payload.phone = data.identifier;

      }






      const response = await userLogin(payload);



      console.log(
        "User Login Response:",
        response.data
      );






      login({

        accessToken:
          response.data.access,


        refreshToken:
          response.data.refresh,


        role:
          "user",


      });






      router.push("/");



    }
    catch(error){


      console.log(
        "User Login Error:",
        error.response?.data || error.message
      );



      setServerError(

        error.response?.data?.detail ||

        "Login failed. Please try again."

      );


    }
    finally{


      setLoading(false);


    }


  };







  return (

    <Card

      className="
        w-full
        max-w-md
        overflow-hidden
        border
        p-0
      "

      style={{

        borderColor:
          "var(--color-border)",


        borderRadius:
          "var(--radius-2xl)",


        background:
          "var(--color-surface-elevated)",


        boxShadow:
          "var(--shadow-xl)",

      }}

    >



      <div

        style={{

          height:"3px",

          background:
          "linear-gradient(90deg,var(--color-primary),#ECB765)"

        }}

      />





      <div className="p-8">



        <CardHeader className="p-0 text-center mb-6">


          <CardTitle>

            Welcome Back

          </CardTitle>


          <CardDescription>

            Login to continue using Lead Marketplace.

          </CardDescription>


        </CardHeader>






        <CardContent className="p-0">



          <form

            onSubmit={
              handleSubmit(onSubmit)
            }

            className="space-y-5"

          >






            <div className="space-y-2">


              <label className="text-sm font-medium">

                Email or Phone

              </label>



              <Input

                type="text"

                placeholder="Enter email or phone"

                {...register("identifier")}

              />



            </div>








            <div className="space-y-2">


              <label className="text-sm font-medium">

                Password

              </label>





              <div className="relative">


                <Input


                  type={
                    showPassword
                    ?
                    "text"
                    :
                    "password"
                  }


                  placeholder="Enter password"


                  {...register("password")}


                />





                <button

                  type="button"

                  onClick={() =>
                    setShowPassword(
                      (prev)=>!prev
                    )
                  }


                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-sm
                  "

                >

                  {
                    showPassword
                    ?
                    "Hide"
                    :
                    "Show"
                  }


                </button>



              </div>



            </div>







            {
              serverError && (

                <p className="text-sm text-red-500">

                  {serverError}

                </p>

              )
            }







            <AppButton

              type="submit"

              loading={loading}

              className="w-full"

            >

              Login


            </AppButton>







            <div className="text-center text-sm">


              Don't have an account?{" "}


              <Link

                href="/user/register"

                className="
                  text-primary
                  hover:underline
                "

              >

                Register


              </Link>



            </div>





          </form>



        </CardContent>



      </div>



    </Card>

  );

}