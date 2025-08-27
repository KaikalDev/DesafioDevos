import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.devosalliance.com/api'
  }),
  endpoints: (builder) => ({
    getAll: builder.query<ApiResponse, void>({
      query: () => '/kbase'
    })
  })
})

export const { useGetAllQuery } = api
export default api
