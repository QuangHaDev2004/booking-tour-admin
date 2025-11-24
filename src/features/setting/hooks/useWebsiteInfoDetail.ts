import { websiteInfoDetailService } from "@/services/setting";
import type { WebsiteInfoItem } from "@/types/setting";
import { useQuery } from "@tanstack/react-query";

export const useWebsiteInfoDetail = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["websiteInfoDetail"],
    queryFn: websiteInfoDetailService,
  });

  const websiteInfoDetail: WebsiteInfoItem = data?.websiteInfo ?? {};

  return {
    websiteInfoDetail,
    isPending,
    isError,
  };
};
