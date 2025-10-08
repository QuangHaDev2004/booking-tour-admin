import { Link } from "react-router";
import { FaPowerOff } from "react-icons/fa6";
import { useLocation } from "react-router";
import { mainMenus, settingsMenus } from "../../config/menu";
import { checkActive } from "../../helpers/checkActive";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { pathname } = useLocation();

  return (
    <>
      <nav
        className={`sider fixed overflow-y-auto border-r border-[#E0E0E0] bg-white py-[11px] ${isOpen ? "top-0 left-0 z-[999] h-full w-[280px]" : "top-[70px] left-0 hidden h-[calc(100vh-70px)] w-60 lg:block"}`}
      >
        <ul>
          {mainMenus.map((item) => {
            const isActive = checkActive(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`nav-item ${isActive ? "active bg-primary text-white" : "text-secondary"}`}
                >
                  <item.icon className="text-lg" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr className="my-4 border border-[#E0E0E0]" />
        <ul>
          {settingsMenus.map((item) => {
            const isActive = checkActive(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`nav-item ${isActive ? "active bg-primary text-white" : "text-secondary"}`}
                >
                  <item.icon className="text-lg" />
                  {item.label}
                </Link>
              </li>
            );
          })}
          <button className="nav-item cursor-pointer text-[#F93C65]">
            <FaPowerOff className="text-lg" /> Đăng xuất
          </button>
        </ul>
      </nav>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[998] bg-[#00000088] lg:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};
