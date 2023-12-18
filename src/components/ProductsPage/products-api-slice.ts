import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";

export const productsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
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
