import { templateDetailService } from "@/services/template";
import { useQuery } from "@tanstack/react-query";

export const useTemplateDetail = () => {
  const { data } = useQuery({
    queryKey: ["templateDetail"],
    queryFn: templateDetailService,
  });

  const templateDetail = data?.templateInfo ?? {};

  return {
    templateDetail,
  };
};
