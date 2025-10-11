import { pathAdmin } from "@/config/path";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router";

type HeaderProps = {
  onOpenSidebar: () => void;
};

export const Header = ({ onOpenSidebar }: HeaderProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-[997] flex h-[70px] w-full items-center border-b border-[#E0E0E0] bg-white">
        <Link
          to={`${pathAdmin}/dashboard`}
          className="ml-[15px] flex h-full w-auto items-center justify-center text-2xl font-extrabold transition-all duration-200 sm:ml-0 sm:w-60"
        >
          <span className="text-primary">HW</span>
          <span className="text-secondary">Admin</span>
        </Link>
        <div className="mr-[15px] flex flex-1 items-center justify-end gap-5 sm:mr-[30px] sm:gap-10">
          <div className="relative h-[25px] cursor-pointer">
            <img
              src="/assets/images/icon-bell.svg"
              className="h-[25px] w-auto"
            />
            <span className="absolute top-[-5px] right-[-5px] flex h-4 w-4 items-center justify-center rounded-full bg-[#F93C65] text-[12px] font-bold text-white">
              6
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="h-11 w-11 overflow-hidden rounded-full">
              <img
                src="/assets/images/admin.jpg"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[3px]">
              <div className="text-sm font-bold text-[#404040]">Full Name</div>
              <div className="text-[12px] font-semibold text-[#565656]">
                Role
              </div>
            </div>
          </div>
          <button
            className="block cursor-pointer lg:hidden"
            onClick={onOpenSidebar}
          >
            <FaBars className="text-[20px]" />
          </button>
        </div>
      </div>
    </>
  );
};
