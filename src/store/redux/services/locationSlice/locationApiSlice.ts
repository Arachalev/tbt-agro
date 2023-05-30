import { baseApiSlice } from "../baseApiSlice";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const locationApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => ({
        headers: myHeaders,
        url: "/location/countries",
        method: "GET",
      }),
    }),
    getStatesInCountry: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/location/states/${id}`,
        method: "GET",
      }),
    }),
    getCitiesInState: builder.query({
      query: (id) => ({
        headers: myHeaders,
        url: `/location/cities/${id}`,
        method: "GET",
      }),
    }),
    
  }),
});
