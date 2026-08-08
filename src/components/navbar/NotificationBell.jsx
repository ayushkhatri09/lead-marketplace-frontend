"use client";

import { useState } from "react";
import { Bell, X } from "lucide-react";

import { useNotifications } from "@/context/NotificationContext";
import { markNotificationRead } from "@/api/notificationApi";


export default function NotificationBell() {

  const [open, setOpen] = useState(false);


  const {
    notifications,
    unreadCount,
    refreshNotifications,
    newNotification,
    clearNewNotification,
  } = useNotifications();




  const handleNotificationRead = async (notification) => {

    try {

      if (!notification.is_read) {


        await markNotificationRead(
          notification.id
        );


        await refreshNotifications();

      }


    } catch(error) {

      console.log(
        "MARK READ ERROR:",
        error
      );

    }

  };




  return (

    <div className="relative">


      {/* Bell Button */}

      <button

        type="button"

        onClick={() => setOpen(!open)}

        className="
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        transition
        hover:bg-[var(--hover-color)]
        "

      >


        <Bell

          size={22}

          className="
          text-[var(--text-primary)]
          "

        />



        {
          unreadCount > 0 && (

            <span

              className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              min-w-5
              items-center
              justify-center
              rounded-full
              bg-[var(--danger-color)]
              px-1
              text-xs
              font-bold
              text-white
              "

            >

              {
                unreadCount > 99
                ? "99+"
                : unreadCount
              }


            </span>

          )
        }


      </button>







      {/* Dropdown */}


      {
        open && (

          <div

            className="
            absolute
            right-0
            top-12
            z-50
            w-96
            overflow-hidden
            rounded-xl
            border
            border-[var(--border-color)]
            bg-[var(--background-color)]
            shadow-xl
            "

          >



            {/* Header */}


            <div

              className="
              flex
              items-center
              justify-between
              border-b
              border-[var(--border-color)]
              p-4
              "

            >


              <h3

                className="
                font-semibold
                text-[var(--text-primary)]
                "

              >

                Notifications

              </h3>



              <button

                onClick={() => setOpen(false)}

                className="
                rounded-full
                p-1
                hover:bg-[var(--hover-color)]
                "

              >

                <X size={18}/>

              </button>


            </div>







            {/* Notification List */}


            <div

              className="
              max-h-96
              overflow-y-auto
              "

            >


              {
                notifications.length === 0 ? (


                  <p

                    className="
                    p-5
                    text-center
                    text-sm
                    text-[var(--text-secondary)]
                    "

                  >

                    No notifications

                  </p>



                ) : (


                  notifications.map((notification)=>(


                    <div

                      key={notification.id}


                      onClick={() =>
                        handleNotificationRead(
                          notification
                        )
                      }


                      className={`
                      cursor-pointer
                      border-b
                      border-[var(--border-color)]
                      p-4
                      transition
                      hover:bg-[var(--hover-color)]

                      ${
                        notification.is_read
                        ? "bg-[var(--background-color)]"
                        : "bg-[var(--notification-unread-bg)]"
                      }

                      `}


                    >



                      <div

                        className="
                        flex
                        items-start
                        justify-between
                        gap-2
                        "

                      >



                        <h4

                          className="
                          font-semibold
                          text-[var(--text-primary)]
                          "

                        >

                          {notification.title}

                        </h4>




                        {
                          !notification.is_read && (

                            <span

                              className="
                              text-xs
                              font-semibold
                              text-[var(--primary-color)]
                              "

                            >

                              New

                            </span>

                          )
                        }



                      </div>







                      <p

                        className="
                        mt-2
                        text-sm
                        text-[var(--text-secondary)]
                        "

                      >

                        {notification.message}

                      </p>








                      {
                        notification.provider_phone && (

                          <p

                            className="
                            mt-2
                            text-sm
                            font-semibold
                            text-[var(--success-color)]
                            "

                          >

                            📞 {notification.provider_phone}

                          </p>

                        )
                      }







                      {
                        notification.service_name && (

                          <p

                            className="
                            mt-1
                            text-xs
                            text-[var(--text-secondary)]
                            "

                          >

                            Service:
                            {" "}
                            {notification.service_name}

                          </p>

                        )
                      }



                    </div>


                  ))


                )
              }



            </div>




          </div>


        )
      }







      {/* Instant Popup */}


      {
        newNotification && (

          <div

            className="
            fixed
            right-5
            top-20
            z-50
            w-80
            rounded-xl
            border
            border-[var(--border-color)]
            bg-[var(--background-color)]
            p-4
            shadow-xl
            "

          >



            <div

              className="
              flex
              items-start
              justify-between
              gap-3
              "

            >



              <h4

                className="
                font-semibold
                text-[var(--text-primary)]
                "

              >

                {newNotification.title}

              </h4>




              <button

                onClick={clearNewNotification}

                className="
                rounded-full
                p-1
                hover:bg-[var(--hover-color)]
                "

              >

                <X size={16}/>

              </button>



            </div>





            <p

              className="
              mt-2
              text-sm
              text-[var(--text-secondary)]
              "

            >

              {newNotification.message}

            </p>





            {
              newNotification.provider_phone && (

                <p

                  className="
                  mt-2
                  font-semibold
                  text-[var(--success-color)]
                  "

                >

                  📞 {newNotification.provider_phone}

                </p>

              )
            }



          </div>


        )
      }



    </div>

  );

}