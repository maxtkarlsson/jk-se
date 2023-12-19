import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";

const BASE_URL =
  import.meta.env.VITE_REACT_LOCAL_API_URL ||
  "https://jk-se-backend.vercel.app/api/v1/";

export interface IResponseObject {
  products: IProduct[];
  meta: {
    total: number;
    limit: number;
    offset: number;
    count: number;
  };
}

export interface IProductsQuery {
  limit: number;
  offset: number;
}

export const productsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<IResponseObject, IProductsQuery>({
        query: ({ limit = 0, offset = 0 }) => {
          return `/products?offset=${offset}&limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApiSlice;
