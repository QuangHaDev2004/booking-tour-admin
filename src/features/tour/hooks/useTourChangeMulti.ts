import { tourChangeMultiService } from "@/services/tour";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

type Props = {
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  setAction: React.Dispatch<React.SetStateAction<string>>;
};

export const useTourChangeMulti = ({ setSelectedIds, setAction }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: tourChangeMultiService,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tourList"] });
      toast.success(data.message);
      setSelectedIds([]);
      setAction("");
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
