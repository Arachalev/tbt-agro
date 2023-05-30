import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const orderApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/order/create",
        body: data,
        method: "POST",
      }),
    }),
    searchOrder: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/order/search",
        body: data,
        method: "POST",
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/user/order/my-orders",
        method: "GET",
      }),
    }),
    getOneOrder: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/user/order/show/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetOneOrderQuery,
  useSearchOrderMutation,
} = orderApiSlice;
