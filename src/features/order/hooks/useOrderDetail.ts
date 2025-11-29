import { getOrderDetail } from "@/services/order";
import { useQuery } from "@tanstack/react-query";

export const useOrderDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["orderDetail", id],
    queryFn: () => getOrderDetail(id),
    enabled: !!id
  });
};
