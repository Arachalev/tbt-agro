import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const paymentApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makePayment: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/payment/pay",
        body: data,
        method: "POST",
      }),
    }),
    verifyPayment: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/payment/verify",
        body: data,
        method: "POST",
      }),
    }),
    getAllPayments: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/user/payment/my-payments",
        method: "GET",
      }),
    }),
    getOnePayment: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/user/payment/show/${id}`,
        method: "GET",
      }),
    }),
    getAllBanks: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/seller/bank-account/get-banks",
        method: "GET",
      }),
    }),
    setBankAccount: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/seller/bank-account/submit-details",
        method: "POST",
        body: data,
      }),
    }),
    validateBankAccount: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "seller/bank-account/validate",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllPaymentsQuery,
  useGetOnePaymentQuery,
  useMakePaymentMutation,
  useVerifyPaymentMutation,
  useGetAllBanksQuery,
  useSetBankAccountMutation,
  useValidateBankAccountMutation,
} = paymentApiSlice;
