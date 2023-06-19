import { baseApiSlice } from "../../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "*/*");
// myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const profileApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSellerProfile: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/seller/profile",
        method: "GET",
      }),
    }),
    updateSellerAccount: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/seller/update-profile",
        body: data,
        method: "POST",
      }),
    }),
    changeSellerPwd: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/change/password",
        body: data,
        method: "POST",
      }),
    }),
    changeSellerProfilePicture: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/update-profile/picture",
        body: data,
        method: "POST",
      }),
    }),
    sellerLogOut: builder.mutation({
      query: () => ({
        headers: myHeaders,
        url: "/user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useChangeSellerProfilePictureMutation,
  useChangeSellerPwdMutation,
  useGetSellerProfileQuery,
  useSellerLogOutMutation,
  useUpdateSellerAccountMutation,
} = profileApiSlice;
