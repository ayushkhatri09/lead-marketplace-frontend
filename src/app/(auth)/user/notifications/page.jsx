// "use client";

// import { useEffect, useState } from "react";
// import { getNotifications } from "@/api/notificationApi";

// export default function NotificationsPage() {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await getNotifications();

//         console.log("NOTIFICATION RESPONSE:", response.data);

//         setNotifications(response.data.data || []);
//       } catch (error) {
//         console.error(
//           "NOTIFICATION ERROR:",
//           error.response?.data || error
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   if (loading) {
//     return (
//       <div className="p-10">
//         Loading notifications...
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-3xl p-6">

//       <h1 className="mb-6 text-2xl font-bold">
//         Notifications
//       </h1>

//       {notifications.length === 0 ? (
//         <p className="text-gray-500">
//           No notifications found.
//         </p>
//       ) : (
//         <div className="space-y-4">

//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="rounded-xl border bg-white p-5 shadow-sm"
//             >

//               <h2 className="font-semibold">
//                 {notification.title}
//               </h2>

//               <p className="mt-2 text-gray-600">
//                 {notification.message}
//               </p>

//               {notification.provider_phone && (
//                 <p className="mt-2 font-medium">
//                   📞 {notification.provider_phone}
//                 </p>
//               )}

//               {notification.service_name && (
//                 <p className="mt-1 text-sm text-gray-500">
//                   Service: {notification.service_name}
//                 </p>
//               )}

//             </div>
//           ))}

//         </div>
//       )}

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import { 
  getNotifications,
  markNotificationRead
} from "@/api/notificationApi";


export default function NotificationsPage() {

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);



  const fetchNotifications = async () => {

    try {

      const response = await getNotifications();

      console.log(
        "NOTIFICATION RESPONSE:",
        response.data
      );


      setNotifications(
        response.data.data || []
      );


    } catch(error){

      console.error(
        "NOTIFICATION ERROR:",
        error.response?.data || error
      );

    } finally {

      setLoading(false);

    }

  };




  useEffect(()=>{

    fetchNotifications();

  },[]);





  const handleNotificationClick = async (notification) => {

    try {


      // Already read hai to API mat bhejo
      if(!notification.is_read){


        await markNotificationRead(
          notification.id
        );


        // Refresh list
        fetchNotifications();

      }


    } catch(error){

      console.error(
        "MARK READ ERROR:",
        error.response?.data || error
      );

    }

  };





  if(loading){

    return (

      <div className="p-10">
        Loading notifications...
      </div>

    );

  }





  return (

    <div className="mx-auto max-w-3xl p-6">


      <h1 className="mb-6 text-2xl font-bold">
        Notifications
      </h1>




      {
        notifications.length === 0 ? (

          <p className="text-gray-500">
            No notifications found.
          </p>


        ) : (


          <div className="space-y-4">


            {
              notifications.map((notification)=>(


                <div

                  key={notification.id}

                  onClick={() =>
                    handleNotificationClick(notification)
                  }

                  className={`
                    cursor-pointer
                    rounded-xl
                    border
                    p-5
                    shadow-sm
                    transition
                    hover:shadow-md
                    ${
                      notification.is_read
                      ? "bg-white"
                      : "bg-blue-50"
                    }
                  `}

                >


                  <div className="flex justify-between">


                    <h2 className="font-semibold">

                      {notification.title}

                    </h2>



                    {
                      !notification.is_read && (

                        <span
                          className="
                          text-xs
                          font-semibold
                          text-blue-600
                          "
                        >
                          New
                        </span>

                      )
                    }


                  </div>





                  <p className="mt-2 text-gray-600">

                    {notification.message}

                  </p>





                  {
                    notification.provider_phone && (

                      <p className="mt-2 font-medium">

                        📞 {notification.provider_phone}

                      </p>

                    )
                  }





                  {
                    notification.service_name && (

                      <p className="mt-1 text-sm text-gray-500">

                        Service: {notification.service_name}

                      </p>

                    )
                  }




                </div>


              ))

            }


          </div>


        )
      }


    </div>

  );

}