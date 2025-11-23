import { pathAdmin } from "@/config/path";
import { api } from "@/libs/axios";

export const createTourService = async (dataFinal: FormData) => {
  const res = await api.post(`/${pathAdmin}/tour/create`, dataFinal);
  return res.data;
};