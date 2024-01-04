import { ButtonType } from "../../models/ButtonType";
import { Button } from "../Common/Button";
import { removeFromWishlist } from "./Wishlist-slice";
import { useAppDispatch } from "../../app/hooks";

interface IWishListItemProps {
  id: string;
}

export const WishListItem = ({ id }: IWishListItemProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <>
      <p>{id}</p>
      <Button
        text="Remove"
        btnType={ButtonType.SECONDARY}
        onClick={() => {
          handleClick(id);
        }}
      ></Button>
    </>
  );
};
