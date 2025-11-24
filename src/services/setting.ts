import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const getAccounAdminListService = async () => {
  const res = await api.get(`/${pathAdmin}/setting/account-admin/list`);
  return res.data;
};

export const websiteInfoEditService = async (dataFinal: FormData) => {
  const res = await api.patch(`/${pathAdmin}/setting/website-info`, dataFinal);
  return res.data;
};

export const websiteInfoDetailService = async () => {
  const res = await api.get(`/${pathAdmin}/setting/website-info`);
  return res.data;
};
