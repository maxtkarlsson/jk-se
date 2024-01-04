import { useAppSelector } from "../../app/hooks";
import { WishListItem } from "./WishListItem";

export const WishList = () => {
  const { wishlistItems } = useAppSelector((state) => state.wishlists);

  return (
    <>
      <h1>Wishlist contains nr of prod: {wishlistItems.length}</h1>
      {wishlistItems.map((itemId) => {
        return <WishListItem id={itemId} key={itemId} />;
      })}
    </>
  );
};
