import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://direct-relief.vercel.app/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["supplies", "testimonial", "volunteer", "comment"],
});
