import { baseApi } from "@/redux/api/baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComment: builder.query({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
      providesTags: ["comment"],
    }),

    createComment: builder.mutation({
      query: (body) => ({
        url: "/comment",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});
export const { useCreateCommentMutation, useGetCommentQuery } = commentApi;
