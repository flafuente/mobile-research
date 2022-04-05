import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { Candidate } from '@slices/candidates';

type CandidateResponse = {
  data: Array<Candidate>;
};

const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: 'http://personio-fe-test.herokuapp.com/api/v1/' }), {
  maxRetries: 5,
});

export const candidatesApi = createApi({
  reducerPath: 'candidates',
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getCandidatesList: builder.query({
      query: () => `candidates`,
      transformResponse: (response:CandidateResponse) => response?.data.sort((a:Candidate, b:Candidate) => {
        return b.application_date.localeCompare(a.application_date); 
      }),
    }),
  }),
});

export const { useGetCandidatesListQuery } = candidatesApi;