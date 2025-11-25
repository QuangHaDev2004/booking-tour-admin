import { profileEditService } from "@/services/profile";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useProfileEdit = () => {
  const queryClient = useQueryClient();
  const setAccount = useAuthStore((s) => s.setAccount);

  const mutation = useMutation({
    mutationFn: profileEditService,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profileDetail"] });
      setAccount(data.account);
      toast.success(data.message);
      console.log(data.account);
      
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
