import React from "react";
import { Outlet } from "react-router";

const ProductHome = () => {
  return (
    <div>
      <h1 className="text-6xl text-center text-yellow-400">Header</h1>
      <Outlet />
      <h1 className="text-6xl text-center text-red-400">Fotter</h1>
    </div>
  );
};

export default ProductHome;
