import { useParams } from "react-router";
import { useFetchProductByIdQuery } from "../ProductsPage/products-api-slice";
import { ProductDetails } from "./ProductDetailsCard";
import "./product-details-page.scss";
import { Spinner } from "../Common/Spinner";

export const ProductDetailsPage = () => {
  const { id } = useParams();

  const {
    data: product,
    //isError,
    status,
  } = useFetchProductByIdQuery(id) || {};

  return (
    <div className="product-details-page">
      {status === "pending" && <Spinner />}
      {product && <ProductDetails product={product} />}
    </div>
  );
};
