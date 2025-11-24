import { getTourListService } from "@/services/tour";
import type { TourItem } from "@/types/tour";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const useTourList = () => {
  const [searchParams] = useSearchParams();

  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (value) params[key] = value;
  });

  const { data } = useQuery({
    queryKey: ["tourList", params],
    queryFn: () => getTourListService(params),
    placeholderData: keepPreviousData
  });

  const tourList: TourItem[] = data?.tourList ?? [];
  const pagination = data?.pagination ?? {}

  return {
    tourList,
    pagination
  };
};
