import { createBrowserRouter } from "react-router";
import { pathAdmin } from "@/config/path";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Dashboard } from "@/features/dashboard";
import { CategoryCreate, CategoryList } from "@/features/category";
import { TourCreate, TourList, TourTrash } from "@/features/tour";
import { OrderEdit, OrderList } from "@/features/order";
import { UserList } from "@/features/user";
import { ContactList } from "@/features/contact";
import {
  SettingAccountAdminCreate,
  SettingAccountAdminList,
  SettingList,
  SettingRoleCreate,
  SettingRoleList,
  SettingWebsiteInfo,
} from "@/features/setting";
import { ProfileChangePassword, ProfileEdit } from "@/features/profile";
import { Template } from "@/features/template";
import { NotFound } from "@/features/error";
import { AccountLayout } from "@/layouts/AccountLayout";
import { Login } from "@/features/auth";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: `/${pathAdmin}/dashboard`,
        element: <Dashboard />,
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
      {
        path: `/${pathAdmin}/order/edit`,
        element: <OrderEdit />,
      },
      {
        path: `/${pathAdmin}/user/list`,
        element: <UserList />,
      },
      {
        path: `/${pathAdmin}/contact/list`,
        element: <ContactList />,
      },
      {
        path: `/${pathAdmin}/setting/list`,
        element: <SettingList />,
      },
      {
        path: `/${pathAdmin}/setting/website-info`,
        element: <SettingWebsiteInfo />,
      },
      {
        path: `/${pathAdmin}/setting/account-admin/list`,
        element: <SettingAccountAdminList />,
      },
      {
        path: `/${pathAdmin}/setting/account-admin/create`,
        element: <SettingAccountAdminCreate />,
      },
      {
        path: `/${pathAdmin}/setting/role/list`,
        element: <SettingRoleList />,
      },
      {
        path: `/${pathAdmin}/setting/role/create`,
        element: <SettingRoleCreate />,
      },
      {
        path: `/${pathAdmin}/profile/edit`,
        element: <ProfileEdit />,
      },
      {
        path: `/${pathAdmin}/profile/change-password`,
        element: <ProfileChangePassword />,
      },
      {
        path: `/${pathAdmin}/template`,
        element: <Template />,
      },
    ],
  },
  {
    element: <AccountLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: `/${pathAdmin}/account/login`,
        element: <Login />,
      },
    ],
  },
]);
