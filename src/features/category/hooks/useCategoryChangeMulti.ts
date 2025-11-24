import { changeMultiCategoryService } from "@/services/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useCategoryChangeMulti = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: changeMultiCategoryService,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["categoryList"] });
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
