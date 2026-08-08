

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { getNotifications } from "@/api/notificationApi";
import { useAuth } from "@/context/AuthContext";


const NotificationContext = createContext(null);


export function NotificationProvider({ children }) {

  const { auth } = useAuth();


  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [newNotification, setNewNotification] = useState(null);


  const previousIdsRef = useRef(new Set());
  const firstFetchRef = useRef(true);



  const fetchNotifications = async () => {

    try {

      const response = await getNotifications();

      const data = response.data?.data || [];


      setNotifications(data);


      const unread = data.filter(
        (notification)=> !notification.is_read
      ).length;


      setUnreadCount(unread);



      if(firstFetchRef.current){

        data.forEach((notification)=>{
          previousIdsRef.current.add(
            notification.id
          );
        });


        firstFetchRef.current=false;

        return;
      }



      const latestNotification = data.find(
        (notification)=>
          !previousIdsRef.current.has(
            notification.id
          )
      );


      if(latestNotification){

        setNewNotification(
          latestNotification
        );


        setTimeout(()=>{
          setNewNotification(null);
        },5000);

      }



      data.forEach((notification)=>{
        previousIdsRef.current.add(
          notification.id
        );
      });


    }
    catch(error){

      console.error(
        "NOTIFICATION ERROR:",
        error.response?.data || error.message
      );

    }

  };



  useEffect(()=>{


    // User login nahi hai to notification mat chalao
    if(!auth?.isAuthenticated){
      return;
    }


    // first fetch
    fetchNotifications();



    const interval=setInterval(()=>{

      fetchNotifications();

    },5000);



    return ()=>{
      clearInterval(interval);
    };


  },[
    auth?.isAuthenticated
  ]);




  const clearNewNotification=()=>{

    setNewNotification(null);

  };



  return(

    <NotificationContext.Provider

      value={{
        notifications,
        unreadCount,
        newNotification,
        clearNewNotification,
        refreshNotifications:fetchNotifications,
      }}

    >

      {children}

    </NotificationContext.Provider>

  );

}



export function useNotifications(){

  const context=useContext(NotificationContext);


  if(!context){

    throw new Error(
      "useNotifications must be used inside NotificationProvider"
    );

  }


  return context;

}