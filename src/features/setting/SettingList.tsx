import { Link } from "react-router";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { SETTING_LIST } from "./constants/settingList";

export const SettingList = () => {
  return (
    <>
      <PageTitle title="Cài đặt chung" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px] xl:grid-cols-3">
        {SETTING_LIST.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className="flex items-center justify-center gap-5 rounded-[14px] bg-white p-[25px] transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#E7EDFF]">
              <item.icon className="text-[30px] text-[#396AFF]" />
            </div>
            <div className="text-secondary text-lg font-bold">
              {item.content}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
