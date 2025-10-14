import { EditorMCE } from "@/components/editor/EditorMCE";
import {
  FaChevronDown,
  FaRegTrashCan,
  FaUpDownLeftRight,
} from "react-icons/fa6";

const schedulesExample = [
  {
    title: "Title 1",
    description: "Description 1",
  },
];

export const TourSchedules = ({
  setSchedules,
}: {
  setSchedules: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        description: string;
      }[]
    >
  >;
}) => {
  const handleTitleChange = (index: number, value: string) => {
    setSchedules((prev) =>
      prev.map((item, i) => (i === index ? { ...item, title: value } : item)),
    );
  };

  const handleDescriptionChange = (index: number, content: string) => {
    setSchedules((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, description: content } : item,
      ),
    );
  };

  return (
    <div className="col-span-1 md:col-span-2">
      <label className="text-label mb-[10px] block text-sm font-semibold">
        Lịch trình tour
      </label>
      {schedulesExample.map((item, index) => (
        <div key={index} className="border-four rounded-sm border bg-white p-5">
          <div className="mb-[15px] flex flex-wrap items-center gap-[15px]">
            <div className="bg-three border-four flex h-[52px] w-[52px] cursor-move items-center justify-center rounded-sm border">
              <FaUpDownLeftRight className="text-[18px] text-[#A6A6A6]" />
            </div>
            <input
              type="text"
              onChange={(event) => handleTitleChange(index, event.target.value)}
              className="border-four text-secondary bg-three order-1 h-[52px] w-full flex-none rounded-sm border px-[18px] text-sm font-medium sm:order-none sm:flex-1"
            />
            <div className="bg-three border-four flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-sm border">
              <FaRegTrashCan className="text-error text-[18px]" />
            </div>
            <div className="bg-three border-four flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-sm border">
              <FaChevronDown className="text-[18px] text-[#A6A6A6]" />
            </div>
          </div>
          <EditorMCE
            id={`schedule-${index}`}
            onEditorChange={(content: string) =>
              handleDescriptionChange(index, content)
            }
          />
        </div>
      ))}
      <button
        type="button"
        className="bg-four/90 text-secondary mt-[15px] block h-10 cursor-pointer rounded-sm px-5 py-[10px] text-sm font-bold"
      >
        + Thêm lich trình
      </button>
    </div>
  );
};
