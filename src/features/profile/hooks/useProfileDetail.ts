import { profileDetailService } from "@/services/profile";
import type { ProfileItem } from "@/types/profile";
import { useQuery } from "@tanstack/react-query";

export const useProfileDetail = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["profileDetail"],
    queryFn: profileDetailService,
  });

  const profileDetail: ProfileItem = data?.profileDetail ?? {};

  return {
    profileDetail,
    isPending,
    isError,
  };
};
