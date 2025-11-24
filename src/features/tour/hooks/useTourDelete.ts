import { tourDeleteService } from "@/services/tour";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useTourDelete = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: tourDeleteService,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["tourList"] });
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
