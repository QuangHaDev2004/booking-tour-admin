import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const createTourService = async (dataFinal: FormData) => {
  const res = await api.post(`/${pathAdmin}/tour/create`, dataFinal);
  return res.data;
};

export const getTourListService = async (params?: Record<string, string>) => {
  const res = await api.get(`/${pathAdmin}/tour/list`, { params });
  return res.data;
};

export const tourChangeMultiService = async (dataFinal: {
  action: string;
  ids: string[];
}) => {
  const res = await api.patch(`/${pathAdmin}/tour/change-multi`, dataFinal);
  return res.data;
};

export const tourDeleteService = async (id: string) => {
  const res = await api.patch(`/${pathAdmin}/tour/delete/${id}`);
  return res.data;
};
