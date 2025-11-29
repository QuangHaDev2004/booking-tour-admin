import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const getOrderList = async () => {
  const res = await api.get(`/${pathAdmin}/order/list`);
  return res.data;
};
