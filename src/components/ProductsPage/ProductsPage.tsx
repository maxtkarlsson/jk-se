import { ProductList } from "./ProductList";
import { useFetchProductsQuery } from "./products-api-slice";

export const ProductsPage = () => {
  const { data = [], isFetching } = useFetchProductsQuery();

  return (
    <>
      <div>Number of products fetched: {data.length}</div>
      <div>isFetching: {isFetching}</div>
      <ProductList productList={data} />
    </>
  );
};
