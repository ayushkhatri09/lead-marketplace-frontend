import apiClient from "./client";

export const getNotifications = () => {
  return apiClient.get("/Notification/");
};

export const markNotificationRead = (id)=>{

    return apiClient.post(
        `/Notification/${id}/read/`
    );

};