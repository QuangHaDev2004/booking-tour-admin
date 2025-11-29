import { updateOrder } from "@/services/order";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateOrder = ({ id }: { id: string }) => {
  return useMutation({
    mutationFn: (dataFinal: {
      paymentMethod?: string | undefined;
      paymentStatus?: string | undefined;
      status?: string | undefined;
    }) => updateOrder(id, dataFinal),
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
};
