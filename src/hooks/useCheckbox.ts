/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export const useCheckbox = ({ data }: { data: any }) => {
  const [checkAll, setCheckAll] = useState(false);
  const [checkItems, setCheckItems] = useState<string[]>([]);

  const handleCheckAll = (checked: boolean) => {
    setCheckAll(checked);
    if (checked) {
      setCheckItems(data.map((item: any) => item.id));
    } else {
      setCheckItems([]);
    }
  };

  const handleCheckItem = (id: string, checked: boolean) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  // Cập nhật trạng thái CheckAll khi tất cả item được check
  useEffect(() => {
    if (checkItems.length === data.length) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [checkItems, data]);

  return {
    checkAll,
    checkItems,
    handleCheckAll,
    handleCheckItem,
  };
};
