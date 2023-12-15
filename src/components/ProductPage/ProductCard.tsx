import { IProduct } from "../../models/IProduct";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const name = product.name;
  const category = product.category;
  const desc = product.description;
  const price = product.price;
  const imgMedium = product.imageUrls.productImages.medium;

  return (
    <>
      <p>{name}</p>
      <p>{category}</p>
      <p>{desc}</p>
      <p>{price}</p>
      <p>{imgMedium}</p>
    </>
  );
};
