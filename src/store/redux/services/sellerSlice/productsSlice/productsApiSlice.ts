import { baseApiSlice } from "../../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const createProdHeaders = new Headers();

createProdHeaders.append("Accept", "*/*");
// createProdHeaders.append("Accept", "application/json");
// createProdHeaders.append("Content-Type", "multipart/form-data");
// createProdHeaders.append("Accept-Encoding", "multipart/form-data");


const productApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        headers: createProdHeaders,
        url: "/seller/product/create",
        body: data,
        method: "POST",
      }),
    }),
    updateProduct: builder.mutation({ 
      query: (data) => ({
        headers: myHeaders,
        url: "/seller/product/update",
        body: data,
        method: "POST",
      }),
    }),
    getSellersProduct: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/seller/product/my-product/get-all",
        method: "GET",
      }),
    }),
    getOneSellersProduct: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/seller/product/my-product/get-one/${id}`,
        method: "GET",
      }),
    }),
    deleteProductImage: builder.mutation({
      query: (data) => ({
        headers: myHeaders,
        url: "/seller/product/delete-image",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductImageMutation,
  useGetOneSellersProductQuery,
  useGetSellersProductQuery,
  useUpdateProductMutation,
} = productApiSlice;
