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
      providesTags: ["buyerProfile"],
    }),
    updateBuyerAccount: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/buyer/update-profile",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["buyerProfile"],
    }),
    changeBuyerPwd: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/change/password",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["buyerProfile"],
    }),
    changeBuyerProfilePicture: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/update-profile/picture",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["buyerProfile"],
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
