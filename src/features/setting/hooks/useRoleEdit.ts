import { roleEditService } from "@/services/setting";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

type DataFinalType = {
  permissions: string[];
  name: string;
  description?: string | undefined;
};

export const useRoleEdit = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataFinal: DataFinalType) => roleEditService(id, dataFinal),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["roleDetail"], exact: false });
      queryClient.invalidateQueries({ queryKey: ["roleList"] });
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
