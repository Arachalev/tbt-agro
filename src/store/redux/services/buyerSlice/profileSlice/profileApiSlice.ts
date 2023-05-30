import { baseApiSlice } from "../../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const profileApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBuyerProfile: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/buyer/profile",
        method: "GET",
      }),
    }),
    updateBuyerAccount: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/buyer/update-profile",
        body: data,
        method: "POST",
      }),
    }),
    changeBuyerPwd: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/change/password",
        body: data,
        method: "POST",
      }),
    }),
    changeBuyerProfilePicture: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/update-profile/picture",
        body: data,
        method: "POST",
      }),
    }),
    buyerLogOut: builder.mutation({
      query: () => ({
        headers: myHeaders,
        url: "/user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useBuyerLogOutMutation,
  useChangeBuyerProfilePictureMutation,
  useChangeBuyerPwdMutation,
  useGetBuyerProfileQuery,
  useUpdateBuyerAccountMutation,
} = profileApiSlice;
