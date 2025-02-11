import { baseApi } from './baseApi';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    updateUser: builder.mutation<User, { id: string; data: UpdateUserRequest }>({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
  }),
});

export const { 
  useGetUserQuery, 
  useUpdateUserMutation,
} = userApi;