import { ButtonType } from "../../models/ButtonType";
import { Button } from "../Common/Button";
import { removeFromWishlist } from "./Wishlist-slice";
import { useAppDispatch } from "../../app/hooks";
import { IProduct } from "../../models/IProduct";

interface IWishListItemProps {
  item: IProduct;
}

export const WishListItem = ({ item }: IWishListItemProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (item: IProduct) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <>
      <p>{item._id}</p>
      <Button
        text="Remove"
        btnType={ButtonType.SECONDARY}
        onClick={() => {
          handleClick(item);
        }}
      ></Button>
    </>
  );
};
