import { getCategoryListService } from "@/services/category";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const useCategoryList = () => {
  const [searchParams] = useSearchParams();

  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (value) params[key] = value;
  });

  const { data } = useQuery({
    queryKey: ["categoryList", params],
    queryFn: () => getCategoryListService(params),
    placeholderData: keepPreviousData,
  });

  const categoryTree = data?.categoryTree ?? [];
  const categoryList = data?.categoryList ?? [];
  const accountAdminList = data?.accountAdminList ?? [];

  return {
    categoryTree,
    categoryList,
    accountAdminList,
  };
};
