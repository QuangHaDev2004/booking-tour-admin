import { getContactList } from "@/services/contact";
import type { ContactDetail } from "@/types/contact";
import { useQuery } from "@tanstack/react-query";

export const useContactList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["contactList"],
    queryFn: getContactList,
  });

  const contactList: ContactDetail[] = data?.contactList ?? [];

  return {
    contactList,
    isPending,
  };
};
