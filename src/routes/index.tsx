import { createBrowserRouter } from "react-router";
import { pathAdmin } from "../constants/path";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { DashBoard } from "../pages/DashBoard/DashBoard";
import { CategoryList } from "../pages/Category/CategoryList";
import { CategoryCreate } from "../pages/Category/CategoryCreate";
import { TourList } from "../pages/Tour/TourList";
import { TourCreate } from "../pages/Tour/TourCreate";
import { TourTrash } from "../pages/Tour/TourTrash";
import { OrderList } from "../pages/Order/OrderList";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: `/${pathAdmin}/dashboard`,
        element: <DashBoard />,
      },
      {
        path: `/${pathAdmin}/category/list`,
        element: <CategoryList />,
      },
      {
        path: `/${pathAdmin}/category/create`,
        element: <CategoryCreate />,
      },
      {
        path: `/${pathAdmin}/tour/list`,
        element: <TourList />,
      },
      {
        path: `/${pathAdmin}/tour/create`,
        element: <TourCreate />,
      },
      {
        path: `/${pathAdmin}/tour/trash`,
        element: <TourTrash />,
      },
      {
        path: `/${pathAdmin}/order/list`,
        element: <OrderList />,
      },
    ],
  },
]);
