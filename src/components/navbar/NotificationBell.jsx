// "use client";

// import { useState } from "react";
// import { Bell, X } from "lucide-react";

// import { useNotifications } from "@/context/NotificationContext";
// import { markNotificationRead } from "@/api/notificationApi";


// export default function NotificationBell() {

//   const [open, setOpen] = useState(false);


//   const {
//     notifications,
//     unreadCount,
//     refreshNotifications,
//     newNotification,
//     clearNewNotification,
//   } = useNotifications();




//   const handleNotificationRead = async (notification) => {

//     try {

//       if (!notification.is_read) {


//         await markNotificationRead(
//           notification.id
//         );


//         await refreshNotifications();

//       }


//     } catch(error) {

//       console.log(
//         "MARK READ ERROR:",
//         error
//       );

//     }

//   };




//   return (

//     <div className="relative">


//       {/* Bell Button */}

//       <button

//         type="button"

//         onClick={() => setOpen(!open)}

//         className="
//         relative
//         flex
//         h-10
//         w-10
//         items-center
//         justify-center
//         rounded-full
//         transition
//         hover:bg-[var(--hover-color)]
//         "

//       >


//         <Bell

//           size={22}

//           className="
//           text-[var(--text-primary)]
//           "

//         />



//         {
//           unreadCount > 0 && (

//             <span

//               className="
//               absolute
//               -right-1
//               -top-1
//               flex
//               h-5
//               min-w-5
//               items-center
//               justify-center
//               rounded-full
//               bg-[var(--danger-color)]
//               px-1
//               text-xs
//               font-bold
//               text-white
//               "

//             >

//               {
//                 unreadCount > 99
//                 ? "99+"
//                 : unreadCount
//               }


//             </span>

//           )
//         }


//       </button>







//       {/* Dropdown */}


//       {
//         open && (

//           <div

//             className="
//             absolute
//             right-0
//             top-12
//             z-50
//             w-96
//             overflow-hidden
//             rounded-xl
//             border
//             border-[var(--border-color)]
//             bg-[var(--background-color)]
//             shadow-xl
//             "

//           >



//             {/* Header */}


//             <div

//               className="
//               flex
//               items-center
//               justify-between
//               border-b
//               border-[var(--border-color)]
//               p-4
//               "

//             >


//               <h3

//                 className="
//                 font-semibold
//                 text-[var(--text-primary)]
//                 "

//               >

//                 Notifications

//               </h3>



//               <button

//                 onClick={() => setOpen(false)}

//                 className="
//                 rounded-full
//                 p-1
//                 hover:bg-[var(--hover-color)]
//                 "

//               >

//                 <X size={18}/>

//               </button>


//             </div>







//             {/* Notification List */}


//             <div

//               className="
//               max-h-96
//               overflow-y-auto
//               "

//             >


//               {
//                 notifications.length === 0 ? (


//                   <p

//                     className="
//                     p-5
//                     text-center
//                     text-sm
//                     text-[var(--text-secondary)]
//                     "

//                   >

//                     No notifications

//                   </p>



//                 ) : (


//                   notifications.map((notification)=>(


//                     <div

//                       key={notification.id}


//                       onClick={() =>
//                         handleNotificationRead(
//                           notification
//                         )
//                       }


//                       className={`
//                       cursor-pointer
//                       border-b
//                       border-[var(--border-color)]
//                       p-4
//                       transition
//                       hover:bg-[var(--hover-color)]

//                       ${
//                         notification.is_read
//                         ? "bg-[var(--background-color)]"
//                         : "bg-[var(--notification-unread-bg)]"
//                       }

//                       `}


//                     >



//                       <div

//                         className="
//                         flex
//                         items-start
//                         justify-between
//                         gap-2
//                         "

//                       >



//                         <h4

//                           className="
//                           font-semibold
//                           text-[var(--text-primary)]
//                           "

//                         >

//                           {notification.title}

//                         </h4>




//                         {
//                           !notification.is_read && (

//                             <span

//                               className="
//                               text-xs
//                               font-semibold
//                               text-[var(--primary-color)]
//                               "

//                             >

//                               New

//                             </span>

//                           )
//                         }



//                       </div>







//                       <p

//                         className="
//                         mt-2
//                         text-sm
//                         text-[var(--text-secondary)]
//                         "

//                       >

//                         {notification.message}

//                       </p>








//                       {
//                         notification.provider_phone && (

//                           <p

//                             className="
//                             mt-2
//                             text-sm
//                             font-semibold
//                             text-[var(--success-color)]
//                             "

//                           >

//                             📞 {notification.provider_phone}

//                           </p>

//                         )
//                       }







//                       {
//                         notification.service_name && (

//                           <p

//                             className="
//                             mt-1
//                             text-xs
//                             text-[var(--text-secondary)]
//                             "

//                           >

//                             Service:
//                             {" "}
//                             {notification.service_name}

//                           </p>

//                         )
//                       }



//                     </div>


//                   ))


//                 )
//               }



//             </div>




//           </div>


//         )
//       }







//       {/* Instant Popup */}


//       {
//         newNotification && (

//           <div

//             className="
//             fixed
//             right-5
//             top-20
//             z-50
//             w-80
//             rounded-xl
//             border
//             border-[var(--border-color)]
//             bg-[var(--background-color)]
//             p-4
//             shadow-xl
//             "

//           >



//             <div

//               className="
//               flex
//               items-start
//               justify-between
//               gap-3
//               "

//             >



//               <h4

//                 className="
//                 font-semibold
//                 text-[var(--text-primary)]
//                 "

//               >

//                 {newNotification.title}

//               </h4>




//               <button

//                 onClick={clearNewNotification}

//                 className="
//                 rounded-full
//                 p-1
//                 hover:bg-[var(--hover-color)]
//                 "

//               >

//                 <X size={16}/>

//               </button>



//             </div>





//             <p

//               className="
//               mt-2
//               text-sm
//               text-[var(--text-secondary)]
//               "

//             >

//               {newNotification.message}

//             </p>





//             {
//               newNotification.provider_phone && (

//                 <p

//                   className="
//                   mt-2
//                   font-semibold
//                   text-[var(--success-color)]
//                   "

//                 >

//                   📞 {newNotification.provider_phone}

//                 </p>

//               )
//             }



//           </div>


//         )
//       }



//     </div>

//   );

// }

"use client";

import { useState } from "react";
import { Bell, X } from "lucide-react";

import { useNotifications } from "@/context/NotificationContext";
import { markNotificationRead } from "@/api/notificationApi";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const {
    notifications = [],
    unreadCount = 0,
    refreshNotifications,
    newNotification,
    clearNewNotification,
  } = useNotifications();

  // ==========================================
  // MARK NOTIFICATION AS READ
  // ==========================================

  const handleNotificationRead = async (notification) => {
    try {
      if (!notification.is_read) {
        await markNotificationRead(notification.id);

        await refreshNotifications();
      }
    } catch (error) {
      console.error(
        "MARK READ ERROR:",
        error
      );
    }
  };

  return (
    <div
      className="
        relative
        z-[10000]
        flex
        items-center
      "
    >

      {/* =====================================
          BELL BUTTON
      ===================================== */}

      <button
        type="button"
        aria-label="Notifications"
        onClick={() => setOpen((prev) => !prev)}
        className="
          relative
          z-[10001]
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-transparent
          bg-transparent
          text-[var(--color-foreground)]
          transition-all
          duration-200
          hover:border-[var(--color-border)]
          hover:bg-[var(--state-hover-overlay)]
          hover:text-[var(--color-primary)]
          active:scale-95
          focus:outline-none
          focus:ring-2
          focus:ring-[var(--color-primary)]
          focus:ring-offset-2
        "
      >
        <Bell
          size={21}
          strokeWidth={2}
          className="
            block
            shrink-0
          "
          style={{
            color: "var(--color-foreground)",
          }}
        />

        {/* =================================
            UNREAD COUNT
        ================================= */}

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -right-0.5
              -top-0.5
              flex
              h-5
              min-w-5
              items-center
              justify-center
              rounded-full
              border-2
              border-[var(--color-background)]
              px-1
              text-[10px]
              font-bold
              leading-none
              text-white
            "
            style={{
              background:
                "var(--color-error, #ef4444)",
            }}
          >
            {unreadCount > 99
              ? "99+"
              : unreadCount}
          </span>
        )}
      </button>

      {/* =====================================
          NOTIFICATION DROPDOWN
      ===================================== */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-[52px]
            z-[99999]
            w-[380px]
            overflow-hidden
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface-elevated)]
            shadow-[var(--shadow-lg)]
          "
        >

          {/* =================================
              HEADER
          ================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[var(--color-border)]
              px-4
              py-3
            "
          >
            <div>
              <h3
                className="
                  text-sm
                  font-semibold
                  text-[var(--color-foreground)]
                "
              >
                Notifications
              </h3>

              {unreadCount > 0 && (
                <p
                  className="
                    mt-0.5
                    text-xs
                    text-[var(--color-foreground-muted)]
                  "
                >
                  {unreadCount} unread
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close notifications"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-[var(--color-foreground-muted)]
                transition
                hover:bg-[var(--state-hover-overlay)]
                hover:text-[var(--color-foreground)]
              "
            >
              <X size={17} />
            </button>
          </div>

          {/* =================================
              NOTIFICATION LIST
          ================================= */}

          <div
            className="
              max-h-[420px]
              overflow-y-auto
            "
          >
            {notifications.length === 0 ? (
              <div
                className="
                  flex
                  min-h-[180px]
                  flex-col
                  items-center
                  justify-center
                  px-5
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                  "
                  style={{
                    background:
                      "var(--state-selected-bg)",
                    color:
                      "var(--color-primary)",
                  }}
                >
                  <Bell size={20} />
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    font-medium
                    text-[var(--color-foreground)]
                  "
                >
                  No notifications
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[var(--color-foreground-muted)]
                  "
                >
                  You're all caught up.
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() =>
                    handleNotificationRead(
                      notification
                    )
                  }
                  className="
                    cursor-pointer
                    border-b
                    border-[var(--color-border)]
                    px-4
                    py-4
                    transition-colors
                    hover:bg-[var(--state-hover-overlay)]
                  "
                  style={{
                    background: notification.is_read
                      ? "var(--color-surface-elevated)"
                      : "var(--state-selected-bg)",
                  }}
                >

                  {/* Notification Header */}

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
                        text-sm
                        font-semibold
                        text-[var(--color-foreground)]
                      "
                    >
                      {notification.title}
                    </h4>

                    {!notification.is_read && (
                      <span
                        className="
                          shrink-0
                          rounded-full
                          px-2
                          py-0.5
                          text-[10px]
                          font-bold
                        "
                        style={{
                          background:
                            "var(--color-primary)",
                          color:
                            "var(--color-primary-foreground)",
                        }}
                      >
                        New
                      </span>
                    )}
                  </div>

                  {/* Message */}

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-[var(--color-foreground-muted)]
                    "
                  >
                    {notification.message}
                  </p>

                  {/* Provider Phone */}

                  {notification.provider_phone && (
                    <p
                      className="
                        mt-3
                        text-sm
                        font-semibold
                      "
                      style={{
                        color:
                          "var(--color-success, #16a34a)",
                      }}
                    >
                      📞{" "}
                      {notification.provider_phone}
                    </p>
                  )}

                  {/* Service */}

                  {notification.service_name && (
                    <p
                      className="
                        mt-1
                        text-xs
                        text-[var(--color-foreground-muted)]
                      "
                    >
                      Service:{" "}
                      {notification.service_name}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* =====================================
          INSTANT NEW NOTIFICATION
      ===================================== */}

      {newNotification && (
        <div
          className="
            fixed
            right-5
            top-20
            z-[999999]
            w-[340px]
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface-elevated)]
            p-4
            shadow-[var(--shadow-lg)]
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
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  background:
                    "var(--state-selected-bg)",
                  color:
                    "var(--color-primary)",
                }}
              >
                <Bell size={17} />
              </div>

              <h4
                className="
                  pt-1
                  text-sm
                  font-semibold
                  text-[var(--color-foreground)]
                "
              >
                {newNotification.title}
              </h4>
            </div>

            <button
              type="button"
              onClick={clearNewNotification}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                text-[var(--color-foreground-muted)]
                hover:bg-[var(--state-hover-overlay)]
              "
            >
              <X size={16} />
            </button>
          </div>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-[var(--color-foreground-muted)]
            "
          >
            {newNotification.message}
          </p>

          {newNotification.provider_phone && (
            <p
              className="
                mt-3
                text-sm
                font-semibold
              "
              style={{
                color:
                  "var(--color-success, #16a34a)",
              }}
            >
              📞{" "}
              {newNotification.provider_phone}
            </p>
          )}
        </div>
      )}
    </div>
  );
}