import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: (params) => ({
        url: "api/projects",
        method: "GET",
        params,
      }),
    }),
    getProjectById: build.query({
      query: ({ id, params }) => ({
        url: `api/projects/${id}`,
        method: "GET",
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectsQuery, useGetProjectByIdQuery } = extendedApi;
