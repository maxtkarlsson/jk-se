import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRequest } from "../../models/IRequest";

const BASE_URL =
  import.meta.env.VITE_REACT_LOCAL_API_URL ||
  "https://jk-se-backend.vercel.app/api/v1/";

export interface ICreateRequestBody {
  type: string;
  productId: string;
  email: string;
  phoneNr: string;
  text: string;
}

export const requestsApiSlice = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      createRequest: builder.mutation<IRequest, ICreateRequestBody>({
        query: (request) => ({
          url: "/requests",
          method: "POST",
          body: request,
        }),
      }),
    };
  },
});

export const { useCreateRequestMutation } = requestsApiSlice;
