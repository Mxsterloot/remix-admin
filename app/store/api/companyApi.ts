import { Company } from '../types';
import { baseApi } from './baseApi';

export const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => 'companies',
      providesTags: ['Company'],
    }),
  }),
});

export const { 
  useGetCompaniesQuery,
} = companyApi;