import { IProduct } from "../../models/IProduct";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  productList: IProduct[];
}

export const ProductList = ({ productList }: ProductListProps) => {
  return (
    <>
      {productList.map((prod) => {
        return <ProductCard product={prod} key={prod._id} />;
      })}
    </>
  );
};
