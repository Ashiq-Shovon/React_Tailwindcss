import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const vanApi = createApi({
  reducerPath: "vanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getVans: builder.query({ query: () => "vans" }),
    getHostVans: builder.query({ query: () => "host/vans" }),
    getHostVanDetail: builder.query({
      query: (params) => (params ? `host/vans/${params}` : {}),
    }),
  }),
});

export const {
  useGetVansQuery,
  useGetHostVansQuery,
  useGetHostVanDetailQuery,
} = vanApi;
