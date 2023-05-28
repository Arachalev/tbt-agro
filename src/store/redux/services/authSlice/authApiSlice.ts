import { baseApiSlice } from "../baseApiSlice";

let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export const authApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => ({
        headers: myHeaders,
        url: "user/auth/signup",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    verifyAccount: builder.mutation({
      query: (otp) => ({
        headers: myHeaders,
        url: "/user/auth/account/verify-otp",
        method: "POST",
        body: { ...otp },
      }),
    }),
    resendOtp: builder.mutation({
      query: (credentials) => ({
        headers: myHeaders,
        url: "user/auth/account/resend-otp",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        headers: myHeaders,
        url: "/user/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useResendOtpMutation,
  useSignUpMutation,
  useVerifyAccountMutation,
  useLoginMutation
} = authApiSlice;
