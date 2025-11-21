import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const createCategoryService = async (dataFinal: FormData) => {
  const res = await api.post(`/${pathAdmin}/category/create`, dataFinal);
  return res.data;
};

export const getCategoriesService = async () => {
  const res = await api.get(`/${pathAdmin}/category/list`);
  return res.data;
};
