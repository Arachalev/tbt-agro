import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const saveLaterApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveForLater: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/user/product/save-for-later",
        body: data,
        method: "POST",
      }),
    }),
    removeSavedProduct: builder.mutation({
      query: ({ id, data }) => ({
        header: myHeaders,
        url: `/user/product/remove-saved-product/${id}`,
        body: data,
        method: "DELETE",
      }),
    }),

    getAllSavedProducts: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/user/product/get-saved-products",
        method: "GET",
      }),
    }),
    getOneSavedProduct: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/user/product/get-one-saved-product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllSavedProductsQuery,
  useGetOneSavedProductQuery,
  useRemoveSavedProductMutation,
  useSaveForLaterMutation,
} = saveLaterApiSlice;
