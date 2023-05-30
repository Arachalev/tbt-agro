import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const notificationApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/user/notification/list",
        method: "GET",
      }),
    }),
    getOneNotification: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/user/notification/show/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllNotificationsQuery, useGetOneNotificationQuery } =
  notificationApiSlice;
