import { IProduct } from "../../models/IProduct";
import { addToWishlist } from "../WishList/Wishlist-slice";
import { Button } from "../Common/Button";
import { ButtonType } from "../../models/ButtonType";
import { useAppDispatch } from "../../app/hooks";
import "./product-details-card.scss";
import { Link } from "react-router-dom";

interface IProductDetailsProps {
  product: IProduct;
}

export const ProductDetails = ({ product }: IProductDetailsProps) => {
  const dispatch = useAppDispatch();
  const handleClick = (product: IProduct) => {
    dispatch(addToWishlist(product));
  };
  return (
    <>
      <div className="product-details-card">
        <img
          className="product-details-card__img"
          src="https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/productImages/1000x667/jennyprodukt26maj2016nr171-1000x667.webp"
          alt=""
        />
        <div className="product-details-card__info">
          <h2 className="product-details-card__title">{product.name}</h2>
          <p className="product-details-card__desc">{product.description}</p>
          <p className="product-details-card__price">{product.price} Sek</p>
        </div>
        <div className="product-details-card__buttons">
          <Link to={`/request/${product._id}`}>
            <Button text="Send request" btnType={ButtonType.PRIMARY}></Button>
          </Link>
          <Button
            text="Add to wishlist"
            btnType={ButtonType.SECONDARY}
            onClick={() => {
              handleClick(product);
            }}
          ></Button>
        </div>
      </div>
    </>
  );
};
