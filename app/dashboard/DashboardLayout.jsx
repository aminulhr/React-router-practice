import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <h1 className="text-5xl text-yellow-300">Dashboard Layout</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
