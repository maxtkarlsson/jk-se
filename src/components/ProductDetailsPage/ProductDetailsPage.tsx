import { useParams } from "react-router";
import { useFetchProductByIdQuery } from "../ProductsPage/products-api-slice";
//import { useEffect, useState } from "react";
import { addToWishlist } from "../WishList/Wishlist-slice";
import { Button } from "../Common/Button";
import { ButtonType } from "../../models/ButtonType";
import { useAppDispatch } from "../../app/hooks";

export const ProductDetailsPage = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const {
    data: product,
    //isError,
    //isLoading,
  } = useFetchProductByIdQuery(id) || {};

  const handleClick = (id: string) => {
    dispatch(addToWishlist(id));
  };

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
          <Button
            text="Add to wishlist"
            btnType={ButtonType.SECONDARY}
            onClick={() => {
              handleClick(product._id);
            }}
          ></Button>
        </div>
      )}
    </>
  );
};
