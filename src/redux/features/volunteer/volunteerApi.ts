import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (userInfo) => ({
        url: "/volunteer",
        method: "POST",
        body: userInfo,
      }),
    }),
    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
  }),
});
export const { useCreateVolunteerMutation, useGetVolunteerQuery } = authApi;
