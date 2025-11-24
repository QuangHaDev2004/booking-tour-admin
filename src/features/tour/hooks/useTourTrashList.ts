import { tourTrashListService } from "@/services/tour";
import type { TourItem } from "@/types/tour";
import { useQuery } from "@tanstack/react-query";

export const useTourTrashList = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["tourTrashList"],
    queryFn: () => tourTrashListService(),
  });

  const tourTrashList: TourItem[] = data?.tourTrashList ?? [];

  return {
    tourTrashList,
    isPending,
    isError,
  };
};
