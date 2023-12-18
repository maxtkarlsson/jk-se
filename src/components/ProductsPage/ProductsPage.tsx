import { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { IProduct } from "../../models/IProduct";
import { GetAllProducts } from "../../services/ProductService";

export const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const products = await GetAllProducts();
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <ProductList productList={products} />;
};
