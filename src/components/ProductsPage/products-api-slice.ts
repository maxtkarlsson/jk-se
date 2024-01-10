import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";

const BASE_URL =
  import.meta.env.VITE_REACT_LOCAL_API_URL ||
  "https://jk-se-backend.vercel.app/api/v1/";

export interface IResponseObject {
  products: IProduct[];
  meta: {
    status: string;
    total: number;
    count: number;
    page: number;
    pages: number;
  };
}

/*
export interface IProductsQuery {
  page: number;
}
*/
export const productsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<IResponseObject, number | void>({
        query: (page = 1) => {
          return `/products?page=${page}`;
        },
      }),
      fetchProductById: builder.query<IProduct, string | undefined>({
        query: (id) => `/products/${id}`,
      }),
    };
  },
});

export const { useFetchProductsQuery, useFetchProductByIdQuery } =
  productsApiSlice;
