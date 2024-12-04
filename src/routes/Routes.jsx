import RootLayout from "@/layouts/RootLayout";
import AddEquipment from "@/pages/AddEquipment";
import AllSports from "@/pages/AllSports";
import Home from "@/pages/Home";
import MyEquipment from "@/pages/MyEquipment";
import ProductDetails from "@/pages/ProductDetails";
import SignIn from "@/pages/SIgnIn";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/limited-products"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/all-sports",
        element: <AllSports />,
        loader: () => fetch("http://localhost:5000/all-products"),
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoutes>
            <AddEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoutes>
            <MyEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/auth/signin",
        element: <SignIn />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);
