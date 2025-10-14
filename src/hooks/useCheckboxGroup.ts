import { useState } from "react";

export const useCheckboxGroup = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setCheckedItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  return { checkedItems, handleCheckboxChange };
};
