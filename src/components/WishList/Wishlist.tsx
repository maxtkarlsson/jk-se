import { useAppSelector } from "../../app/hooks";
import { WishListItem } from "./WishListItem";
import { WishlistCounter } from "./WishlistCounter";
import "./wishlist.scss";

export const WishList = () => {
  const { wishlistItems } = useAppSelector((state) => state.wishlists);

  return (
    <>
      <div className="wishlist">
        <div className="wishlist__header">
          <h2>Your wishlist</h2>
          <WishlistCounter />
        </div>
        <ul className="wishlist__list">
          {wishlistItems.map((item) => {
            return <WishListItem item={item} key={item._id} />;
          })}
        </ul>
      </div>
    </>
  );
};
