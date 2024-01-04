import { ButtonType } from "../../models/ButtonType";
import { Button } from "../Common/Button";
import { removeFromWishlist } from "./Wishlist-slice";
import { useAppDispatch } from "../../app/hooks";
import { IProduct } from "../../models/IProduct";
import { Link } from "react-router-dom";

interface IWishListItemProps {
  item: IProduct;
}

export const WishListItem = ({ item }: IWishListItemProps) => {
  const { _id, name, price } = item;

  const dispatch = useAppDispatch();

  const handleClick = (item: IProduct) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <>
      <div>
        <div>
          <p>image</p>
          <span>{name}</span>
          <span>{price} Sek</span>
        </div>
        <div>
          <Link to={`/request/${_id}`}>More Details</Link>
          <Button text="Order" btnType={ButtonType.PRIMARY}></Button>
          <Button text="Contact me" btnType={ButtonType.SECONDARY}></Button>
          <Button
            text="Remove"
            btnType={ButtonType.TERTIARY}
            onClick={() => {
              handleClick(item);
            }}
          ></Button>
        </div>
      </div>
    </>
  );
};
