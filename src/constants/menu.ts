import {
  FaGaugeHigh,
  FaGear,
  FaList,
  FaListCheck,
  FaTable,
  FaUser,
  FaUserGear,
  FaUserGroup,
} from "react-icons/fa6";

export const mainMenus = [
  {
    to: "/admin/dashboard",
    label: "Tổng quan",
    icon: FaGaugeHigh,
  },
  {
    to: "/admin/category",
    label: "Quản lý danh mục",
    icon: FaTable,
  },
  {
    to: "/admin/tour",
    label: "Quản lý tour",
    icon: FaList,
  },
  {
    to: "/admin/order",
    label: "Quản lý đơn hàng",
    icon: FaListCheck,
  },
  {
    to: "/admin/user",
    label: "Quản lý người dùng",
    icon: FaUser,
  },
  {
    to: "/admin/contact",
    label: "Thông tin liên hệ",
    icon: FaUserGroup,
  },
];

export const settingsMenus = [
  {
    to: "/admin/setting",
    label: "Cài đặt chung",
    icon: FaGear,
  },
  {
    to: "/admin/profile",
    label: "Thông tin cá nhân",
    icon: FaUserGear,
  },
];
