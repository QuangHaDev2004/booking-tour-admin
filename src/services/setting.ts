import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const getAccounAdminListService = async () => {
  const res = await api.get(`/${pathAdmin}/setting/account-admin/list`);
  return res.data;
};
