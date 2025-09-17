import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import { DashBoard } from "./pages/DashBoard/DashBoard.tsx";
import { CategoryList } from "./pages/Category/Category.tsx";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/category",
        element: <CategoryList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
