import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
    createVolunteer: builder.mutation({
      query: (userInfo) => ({
        url: "/volunteer",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});
export const { useCreateVolunteerMutation, useGetVolunteerQuery } = authApi;
