import { getOrderList } from "@/services/order";
import { useQuery } from "@tanstack/react-query";

export const useOrderList = () => {
  return useQuery({
    queryKey: ["orderList"],
    queryFn: getOrderList,
  });
};
