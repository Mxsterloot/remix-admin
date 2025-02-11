import { baseApi } from './baseApi';

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

interface CreatePostRequest {
  title: string;
  content: string;
}

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: ['Post'],
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    createPost: builder.mutation<Post, CreatePostRequest>({
      query: (data) => ({
        url: 'posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} = postApi;