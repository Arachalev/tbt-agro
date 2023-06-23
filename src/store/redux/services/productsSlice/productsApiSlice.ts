import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const productsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/product/list",
        method: "GET",
      }),
    }),
    getOneProduct: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/product/show/${id}`,
        method: "GET",
      }),
    }),
    getTopRatedProducts: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/product/top-rated",
        method: "GET",
      }),
    }),
    getTopRankedProducts: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/product/top-ranked-products",
        method: "GET",
      }),
    }),
    getProductsByCategory: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/product/category/${id}`,
        method: "GET",
      }),
    }),
    getNewArrivals: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/product/new-arrival",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useGetTopRatedProductsQuery,
  useGetNewArrivalsQuery,
  useGetProductsByCategoryQuery,
  useGetTopRankedProductsQuery,
} = productsApiSlice;
