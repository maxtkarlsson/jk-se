import { Link } from "react-router-dom";
import { IProduct } from "../../models/IProduct";
import "./product-card.scss";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, name, price, imageUrls } = product;

  return (
    <>
      <Link className="product-link" to={`/products/${_id}`}>
        <div className="product-card">
          <img
            className="product-card__img"
            src={`${imageUrls.productImages.medium[0]}`}
            alt={`Image of the product ${name}`}
          />
          <div className="product-card__content">
            <h2 className="product-card__title">{name}</h2>
            <p className="product-card__price">{price} Sek</p>
          </div>
        </div>
      </Link>
    </>
  );
};
