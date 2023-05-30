import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const searchApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchProducts: builder.mutation({
      query: (params) => ({
        url: "/product/search",
        method: "POST",
        headers: myHeaders,
        body: params,
      }),
    }),
  }),
});

export const { useSearchProductsMutation } = searchApiSlice;
