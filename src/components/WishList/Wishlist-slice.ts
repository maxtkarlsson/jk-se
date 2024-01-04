import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WishlistState {
  wishlistItems: string[];
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
    addToWishlist: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      const productIndex = state.wishlistItems.findIndex(
        (id) => id === productId
      );

      if (productIndex >= 0) {
        alert("This product already exist in yout wishlist.");
      } else {
        state.wishlistItems.push(productId);

        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },

    removeFromWishlist: (state, action: PayloadAction<string>) => {
      console.log("removeFromWishlist run with payload: ", action.payload);

      const productId = action.payload;

      const productIndex = state.wishlistItems.findIndex(
        (id) => id === productId
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
