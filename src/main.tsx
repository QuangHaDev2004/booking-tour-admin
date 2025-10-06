import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import { DashBoard } from "./pages/DashBoard/DashBoard.tsx";
import { CategoryList } from "./pages/Category/CategoryList.tsx";
import { CategoryCreate } from "./pages/Category/CategoryCreate.tsx";
import { pathAdmin } from "./constants/path.ts";
import { TourList } from "./pages/Tour/TourList.tsx";

const router = createBrowserRouter([
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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
