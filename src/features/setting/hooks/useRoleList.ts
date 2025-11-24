import { roleListService } from "@/services/setting";
import type { RoleItem } from "@/types/setting";
import { useQuery } from "@tanstack/react-query";

export const useRoleList = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["roleList"],
    queryFn: roleListService,
  });

  const roleList: RoleItem[] = data?.roleList ?? [];

  return {
    roleList,
    isPending,
    isError,
  };
};
