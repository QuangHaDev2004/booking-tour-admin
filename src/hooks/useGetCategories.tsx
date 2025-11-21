import { getCategoriesService } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  const { data } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getCategoriesService,
  });

  return {
    categoryList: data?.categoryList ?? [],
  };
};
