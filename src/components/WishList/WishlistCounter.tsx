import { useAppSelector } from "../../app/hooks";
import "./wishlist-counter.scss";

export const WishlistCounter = () => {
  const { wishlistItems } = useAppSelector((state) => state.wishlists);
  return (
    <>
      <span className="wishlist-counter">{wishlistItems.length}</span>
    </>
  );
};
