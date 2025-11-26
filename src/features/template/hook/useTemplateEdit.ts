import { templateEditService } from "@/services/template";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useTemplateEdit = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: templateEditService,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["templateDetail"] });
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
