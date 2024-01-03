import { Link } from "react-router-dom";
import { IProduct } from "../../models/IProduct";
import "./product-card.scss";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const id = product._id;
  const name = product.name;
  const price = product.price;

  //const imgMedium = product.imageUrls.productImages.medium;

  return (
    <>
      <div className="product-card">
        <img
          src="/public/productImages/464x323.png"
          className="product-card__img"
        />
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">{price} Sek</span>
        <Link to={`/products/${id}`}>More Details</Link>
      </div>
    </>
  );
};
