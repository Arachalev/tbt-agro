import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const ratingApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    rateProduct: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/product/rate",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRateProductMutation } = ratingApiSlice;
