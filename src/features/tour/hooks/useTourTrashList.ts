import { tourTrashListService } from "@/services/tour";
import type { TourItem } from "@/types/tour";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const useTourTrashList = () => {
  const [searchParams] = useSearchParams();

  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (value) params[key] = value;
  });

  const { data, isPending, isError } = useQuery({
    queryKey: ["tourTrashList", params],
    queryFn: () => tourTrashListService(params),
    placeholderData: keepPreviousData
  });

  const tourTrashList: TourItem[] = data?.tourTrashList ?? [];
  const pagination = data?.pagination ?? {}

  return {
    tourTrashList,
    pagination,
    isPending,
    isError,
  };
};
