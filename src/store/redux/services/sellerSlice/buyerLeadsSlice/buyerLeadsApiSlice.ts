import { baseApiSlice } from "../../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const buyerLeadsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBuyerLeads: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/seller/buyer-leads/get-all",
        method: "GET",
      }),
    }),
    getOneBuyerLead: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/seller/buyer-leads/get-one/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBuyerLeadsQuery, useGetOneBuyerLeadQuery } =
  buyerLeadsApiSlice;
