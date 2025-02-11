import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api',
    // Add default headers, credentials, etc
    credentials: 'include',
  }),
  endpoints: () => ({}),
  tagTypes: ['User', 'Post'], // Add your cache tags here
});

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.error('API Error:', action.payload);
    // Handle global error notifications here
  }

  return next(action);
};