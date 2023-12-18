import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";

const BASE_URL =
  import.meta.env.VITE_REACT_LOCAL_API_URL ||
  "https://jk-se-backend.vercel.app/api/v1/";

export const productsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<IProduct[], number | void>({
        query(limit = 10) {
          return `/products?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApiSlice;
