import { useAppSelector } from "../../app/hooks";

export const WishList = () => {
  const wishlistItems = useAppSelector((state) => state.wishlists);

  return (
    <>
      <h1>Wishlist</h1>
      {wishlistItems.wishlistItems}
    </>
  );
};
