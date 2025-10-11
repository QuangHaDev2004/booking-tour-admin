import { Search } from "../../components/actionBar/Search";
// import { ActionSelect } from "../../components/tableActions/ChangeMultiSelect";

export const ActionBarContact = () => {
  const ACTION_OPTIONS = [
    {
      label: "Xóa",
      value: "delete",
    },
  ];

  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      {/* <ActionSelect options={ACTION_OPTIONS} /> */}
      <Search />
    </div>
  );
};
