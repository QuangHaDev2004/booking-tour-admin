import { tourDestroyService } from "@/services/tour";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useTourDestroy = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: tourDestroyService,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["tourTrashList"] });
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
