import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    // Add default headers, credentials, etc
    credentials: 'include',
  }),
  endpoints: () => ({}),
  tagTypes: ['User', 'Post','Company','Employee'], // Add your cache tags here
});

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.error('API Error:', action.payload);
    // Handle global error notifications here
  }

  return next(action);
};