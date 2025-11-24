import { getCityListService } from "@/services/city";
import { useQuery } from "@tanstack/react-query";

export const useCityList = () => {
  const { data } = useQuery({
    queryKey: ["cityList"],
    queryFn: getCityListService,
  });

  const cityList = data?.cityList ?? [];

  return {
    cityList,
  };
};
