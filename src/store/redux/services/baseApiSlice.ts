import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = "https://api.tbt.com.ng/api/v1";
// const baseApiUrl = "https://test.tbt.com.ng/api/v1";
// hostname: "test.tbt.com.ng/**",

const baseQuery = fetchBaseQuery({
  baseUrl: baseApiUrl,
  // mode: "no-cors",
  prepareHeaders: (headers) => {
    headers.set("Access-Control-Allow-Origin", "*");
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
