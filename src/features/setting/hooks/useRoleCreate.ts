/* eslint-disable @typescript-eslint/no-explicit-any */
import { roleCreateService } from "@/services/setting";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { UseFormReset } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  reset: UseFormReset<any>;
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>;
};

export const useRoleCreate = ({ reset, setPermissions }: Props) => {
  const mutation = useMutation({
    mutationFn: roleCreateService,
    onSuccess: (data) => {
      reset();
      setPermissions([]);
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
