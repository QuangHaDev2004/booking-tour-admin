import { roleDetailService } from "@/services/setting";
import type { RoleItem } from "@/types/setting";
import { useQuery } from "@tanstack/react-query";

export const useRoleDetail = ({ id }: { id: string }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["roleDetail", id],
    queryFn: () => roleDetailService(id),
  });

  const roleDetail: RoleItem = data?.roleDetail ?? {};

  return {
    roleDetail,
    isPending,
    isError,
  };
};
