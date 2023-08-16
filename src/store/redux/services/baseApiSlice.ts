import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = "https://api.tbt.com.ng/";
// const baseApiUrl = "https://test.tbt.com.ng/api/v1";
// hostname: "test.tbt.com.ng/**",

const baseQuery = fetchBaseQuery({
  baseUrl: baseApiUrl,
  prepareHeaders: (headers) => {
    const sessionToken = sessionStorage.getItem("token");
    if (sessionToken) {
      headers.set("Authorization", `Bearer ${sessionToken}`);
    }
    return headers;
  },
});

export const baseApiSlice = createApi({
  reducerPath: "tbtAgro",
  baseQuery,
  endpoints: (builder) => ({}),
  tagTypes: ["cartData", "shippingAddress", "buyerProfile"],
});
