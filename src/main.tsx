import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/home-page/home-page.tsx";
import ProductDetailPage from "./pages/product-detail-page/product-detail-page.tsx";
import ProductListPage from "./pages/product-list-page/product-list-page.tsx";
import Register from "./pages/register/register.tsx";
import Login from "./pages/login/login.tsx";
import ErrorPage from "./pages/error-page/error-page.tsx";
import Cart from "./pages/cart-page/cart-page.tsx";
import Protected from "./components/protected-routes.tsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice.ts";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/each-item/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/products",
    element: <ProductListPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <Cart />
      </Protected>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
