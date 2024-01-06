import { configureStore } from "@reduxjs/toolkit";

import { productsApiSlice } from "../components/ProductsPage/products-api-slice";
import { requestsApiSlice } from "../components/RequestPage/requests-api-slice";

import { wishlistSlice } from "../components/WishList/Wishlist-slice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [requestsApiSlice.reducerPath]: requestsApiSlice.reducer,
    wishlists: wishlistSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
