import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const cartApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/cart/add-to-cart",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["cartData"],
    }),
    getCartItems: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/user/cart/get-cart-items",
        method: "GET",
      }),
      providesTags: ["cartData"],
    }),

    getCartSummary: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/user/cart/get-cart-summary",
        method: "GET",
      }),
      providesTags: ["cartData"],
    }),

    deleteCartItem: builder.mutation({
      query: (id) => ({
        headers: myHeaders,
        url: `/user/cart/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cartData"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useDeleteCartItemMutation,
  useGetCartItemsQuery,
  useGetCartSummaryQuery,
} = cartApiSlice;
