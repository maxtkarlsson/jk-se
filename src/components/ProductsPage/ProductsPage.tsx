import { useState } from "react";
import { ProductList } from "./ProductList";
import { useFetchProductsQuery, IProductsQuery } from "./products-api-slice";

export const ProductsPage = () => {
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(0);

  const query: IProductsQuery = {
    limit: limit,
    offset: offset,
  };

  const {
    data = { products: [], meta: {} },
    isFetching,
    status,
  } = useFetchProductsQuery(query);

  return (
    <>
      <div>
        <p>Limit:</p>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <p>Offset:</p>
        <select
          value={offset}
          onChange={(e) => setOffset(Number(e.target.value))}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      {status === "fulfilled" && (
        <div>
          <div>Number of products fetched: {data.products?.length}</div>
          <div>isFetching: {JSON.stringify(isFetching)}</div>
          <ProductList productList={data.products} />
        </div>
      )}
    </>
  );
};
