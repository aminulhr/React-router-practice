import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./Pages/Home.jsx"),
  route("/about", "./Pages/About.tsx"),
  // nested routing
  // route("dashboard", "./dashboard/DashboardLayout.jsx", [
  //   index("./dashboard/DashboardHome.jsx"),
  //   route("satting", "./dashboard/DashboardSatting.jsx"),
  // ]),

  // Layout Routing
  layout("./products/ProductLayout.jsx", [
    route("product-home", "./products/ProductHome.jsx"),
    route("product-details", "./products/ProductDetail.jsx"),
  ]),
] satisfies RouteConfig;
