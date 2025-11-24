import { FaArrowRotateLeft } from "react-icons/fa6";

export const ButtonUndo = ({ endpoint }: { endpoint: string }) => {
  const handleUndo = () => {
    console.log(endpoint);
  };

  return (
    <button
      onClick={handleUndo}
      className="border-travel-four border-r px-[16.5px] py-[10px] cursor-pointer"
    >
      <FaArrowRotateLeft className="text-[15px]" />
    </button>
  );
};
