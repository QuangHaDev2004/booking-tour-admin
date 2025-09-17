import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import { DashBoard } from "./pages/DashBoard/DashBoard.tsx";
import { CategoryList } from "./pages/Category/CategoryList.tsx";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/admin/category",
        element: <CategoryList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
