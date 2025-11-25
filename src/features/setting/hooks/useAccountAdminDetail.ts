import { accountAdminDetailService } from "@/services/setting";
import type { AccountAdminItem } from "@/types/account";
import { useQuery } from "@tanstack/react-query";

export const useAccountAdminDetail = ({ id }: { id: string }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["accountAdminDetail", id],
    queryFn: () => accountAdminDetailService(id),
  });

  const accountAdminDetail: AccountAdminItem = data?.accountAdminDetail ?? {};

  return {
    accountAdminDetail,
    isPending,
    isError,
  };
};
