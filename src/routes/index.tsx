import { createBrowserRouter } from "react-router";
import { pathAdmin } from "@/config/path";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Dashboard } from "@/features/dashboard/Dashboard";
import { CategoryList } from "@/features/category/CategoryList";
import { CategoryCreate } from "@/features/category/CategoryCreate";
import { TourList } from "@/features/tour/TourList";
import { TourCreate } from "@/features/tour/TourCreate";
import { TourTrash } from "@/features/tour/TourTrash";
import { OrderList } from "@/features/order/OrderList";
import { OrderEdit } from "@/features/order/OrderEdit";
import { UserList } from "@/features/user/UserList";
import { ContactList } from "@/features/contact/ContactList";
import { SettingList } from "@/features/setting/SettingList";
import { SettingWebsiteInfo } from "@/features/setting/websiteInfo/SettingWebsiteInfo";
import { SettingAccountAdminList } from "@/features/setting/account/SettingAccountAdminList";
import { SettingAccountAdminCreate } from "@/features/setting/account/SettingAccountAdminCreate";
import { SettingRoleList } from "@/features/setting/role/SettingRoleList";
import { SettingRoleCreate } from "@/features/setting/role/SettingRoleCreate";
import { ProfileEdit } from "@/features/profile/ProfileEdit";
import { ProfileChangePassword } from "@/features/profile/ProfileChangePassword";
import { Template } from "@/features/template/Template";
import { NotFound } from "@/features/error/NotFound";

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
]);
