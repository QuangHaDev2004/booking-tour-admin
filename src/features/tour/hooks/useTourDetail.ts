import { tourDetailService } from "@/services/tour";
import type { TourItem } from "@/types/tour";
import { useQuery } from "@tanstack/react-query";

export const useTourDetail = (id: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["tourDetail", id],
    queryFn: () => tourDetailService(id),
  });

  const tourDetail: TourItem = data?.tourDetail ?? {};

  return {
    tourDetail,
    isPending,
    isError,
  };
};
