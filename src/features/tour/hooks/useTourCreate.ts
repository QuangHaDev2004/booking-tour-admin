/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTourService } from "@/services/tour";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { UseFormReset } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  reset: UseFormReset<any>;
  setAvatars: React.Dispatch<React.SetStateAction<any[]>>;
  setLocationsFrom: React.Dispatch<React.SetStateAction<string[]>>;
  setLocationsTo: React.Dispatch<React.SetStateAction<string[]>>;
  setSchedules: React.Dispatch<
    React.SetStateAction<
      {
        id: `${string}-${string}-${string}-${string}-${string}`;
        title: string;
        description: string;
        isHidden: boolean;
      }[]
    >
  >;
};

export const useTourCreate = ({
  reset,
  setAvatars,
  setLocationsFrom,
  setLocationsTo,
  setSchedules,
}: Props) => {
  const mutation = useMutation({
    mutationFn: createTourService,
    onSuccess: (data) => {
      reset();
      setAvatars([]);
      setLocationsFrom([]);
      setLocationsTo([]);
      setSchedules([
        {
          id: crypto.randomUUID(),
          title: "",
          description: "",
          isHidden: false,
        },
      ]);
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
