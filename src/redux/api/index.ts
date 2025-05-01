import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { logout } from '../feautures/auth.slice';
// CRUD
// Read -> get -> query
// CUD - post, put, delete - mutation
const baseQuery = async (args: any, api: any, extraOptions: any) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://api.milliardev.com/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  const response = await rawBaseQuery(args, api, extraOptions);
  return response;
};


export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["BLOG", "PRODUCT"]
})