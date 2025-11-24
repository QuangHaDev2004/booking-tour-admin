import { websiteInfoEditService } from "@/services/setting";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useWebsiteInfoEdit = () => {
  const mutation = useMutation({
    mutationFn: websiteInfoEditService,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
