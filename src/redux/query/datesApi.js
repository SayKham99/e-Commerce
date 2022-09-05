import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const datesApi = createApi({
    reducerPath: 'datesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (build) => ({
        getDates: build.query({
            query: (url) => `${url}`
        })
    })
})

export const {useGetDatesQuery} = datesApi;