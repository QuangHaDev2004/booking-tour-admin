import { createBrowserRouter } from "react-router";
import { pathAdmin } from "../config/path";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { DashBoard } from "../pages/DashBoard/DashBoard";
import { CategoryList } from "../pages/Category/CategoryList";
import { CategoryCreate } from "../pages/Category/CategoryCreate";
import { TourList } from "../pages/Tour/TourList";
import { TourCreate } from "../pages/Tour/TourCreate";
import { TourTrash } from "../pages/Tour/TourTrash";
import { OrderList } from "../pages/Order/OrderList";
import { OrderEdit } from "../pages/Order/OrderEdit";
import { UserList } from "../pages/User/UserList";
import { ContactList } from "../pages/Contact/ContactList";
import { SettingList } from "../pages/Setting/SettingList";
import { SettingWebsiteInfo } from "../pages/Setting/SettingWebsiteInfo";
import { SettingAccountAdminList } from "../pages/Setting/AccountAdmin/SettingAccountAdminList";
import { SettingAccountAdminCreate } from "../pages/Setting/AccountAdmin/SettingAccountAdminCreate";
import { SettingRoleList } from "../pages/Setting/Role/SettingRoleList";
import { SettingRoleCreate } from "../pages/Setting/Role/SettingRoleCreate";
import { ProfileEdit } from "../pages/Profile/ProfileEdit";
import { ProfileChangePassword } from "../pages/Profile/ProfileChangePassword";
import { NotFound } from "../pages/Errors/NotFound";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <NotFound />,
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
    ],
  },
]);
