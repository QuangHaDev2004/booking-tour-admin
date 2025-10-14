import { pathAdmin } from "@/config/path";
import { FaInfo, FaUserGear, FaUserTie } from "react-icons/fa6";

export const SETTING_LIST = [
  {
    id: 1,
    to: `/${pathAdmin}/setting/website-info`,
    icon: FaInfo,
    content: "Thông tin website",
  },
  {
    id: 2,
    to: `/${pathAdmin}/setting/account-admin/list`,
    icon: FaUserTie,
    content: "Tài khoản quản trị",
  },
  {
    id: 3,
    to: `/${pathAdmin}/setting/role/list`,
    icon: FaUserGear,
    content: "Nhóm quyền",
  },
];
