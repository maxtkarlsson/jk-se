import { configureStore } from "@reduxjs/toolkit";

import { productsApiSlice } from "../components/ProductsPage/products-api-slice";
import { requestsApiSlice } from "../components/ContactPage/requests-api-slice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [requestsApiSlice.reducerPath]: requestsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
