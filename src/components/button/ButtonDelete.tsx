import { useConfirmDelete } from "@/hooks/useConfirmDelete";
import { FaTrashCan } from "react-icons/fa6";

export const ButtonDelete = ({ endpoint }: { endpoint: string }) => {
  const { confirmDelete } = useConfirmDelete();

  return (
    <button
      onClick={() => confirmDelete({ endpoint })}
      className="cursor-pointer px-[16.5px] py-[10px]"
    >
      <FaTrashCan className="text-error text-[15px]" />
    </button>
  );
};
