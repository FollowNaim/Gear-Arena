import RootLayout from "@/layouts/RootLayout";
import AddEquipment from "@/pages/AddEquipment";
import AllSports from "@/pages/AllSports";
import Error404 from "@/pages/Error404";
import Home from "@/pages/Home";
import MyEquipment from "@/pages/MyEquipment";
import ProductDetails from "@/pages/ProductDetails";
import SignIn from "@/pages/SIgnIn";
import SignUp from "@/pages/SignUp";
import UpdateEquipment from "@/pages/UpdateEquipment";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/products/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-sports",
        element: <AllSports />,
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
