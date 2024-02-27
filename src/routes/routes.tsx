import App from "@/App";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import Login from "@/pages/Login";
import AllSupplies from "@/pages/supply/AllSupplies";
import CreateSupply from "@/pages/supply/CreateSupply";
import SupplyTable from "@/pages/supply/SupplyTable";
import Register from "@/pages/Register";
import SupplyDetail from "@/pages/supply/SupplyDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "supplies/:id", // Define the route parameter ":id"
        element: <SupplyDetail />, // No need to pass productId here
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <h2>dashboard</h2>,
      },
      {
        path: "supplies",
        element: <SupplyTable />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);

export default router;