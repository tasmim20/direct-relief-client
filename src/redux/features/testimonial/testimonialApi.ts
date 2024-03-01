import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),

    createTestimonial: builder.mutation({
      query: (body) => ({
        url: "/testimonial",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});
export const { useCreateTestimonialMutation, useGetTestimonialQuery } = authApi;
