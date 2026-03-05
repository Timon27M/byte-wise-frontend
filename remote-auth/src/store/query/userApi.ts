import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

type TLoginRequest = {
  login: string;
  password: string;
};

type TLoginResponse = {
  user: {
    login: string;
    id: string;
    created_at: string;
  },
  token: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<TLoginResponse, TLoginRequest>({
      query: (body: TLoginRequest) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
