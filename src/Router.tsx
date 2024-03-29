import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/HomePage/HomePage";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";
import { ProductDetailsPage } from "./components/ProductDetailsPage/ProductDetailsPage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { RequestPage } from "./components/RequestPage/RequestPage";
import { WishList } from "./components/WishList/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/request/:id",
        element: <RequestPage />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
]);
