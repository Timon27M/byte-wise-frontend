import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterFormData } from "../../schema/registerSchema";
import { LoginFormData } from "../../schema/loginSchema";

type TLoginOrRegisterResponse = {
  user: {
    login: string;
    id: string;
    created_at: string;
  };
  token: string;
};

type TRegisterRequest = {
  login: string;
  password: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<TLoginOrRegisterResponse, LoginFormData>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation<TLoginOrRegisterResponse, RegisterFormData>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = userApi;
