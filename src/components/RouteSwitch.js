import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ProductDashboard } from "./ProductDashboard";
import { Cart } from "./Cart";

export const RouteSwitch = ({ productArray, click }) => {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <ProductDashboard productArray={productArray} click={click} />
          }
        ></Route>
        <Route path="/cart" element={<Cart productArray={productArray} click={click}></Cart>}></Route>
      </Routes>
  );
};
