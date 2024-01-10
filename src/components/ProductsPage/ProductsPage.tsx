import { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { useFetchProductsQuery } from "./products-api-slice";
import "./products-page.scss";
import { Spinner } from "../Common/Spinner";
//import { useParams } from "react-router";

export const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const {
    data = {
      products: [],
      meta: {
        page,
        pages,
      },
    },
    status,
  } = useFetchProductsQuery(page);

  useEffect(() => {
    setPages(data.meta.pages);
  }, [data.meta.pages, page, pages]);

  const incrementPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const decrementPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      {status === "pending" && <Spinner />}
      {status === "fulfilled" && (
        <div className="products-page">
          <div className="products-page__pagination">
            <button
              className="products-page__button--back"
              onClick={decrementPage}
              disabled={page < 2}
            >
              <svg
                width="15"
                height="20"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.8182L2.72727 14.5455L10 7.27273L2.72727 2.86102e-06L0 2.72728L4.54545 7.27273L0 11.8182Z"
                  fill="#DBAC34"
                />
              </svg>
              <span className="sr-only">Go to previous page</span>
            </button>
            <p>
              Page {page}/{pages}
            </p>
            <button
              className="products-page__button"
              onClick={incrementPage}
              disabled={page === pages}
            >
              <svg
                width="15"
                height="20"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.8182L2.72727 14.5455L10 7.27273L2.72727 2.86102e-06L0 2.72728L4.54545 7.27273L0 11.8182Z"
                  fill="#DBAC34"
                />
              </svg>
              <span className="sr-only">Go to next page</span>
            </button>
          </div>
          <div className="products-page__list">
            <ProductList productList={data.products} />
          </div>
        </div>
      )}
    </>
  );
};
