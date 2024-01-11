import { ButtonType } from "../../models/ButtonType";
import { Button } from "../Common/Button";
import { removeFromWishlist } from "./Wishlist-slice";
import { useAppDispatch } from "../../app/hooks";
import { IProduct } from "../../models/IProduct";
import { Link } from "react-router-dom";
import "./wishlist-item.scss";

interface IWishListItemProps {
  item: IProduct;
}

export const WishListItem = ({ item }: IWishListItemProps) => {
  const { _id, name, price, imageUrls } = item;

  const dispatch = useAppDispatch();

  const handleClick = (item: IProduct) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <>
      <li className="wishlist-item">
        <Link className="product-link" to={`/products/${_id}`}>
          <div className="wishlist-item__content">
            <img
              src={`${imageUrls.productImages.small[0]}`}
              alt={`Image of the product ${name}`}
            />
            <div className="wishlist-item__text">
              <h2 className="wishlist-item__title">{name}</h2>
              <p className="wishlist-item__price">{price} Sek</p>
            </div>
          </div>
        </Link>

        <div className="wishlist-item__buttons">
          <Link to={`/request/${_id}`}>
            <Button text="Send request" btnType={ButtonType.PRIMARY}></Button>
          </Link>
          <Button
            text="Remove"
            btnType={ButtonType.TERTIARY}
            onClick={() => {
              handleClick(item);
            }}
          ></Button>
        </div>
      </li>
    </>
  );
};
