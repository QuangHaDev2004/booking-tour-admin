/* eslint-disable @typescript-eslint/no-explicit-any */
import { accountAdminCreateService } from "@/services/setting";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { UseFormReset } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  reset: UseFormReset<any>;
};

export const useAccountAdminCreate = ({ reset }: Props) => {
  const mutation = useMutation({
    mutationFn: accountAdminCreateService,
    onSuccess: (data) => {
      reset();
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
