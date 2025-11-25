import { pathAdmin } from "@/config/path";
import { profileChangePasswordService } from "@/services/profile";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useProfileChangePassword = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: profileChangePasswordService,
    onSuccess: (data) => {
      navigate(`/${pathAdmin}/profile/edit`);
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
