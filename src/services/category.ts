import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const createCategoryService = async (dataFinal: FormData) => {
  const res = await api.post(`/${pathAdmin}/category/create`, dataFinal);
  return res.data;
};

export const getCategoryListService = async () => {
  const res = await api.get(`/${pathAdmin}/category/list`);
  return res.data;
};

export const getCategoryDetailService = async (id: string | undefined) => {
  const res = await api.get(`/${pathAdmin}/category/edit/${id}`);
  return res.data;
};

export const editCategoryService = async (
  id: string | undefined,
  dataFinal: FormData,
) => {
  const res = await api.patch(`/${pathAdmin}/category/edit/${id}`, dataFinal);
  return res.data;
};
