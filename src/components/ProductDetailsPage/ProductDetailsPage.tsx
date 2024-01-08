import { useParams } from "react-router";
import { useFetchProductByIdQuery } from "../ProductsPage/products-api-slice";
import { ProductDetails } from "./ProductDetailsCard";
import "./product-details-page.scss";

export const ProductDetailsPage = () => {
  const { id } = useParams();

  const {
    data: product,
    //isError,
    //isLoading,
  } = useFetchProductByIdQuery(id) || {};

  return (
    <div className="product-details-page">
      {product && <ProductDetails product={product} />}
    </div>
  );
};
