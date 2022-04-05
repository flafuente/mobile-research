import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Candidate } from '@slices/candidates';

type CandidateResponse = {
  data: Array<Candidate>;
};

export const candidatesApi = createApi({
  reducerPath: 'candidates',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://personio-fe-test.herokuapp.com/api/v1/' }),
  endpoints: (builder) => ({
    getCandidatesList: builder.query({
      query: () => `candidates`,
      transformResponse: (response:CandidateResponse) => response?.data,
    }),
  }),
})

export const { useGetCandidatesListQuery } = candidatesApi