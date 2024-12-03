import RootLayout from "@/layouts/RootLayout";
import AddEquipment from "@/pages/AddEquipment";
import AllSports from "@/pages/AllSports";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

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
        element: <ProductDetails />,
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
        element: <AddEquipment />,
      },
    ],
  },
]);
