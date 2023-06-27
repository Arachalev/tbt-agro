import { baseApiSlice } from "../../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");


const sellerQuoteHeaders = new Headers();

sellerQuoteHeaders.append("Accept", "*/*");


const quotationApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitQuotationBuyer: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/buyer/quotation/submit-request-for-quotation",
        method: "POST",
        body: data,
      }),
    }),
    getAllQuotationsBuyer: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/buyer/quotation/get-my-request-for-quotation",
        method: "GET",
      }),
    }),
    getOneQuotationsBuyer: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/buyer/quotation/get-my-request-for-quotation/${id}`,
        method: "GET",
      }),
    }),
    submitQuoteSeller: builder.mutation({
      query: (data) => ({
        headers: sellerQuoteHeaders,
        url: "/seller/quotation/submit-quotation",
        method: "POST",
        body: data,
      }),
    }),
    getAllQuotationSellers: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/seller/quotation/get-my-quotation",
        method: "GET",
      }),
    }),
    getOneQuotationSeller: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/seller/quotation/show/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllQuotationSellersQuery,
  useGetAllQuotationsBuyerQuery,
  useGetOneQuotationSellerQuery,
  useGetOneQuotationsBuyerQuery,
  useSubmitQuotationBuyerMutation,
  useSubmitQuoteSellerMutation,
  // useGetAllQuotationsQuery,
  // useGetOneQuotationsQuery,
  // useSubmitQuotationMutation,
} = quotationApiSlice;
