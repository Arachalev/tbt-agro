import { baseApiSlice } from "../../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const shippingAddressApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateShippingAddress: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/buyer/submit-default-shipping-address",
        body: data,
        method: "POST",
      }),
    }),
    getShippingAddress: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/buyer/get-default-shipping-address",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetShippingAddressQuery, useUpdateShippingAddressMutation } =
  shippingAddressApiSlice;
