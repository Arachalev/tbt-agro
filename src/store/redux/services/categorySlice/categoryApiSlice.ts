import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const categoryApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOneCategory: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/category/show/${id}`,
        method: "GET",
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/category/list",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetOneCategoryQuery } =
  categoryApiSlice;
