import { getCategoryListService } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export const useCategoryList = () => {
  const { data } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getCategoryListService,
  });

  const categoryTree = data?.categoryTree ?? [];
  const categoryList = data?.categoryList ?? [];

  return {
    categoryTree,
    categoryList,
  };
};
