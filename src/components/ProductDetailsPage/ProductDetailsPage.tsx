import { useParams } from "react-router";
import { useFetchProductByIdQuery } from "../ProductsPage/products-api-slice";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const {
    data: product,
    //isError,
    //isLoading,
  } = useFetchProductByIdQuery(id) || {};

  return (
    <>
      {product && (
        <div>
          <h1>ProductDetailsPage</h1>
          <p>ID: {product._id}</p>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
        </div>
      )}
    </>
  );
};
