import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface WishlistState {
  wishlistItems: IProduct[];
  //wishlistTotalAmount: number;
}

const initialState: WishlistState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems") || "")
    : [],
  //wishlistTotalAmount: 0,
};

export const wishlistSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
      const productId = action.payload._id;

      const productIndex = state.wishlistItems.findIndex(
        (item) => item._id === productId
      );

      if (productIndex >= 0) {
        alert("This product already exist in yout wishlist.");
      } else {
        state.wishlistItems.push(action.payload);

        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },

    removeFromWishlist: (state, action: PayloadAction<IProduct>) => {
      const productId = action.payload._id;

      const productIndex = state.wishlistItems.findIndex(
        (item) => item._id === productId
      );

      if (productIndex < 0) {
        alert("This product does not exist in your wishlist");
      } else {
        state.wishlistItems.splice(productIndex, 1);

        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, clearWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
