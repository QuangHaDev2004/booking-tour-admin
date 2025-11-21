import { editCategoryService } from "@/services/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useCategoryEdit = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: FormData) => editCategoryService(id, formData),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["categoryDetail"],
        exact: false,
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
