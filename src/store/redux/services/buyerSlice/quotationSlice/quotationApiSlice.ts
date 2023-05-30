import { baseApiSlice } from "../../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const quotationApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitQuotation: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/buyer/quotation/submit-request-for-quotation",
        method: "POST",
        body: data,
      }),
    }),
    getAllQuotations: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/buyer/quotation/get-my-request-for-quotation",
        method: "GET",
      }),
    }),
    getOneQuotations: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/buyer/quotation/get-my-request-for-quotation/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllQuotationsQuery,
  useGetOneQuotationsQuery,
  useSubmitQuotationMutation,
} = quotationApiSlice;
