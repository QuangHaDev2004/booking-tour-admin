import { FaTrashCan } from "react-icons/fa6";

export const ButtonDelete = ({ dataApi }: { dataApi: string }) => {
  // console.log(dataApi);

  return (
    <button className="cursor-pointer px-[16.5px] py-[10px]">
      <FaTrashCan className="text-[15px] text-error" />
    </button>
  );
};
