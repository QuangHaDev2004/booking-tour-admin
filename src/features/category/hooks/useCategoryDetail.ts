import { getCategoryDetailService } from "@/services/category";
import type { CategoryItem } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

export const useCategoryDetail = (id?: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["categoryDetail", id],
    queryFn: () => getCategoryDetailService(id),
  });

  const categoryDetail: CategoryItem | null = data?.categoryDetail ?? null;

  return {
    categoryDetail,
    isPending,
    isError,
  };
};
