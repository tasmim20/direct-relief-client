import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
      }),
      providesTags: ["supplies"],
    }),

    createSupplies: builder.mutation({
      query: (body) => ({
        url: "/supplies",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["supplies"],
    }),
    updateSupply: builder.mutation({
      query: ({ id, body }) => ({
        url: `/supplies/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});
export const {
  useGetSuppliesQuery,
  useGetSingleSupplyQuery,
  useCreateSuppliesMutation,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = authApi;
