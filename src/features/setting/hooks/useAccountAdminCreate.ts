/* eslint-disable @typescript-eslint/no-explicit-any */
import { accountAdminCreateService } from "@/services/setting";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { UseFormReset } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  reset: UseFormReset<any>;
  setAvatars: React.Dispatch<React.SetStateAction<any[]>>;
};

export const useAccountAdminCreate = ({ reset, setAvatars }: Props) => {
  const mutation = useMutation({
    mutationFn: accountAdminCreateService,
    onSuccess: (data) => {
      reset();
      setAvatars([]);
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
