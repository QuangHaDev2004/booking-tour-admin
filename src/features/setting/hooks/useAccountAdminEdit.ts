import { accountAdminEditService } from "@/services/setting";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useAccountAdminEdit = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataFinal: FormData) => accountAdminEditService(id, dataFinal),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["accountAdminDetail"],
        exact: false,
      });
      queryClient.invalidateQueries({ queryKey: ["accountAdminList"] });
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
