import RootLayout from "@/layouts/RootLayout";
import About from "@/pages/About";
import AddEquipment from "@/pages/AddEquipment";
import AllSports from "@/pages/AllSports";
import Contact from "@/pages/Contact";
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
        element: <ProductDetails />,
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
        path: "/all-equipments",
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
        path: "/my-equipments",
        element: (
          <PrivateRoutes>
            <MyEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
