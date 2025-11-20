import { api } from "@/libs/axios";

export const registerService = async (dataFinal: {
  fullName: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/admin/account/register", dataFinal);
  return res.data;
};
