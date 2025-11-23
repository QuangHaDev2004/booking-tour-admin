import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const getCityListService = async () => {
  const res = await api.get(`/${pathAdmin}/city/list`);
  return res.data;
};
