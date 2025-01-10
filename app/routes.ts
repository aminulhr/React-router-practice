import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./Pages/Home.jsx"),
  route("/about", "./Pages/About.tsx"),
  // nested routing
  route("dashboard", "./dashboard/DashboardLayout.jsx", [
    index("./dashboard/DashboardHome.jsx"),
    route("satting", "./dashboard/DashboardSatting.jsx"),
  ]),
] satisfies RouteConfig;
