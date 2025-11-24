import { getAccounAdminListService } from "@/services/setting";
import type { AccountAdminItem } from "@/types/account";
import { useQuery } from "@tanstack/react-query";

export const useAccountAdminList = () => {
  const { data } = useQuery({
    queryKey: ["accountAdminList"],
    queryFn: getAccounAdminListService,
  });

  const fullAccountAdminList: AccountAdminItem[] = data?.fullAccountAdminList ?? [];

  return {
    fullAccountAdminList,
  };
};
