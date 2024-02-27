import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://direct-relief-server.vercel.app/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["supplies"],
});
