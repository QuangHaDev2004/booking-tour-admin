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
    to: "/",
    label: "Tổng quan",
    icon: FaGaugeHigh,
  },
  {
    to: "/categories",
    label: "Quản lý danh mục",
    icon: FaTable,
  },
  {
    to: "/tours",
    label: "Quản lý tour",
    icon: FaList,
  },
  {
    to: "/orders",
    label: "Quản lý đơn hàng",
    icon: FaListCheck,
  },
  {
    to: "/users",
    label: "Quản lý người dùng",
    icon: FaUser,
  },
  {
    to: "/contacts",
    label: "Thông tin liên hệ",
    icon: FaUserGroup,
  },
];

export const settingsMenus = [
  {
    to: "/settings",
    label: "Cài đặt chung",
    icon: FaGear,
  },
  {
    to: "/profile",
    label: "Thông tin cá nhân",
    icon: FaUserGear,
  },
];
