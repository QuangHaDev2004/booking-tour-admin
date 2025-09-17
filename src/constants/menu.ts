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
    to: "/dashboard",
    label: "Tổng quan",
    icon: FaGaugeHigh,
  },
  {
    to: "/category",
    label: "Quản lý danh mục",
    icon: FaTable,
  },
  {
    to: "/tour",
    label: "Quản lý tour",
    icon: FaList,
  },
  {
    to: "/order",
    label: "Quản lý đơn hàng",
    icon: FaListCheck,
  },
  {
    to: "/user",
    label: "Quản lý người dùng",
    icon: FaUser,
  },
  {
    to: "/contact",
    label: "Thông tin liên hệ",
    icon: FaUserGroup,
  },
];

export const settingsMenus = [
  {
    to: "/setting",
    label: "Cài đặt chung",
    icon: FaGear,
  },
  {
    to: "/profile",
    label: "Thông tin cá nhân",
    icon: FaUserGear,
  },
];
