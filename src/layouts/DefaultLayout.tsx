import { useState } from "react";
import {
  FaBarsStaggered,
  FaGaugeHigh,
  FaGear,
  FaList,
  FaListCheck,
  FaPowerOff,
  FaTable,
  FaUser,
  FaUserGear,
  FaUserGroup,
} from "react-icons/fa6";
import { Link, Outlet } from "react-router";

export const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 flex h-[70px] w-full items-center border-b border-[#E0E0E0] bg-white">
        <Link
          to={"/"}
          className={`flex h-full items-center justify-center border-r border-[#E0E0E0] text-2xl font-extrabold transition-all duration-200 ${collapsed ? "w-20" : "w-60"}`}
        >
          {collapsed ? (
            <>
              <span className="text-primary">HW</span>
            </>
          ) : (
            <>
              <span className="text-primary">HW</span>
              <span className="text-secondary">Admin</span>
            </>
          )}
        </Link>
        <div className="flex flex-1 items-center justify-between">
          <button
            className="cursor-pointer px-[30px]"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FaBarsStaggered className="text-secondary text-2xl" />
          </button>
          <div className="mr-[30px] flex items-center gap-10">
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
                <div className="text-sm font-bold text-[#404040]">
                  Full Name
                </div>
                <div className="text-[12px] font-semibold text-[#565656]">
                  Role
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sider */}
      <nav
        className={`sider fixed top-[70px] left-0 h-[calc(100vh-70px)] overflow-y-auto border-r border-[#E0E0E0] bg-white py-[11px] transition-all duration-200 ${collapsed ? "w-20" : "w-60"} `}
      >
        <ul className="">
          <li>
            {collapsed ? (
              <Link
                to={""}
                className={`flex justify-center px-3 py-4 ${isActive ? "bg-primary mx-2 rounded-md text-white" : ""}`}
              >
                <FaGaugeHigh className="text-lg" />
              </Link>
            ) : (
              <Link
                to={""}
                className={`nav-item ${isActive ? "active bg-primary text-white" : "text-secondary"}`}
              >
                <FaGaugeHigh className="text-lg" /> Tổng quan
              </Link>
            )}
          </li>
          <li>
            {collapsed ? (
              <Link to={""} className={`flex justify-center px-3 py-4`}>
                <FaTable className="text-lg" />
              </Link>
            ) : (
              <Link to={""} className="nav-item">
                <FaTable className="text-lg" /> Quản lý danh mục
              </Link>
            )}
          </li>
          <li>
            {collapsed ? (
              <Link to={""} className={`flex justify-center px-3 py-4`}>
                <FaList className="text-lg" />
              </Link>
            ) : (
              <Link to={""} className="nav-item">
                <FaList className="text-lg" /> Quản lý tour
              </Link>
            )}
          </li>
          <li>
            {collapsed ? (
              <Link to={""} className={`flex justify-center px-3 py-4`}>
                <FaListCheck className="text-lg" />
              </Link>
            ) : (
              <Link to={""} className="nav-item">
                <FaListCheck className="text-lg" /> Quản lý đơn hàng
              </Link>
            )}
          </li>
          <li>
            {collapsed ? (
              <Link to={""} className={`flex justify-center px-3 py-4`}>
                <FaUser className="text-lg" />
              </Link>
            ) : (
              <Link to={""} className="nav-item">
                <FaUser className="text-lg" /> Quản lý người dùng
              </Link>
            )}
          </li>
          <li>
            {collapsed ? (
              <Link to={""} className={`flex justify-center px-3 py-4`}>
                <FaUserGroup className="text-lg" />
              </Link>
            ) : (
              <Link to={""} className="nav-item">
                <FaUserGroup className="text-lg" /> Thông tin liên hệ
              </Link>
            )}
          </li>
        </ul>
        <hr className="my-4 border border-[#E0E0E0]" />
        <ul>
          <li>
            {collapsed ? (
              <Link to={""} className={`flex justify-center px-3 py-4`}>
                <FaGear className="text-lg" />
              </Link>
            ) : (
              <Link to={""} className="nav-item">
                <FaGear className="text-lg" /> Cài đặt chung
              </Link>
            )}
          </li>
          <li>
            {collapsed ? (
              <Link to={""} className={`flex justify-center px-3 py-4`}>
                <FaUserGear className="text-lg" />
              </Link>
            ) : (
              <Link to={""} className="nav-item">
                <FaUserGear className="text-lg" /> Thông tin cá nhân
              </Link>
            )}
          </li>
          {collapsed ? (
            <button className="flex w-full cursor-pointer justify-center gap-4 px-3 py-4 text-[#F93C65]">
              <FaPowerOff className="text-lg" />
            </button>
          ) : (
            <button className="nav-item cursor-pointer text-[#F93C65]">
              <FaPowerOff className="text-lg" /> Đăng xuất
            </button>
          )}
        </ul>
      </nav>

      {/* Main */}
      <Outlet />
    </>
  );
};
